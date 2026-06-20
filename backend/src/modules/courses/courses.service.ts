import { Injectable, NotFoundException, ForbiddenException, ConflictException } from '@nestjs/common';
import { PrismaService } from '@/prisma/prisma.service';
import { CreateCourseDto, UpdateCourseDto } from './dto/create-course.dto';
import { PaginationDto, paginate, buildPaginatedResponse } from '@/common/utils/pagination';

@Injectable()
export class CoursesService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(pagination: PaginationDto, published = true) {
    const { skip, take } = paginate(pagination.page, pagination.limit);
    const where = published ? { isPublished: true } : {};
    const [courses, total] = await Promise.all([
      this.prisma.course.findMany({
        where,
        skip,
        take,
        include: {
          creator: { select: { id: true, email: true, profile: { select: { firstName: true, lastName: true } } } },
          tags: true,
          _count: { select: { lessons: true, enrollments: true } },
        },
        orderBy: { sortOrder: 'asc' },
      }),
      this.prisma.course.count({ where }),
    ]);
    return buildPaginatedResponse(courses, total, pagination.page ?? 1, pagination.limit ?? 20);
  }

  async findOne(slug: string) {
    const course = await this.prisma.course.findUnique({
      where: { slug },
      include: {
        lessons: {
          where: { isPublished: true },
          orderBy: { number: 'asc' },
          select: {
            id: true, number: true, slug: true, title: true, titleFa: true,
            estimatedMinutes: true, difficulty: true, iconEmoji: true, colorGradient: true,
          },
        },
        tags: true,
        _count: { select: { enrollments: true } },
      },
    });
    if (!course) throw new NotFoundException('Course not found');
    return course;
  }

  async create(creatorId: string, dto: CreateCourseDto) {
    const exists = await this.prisma.course.findUnique({ where: { slug: dto.slug } });
    if (exists) throw new ConflictException('Course slug already exists');

    return this.prisma.course.create({
      data: {
        ...dto,
        creatorId,
        tags: dto.tags ? { create: dto.tags.map((tag) => ({ tag })) } : undefined,
      },
    });
  }

  async update(id: string, dto: UpdateCourseDto) {
    await this.findById(id);
    return this.prisma.course.update({ where: { id }, data: dto });
  }

  async delete(id: string) {
    await this.findById(id);
    return this.prisma.course.delete({ where: { id } });
  }

  async enroll(userId: string, courseId: string) {
    const course = await this.prisma.course.findUnique({ where: { id: courseId } });
    if (!course || !course.isPublished) throw new NotFoundException('Course not found');

    const existing = await this.prisma.enrollment.findUnique({
      where: { userId_courseId: { userId, courseId } },
    });
    if (existing?.isActive) throw new ConflictException('Already enrolled');

    return this.prisma.enrollment.upsert({
      where: { userId_courseId: { userId, courseId } },
      create: { userId, courseId },
      update: { isActive: true, enrolledAt: new Date() },
    });
  }

  async unenroll(userId: string, courseId: string) {
    return this.prisma.enrollment.update({
      where: { userId_courseId: { userId, courseId } },
      data: { isActive: false },
    });
  }

  async getMyEnrollments(userId: string) {
    return this.prisma.enrollment.findMany({
      where: { userId, isActive: true },
      include: {
        course: {
          include: { tags: true, _count: { select: { lessons: true } } },
        },
      },
    });
  }

  private async findById(id: string) {
    const course = await this.prisma.course.findUnique({ where: { id } });
    if (!course) throw new NotFoundException('Course not found');
    return course;
  }
}
