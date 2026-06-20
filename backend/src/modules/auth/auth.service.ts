import {
  Injectable, BadRequestException, UnauthorizedException,
  ConflictException, NotFoundException, Logger,
} from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
import { PrismaService } from '@/prisma/prisma.service';
import { hashPassword, comparePassword } from '@/common/utils/hash';
import { RegisterDto } from './dto/register.dto';
import {
  LoginDto, ForgotPasswordDto, ResetPasswordDto,
  VerifyEmailDto, ChangePasswordDto,
} from './dto/login.dto';
import { randomBytes } from 'crypto';
import { addDays, addMinutes } from 'date-fns';

@Injectable()
export class AuthService {
  private readonly logger = new Logger(AuthService.name);

  constructor(
    private readonly prisma: PrismaService,
    private readonly jwt: JwtService,
    private readonly config: ConfigService,
  ) {}

  // ─── Register ──────────────────────────────────────────────────
  async register(dto: RegisterDto) {
    const exists = await this.prisma.user.findUnique({ where: { email: dto.email.toLowerCase() } });
    if (exists) throw new ConflictException('Email already registered');

    const hash = await hashPassword(dto.password);
    const verificationToken = randomBytes(32).toString('hex');

    const user = await this.prisma.$transaction(async (tx) => {
      const u = await tx.user.create({
        data: {
          email: dto.email.toLowerCase(),
          passwordHash: hash,
          status: 'PENDING_VERIFICATION',
          profile: {
            create: {
              firstName: dto.firstName,
              lastName: dto.lastName,
            },
          },
          settings: { create: {} },
          subscription: { create: { plan: 'FREE', status: 'ACTIVE' } },
        },
        select: { id: true, email: true, role: true },
      });

      await tx.emailVerificationToken.create({
        data: {
          userId: u.id,
          token: verificationToken,
          expiresAt: addMinutes(new Date(), 60),
        },
      });

      return u;
    });

    // TODO: send verification email via queue
    this.logger.log(`New user registered: ${user.email}`);

    return {
      message: 'Registration successful. Please check your email to verify your account.',
      userId: user.id,
    };
  }

  // ─── Login ─────────────────────────────────────────────────────
  async login(dto: LoginDto, ipAddress?: string, userAgent?: string) {
    const user = await this.prisma.user.findUnique({
      where: { email: dto.email.toLowerCase() },
      select: { id: true, email: true, role: true, status: true, passwordHash: true, emailVerified: true },
    });

    if (!user || !user.passwordHash) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const isValid = await comparePassword(dto.password, user.passwordHash);
    if (!isValid) throw new UnauthorizedException('Invalid credentials');

    if (user.status === 'BANNED') throw new UnauthorizedException('Account banned');
    if (!user.emailVerified) throw new UnauthorizedException('Please verify your email first');

    const tokens = await this.generateTokens(user.id, user.email, user.role, dto.fingerprint, ipAddress, userAgent);

    await this.prisma.user.update({
      where: { id: user.id },
      data: { lastLoginAt: new Date() },
    });

    return {
      accessToken: tokens.accessToken,
      refreshToken: tokens.refreshToken,
      user: { id: user.id, email: user.email, role: user.role },
    };
  }

  // ─── Refresh Token ─────────────────────────────────────────────
  async refreshTokens(userId: string, email: string, role: string, oldRefreshToken: string) {
    // Revoke old token
    await this.prisma.refreshToken.update({
      where: { token: oldRefreshToken },
      data: { revokedAt: new Date() },
    });

    // Issue new pair
    return this.generateTokens(userId, email, role);
  }

  // ─── Logout ────────────────────────────────────────────────────
  async logout(userId: string, refreshToken?: string) {
    if (refreshToken) {
      await this.prisma.refreshToken.updateMany({
        where: { userId, token: refreshToken },
        data: { revokedAt: new Date() },
      });
    } else {
      // Revoke ALL tokens for this user (logout everywhere)
      await this.prisma.refreshToken.updateMany({
        where: { userId, revokedAt: null },
        data: { revokedAt: new Date() },
      });
    }
    return { message: 'Logged out successfully' };
  }

  // ─── Email Verification ────────────────────────────────────────
  async verifyEmail(dto: VerifyEmailDto) {
    const token = await this.prisma.emailVerificationToken.findUnique({
      where: { token: dto.token },
      include: { user: { select: { id: true, emailVerified: true } } },
    });

    if (!token || token.usedAt || token.expiresAt < new Date()) {
      throw new BadRequestException('Invalid or expired verification token');
    }

    if (token.user.emailVerified) {
      return { message: 'Email already verified' };
    }

    await this.prisma.$transaction([
      this.prisma.user.update({
        where: { id: token.userId },
        data: { emailVerified: true, emailVerifiedAt: new Date(), status: 'ACTIVE' },
      }),
      this.prisma.emailVerificationToken.update({
        where: { id: token.id },
        data: { usedAt: new Date() },
      }),
    ]);

    return { message: 'Email verified successfully' };
  }

  // ─── Forgot Password ───────────────────────────────────────────
  async forgotPassword(dto: ForgotPasswordDto) {
    const user = await this.prisma.user.findUnique({ where: { email: dto.email.toLowerCase() } });

    // Always return success to prevent email enumeration
    if (!user) return { message: 'If this email exists, a reset link has been sent' };

    const token = randomBytes(32).toString('hex');
    await this.prisma.passwordResetToken.create({
      data: {
        userId: user.id,
        token,
        expiresAt: addMinutes(new Date(), 30),
      },
    });

    // TODO: send reset email via queue

    return { message: 'If this email exists, a reset link has been sent' };
  }

  // ─── Reset Password ────────────────────────────────────────────
  async resetPassword(dto: ResetPasswordDto) {
    const token = await this.prisma.passwordResetToken.findUnique({
      where: { token: dto.token },
    });

    if (!token || token.usedAt || token.expiresAt < new Date()) {
      throw new BadRequestException('Invalid or expired reset token');
    }

    const hash = await hashPassword(dto.password);

    await this.prisma.$transaction([
      this.prisma.user.update({
        where: { id: token.userId },
        data: { passwordHash: hash },
      }),
      this.prisma.passwordResetToken.update({
        where: { id: token.id },
        data: { usedAt: new Date() },
      }),
      // Revoke all refresh tokens after password reset
      this.prisma.refreshToken.updateMany({
        where: { userId: token.userId, revokedAt: null },
        data: { revokedAt: new Date() },
      }),
    ]);

    return { message: 'Password reset successfully' };
  }

  // ─── Change Password ───────────────────────────────────────────
  async changePassword(userId: string, dto: ChangePasswordDto) {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      select: { passwordHash: true },
    });
    if (!user?.passwordHash) throw new NotFoundException('User not found');

    const valid = await comparePassword(dto.currentPassword, user.passwordHash);
    if (!valid) throw new UnauthorizedException('Current password is incorrect');

    const hash = await hashPassword(dto.newPassword);
    await this.prisma.user.update({ where: { id: userId }, data: { passwordHash: hash } });

    return { message: 'Password changed successfully' };
  }

  // ─── Google OAuth ──────────────────────────────────────────────
  async googleLogin(googleUser: {
    email: string; firstName?: string; lastName?: string;
    providerId: string; accessToken?: string;
  }) {
    let user = await this.prisma.user.findUnique({
      where: { email: googleUser.email.toLowerCase() },
      select: { id: true, email: true, role: true },
    });

    if (!user) {
      user = await this.prisma.$transaction(async (tx) => {
        const u = await tx.user.create({
          data: {
            email: googleUser.email.toLowerCase(),
            emailVerified: true,
            emailVerifiedAt: new Date(),
            status: 'ACTIVE',
            profile: {
              create: {
                firstName: googleUser.firstName,
                lastName: googleUser.lastName,
              },
            },
            settings: { create: {} },
            subscription: { create: { plan: 'FREE', status: 'ACTIVE' } },
          },
          select: { id: true, email: true, role: true },
        });

        await tx.socialAccount.create({
          data: {
            userId: u.id,
            provider: 'google',
            providerId: googleUser.providerId,
            accessToken: googleUser.accessToken,
          },
        });

        return u;
      });
    } else {
      // Update social account
      await this.prisma.socialAccount.upsert({
        where: { provider_providerId: { provider: 'google', providerId: googleUser.providerId } },
        create: { userId: user.id, provider: 'google', providerId: googleUser.providerId, accessToken: googleUser.accessToken },
        update: { accessToken: googleUser.accessToken },
      });
    }

    return this.generateTokens(user.id, user.email, user.role);
  }

  // ─── Token Generation ──────────────────────────────────────────
  private async generateTokens(
    userId: string,
    email: string,
    role: string,
    fingerprint?: string,
    ipAddress?: string,
    userAgent?: string,
  ) {
    const payload = { sub: userId, email, role };

    const [accessToken, refreshToken] = await Promise.all([
      this.jwt.signAsync(payload, {
        secret: this.config.get('jwt.accessSecret'),
        expiresIn: this.config.get('jwt.accessExpiresIn'),
      }),
      this.jwt.signAsync(payload, {
        secret: this.config.get('jwt.refreshSecret'),
        expiresIn: this.config.get('jwt.refreshExpiresIn'),
      }),
    ]);

    await this.prisma.refreshToken.create({
      data: {
        userId,
        token: refreshToken,
        fingerprint,
        ipAddress,
        userAgent,
        expiresAt: addDays(new Date(), 7),
      },
    });

    return { accessToken, refreshToken };
  }
}
