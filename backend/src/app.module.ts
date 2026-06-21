import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { APP_GUARD, APP_FILTER, APP_INTERCEPTOR } from '@nestjs/core';
import { ThrottlerModule, ThrottlerGuard } from '@nestjs/throttler';
import { CacheModule } from '@nestjs/cache-manager';

import configuration from '@/config/configuration';
import { PrismaModule } from '@/prisma/prisma.module';
import { AllExceptionsFilter } from '@/common/filters/all-exceptions.filter';
import { ResponseInterceptor } from '@/common/interceptors/response.interceptor';
import { JwtAuthGuard } from '@/common/guards/jwt-auth.guard';
import { RolesGuard } from '@/common/guards/roles.guard';

// Feature modules
import { HealthModule } from '@/modules/health/health.module';
import { AuthModule } from '@/modules/auth/auth.module';
import { UsersModule } from '@/modules/users/users.module';
import { CoursesModule } from '@/modules/courses/courses.module';
import { ProgressModule } from '@/modules/progress/progress.module';
import { QuizModule } from '@/modules/quiz/quiz.module';
import { FlashcardsModule } from '@/modules/flashcards/flashcards.module';
import { FilesModule } from '@/modules/files/files.module';
import { NotesModule } from '@/modules/notes/notes.module';

@Module({
  imports: [
    // Config
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
      envFilePath: ['.env.local', '.env'],
    }),

    // Rate limiting
    ThrottlerModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (config: ConfigService) => ({
        throttlers: [
          {
            ttl: config.get<number>('throttle.ttl', 60) * 1000,
            limit: config.get<number>('throttle.limit', 100),
          },
        ],
      }),
      inject: [ConfigService],
    }),

    // Redis Cache
    CacheModule.registerAsync({
      isGlobal: true,
      imports: [ConfigModule],
      useFactory: (config: ConfigService) => ({
        store: 'memory', // replace with ioredis store in production
        ttl: config.get<number>('redis.ttl', 300),
        max: 1000,
      }),
      inject: [ConfigService],
    }),

    // Core
    PrismaModule,

    // Feature modules
    HealthModule,
    AuthModule,
    UsersModule,
    CoursesModule,
    ProgressModule,
    QuizModule,
    FlashcardsModule,
    FilesModule,
    NotesModule,
  ],
  providers: [
    // Global rate limit guard
    { provide: APP_GUARD, useClass: ThrottlerGuard },

    // Global JWT guard (bypass with @Public())
    { provide: APP_GUARD, useClass: JwtAuthGuard },

    // Global RBAC guard
    { provide: APP_GUARD, useClass: RolesGuard },

    // Global exception filter
    { provide: APP_FILTER, useClass: AllExceptionsFilter },

    // Global response wrapper
    { provide: APP_INTERCEPTOR, useClass: ResponseInterceptor },
  ],
})
export class AppModule {}
