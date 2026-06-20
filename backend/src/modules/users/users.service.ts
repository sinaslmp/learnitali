import { Injectable, NotFoundException, ForbiddenException } from '@nestjs/common';
import { PrismaService } from '@/prisma/prisma.service';
import { UpdateProfileDto } from './dto/update-profile.dto';
import { PaginationDto, paginate, buildPaginatedResponse } from '@/common/utils/pagination';
import { UserRole } from '@prisma/client';

@Injectable()
export class UsersService {
  constructor(private readonly prisma: PrismaService) {}

  async getMe(userId: string) {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      include: {
        profile: true,
        settings: true,
        subscription: true,
        _count: {
          select: {
            enrollments: true,
            notes: true,
            achievements: true,
          },
        },
      },
    });
    if (!user) throw new NotFoundException('User not found');
    const { passwordHash, ...safe } = user;
    return safe;
  }

  async updateProfile(userId: string, dto: UpdateProfileDto) {
    await this.prisma.userProfile.upsert({
      where: { userId },
      create: { userId, ...dto },
      update: dto,
    });
    return this.getMe(userId);
  }

  async updateSettings(userId: string, dto: Record<string, unknown>) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const data = dto as any;
    return this.prisma.userSettings.upsert({
      where: { userId },
      create: { userId, ...data },
      update: data,
    });
  }

  async getUserById(id: string) {
    const user = await this.prisma.user.findUnique({
      where: { id },
      include: { profile: true, subscription: true },
    });
    if (!user) throw new NotFoundException('User not found');
    const { passwordHash, ...safe } = user;
    return safe;
  }

  // Admin: list all users
  async listUsers(pagination: PaginationDto, search?: string, role?: UserRole) {
    const { skip, take } = paginate(pagination.page, pagination.limit);

    const where = {
      ...(search && {
        OR: [
          { email: { contains: search, mode: 'insensitive' as const } },
          { profile: { firstName: { contains: search, mode: 'insensitive' as const } } },
          { profile: { lastName: { contains: search, mode: 'insensitive' as const } } },
        ],
      }),
      ...(role && { role }),
    };

    const [users, total] = await Promise.all([
      this.prisma.user.findMany({
        where,
        skip,
        take,
        include: { profile: true, subscription: true },
        orderBy: { createdAt: 'desc' },
      }),
      this.prisma.user.count({ where }),
    ]);

    const safe = users.map((u) => { const { passwordHash: _pw, ...rest } = u; return rest; });
    return buildPaginatedResponse(safe, total, pagination.page ?? 1, pagination.limit ?? 20);
  }

  // Admin: update user role
  async updateUserRole(adminId: string, targetId: string, role: UserRole) {
    if (adminId === targetId) throw new ForbiddenException('Cannot change your own role');
    return this.prisma.user.update({
      where: { id: targetId },
      data: { role },
      select: { id: true, email: true, role: true },
    });
  }

  // Admin: ban/unban user
  async setUserStatus(targetId: string, status: 'ACTIVE' | 'BANNED' | 'INACTIVE') {
    return this.prisma.user.update({
      where: { id: targetId },
      data: { status },
      select: { id: true, email: true, status: true },
    });
  }

  async deleteAccount(userId: string) {
    // Soft approach: anonymize the user
    await this.prisma.user.update({
      where: { id: userId },
      data: {
        email: `deleted-${userId}@deleted.learnitali.com`,
        passwordHash: null,
        status: 'INACTIVE',
        emailVerified: false,
      },
    });
    return { message: 'Account deleted' };
  }
}
