import { NestFactory, Reflector } from '@nestjs/core';
import { ValidationPipe, VersioningType, Logger } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ConfigService } from '@nestjs/config';
import { AppModule } from './app.module';
import * as express from 'express';

async function bootstrap() {
  const logger = new Logger('Bootstrap');
  const app = await NestFactory.create(AppModule, { logger: ['error', 'warn', 'log'] });

  const config = app.get(ConfigService);
  const port = config.get<number>('app.port', 4000);
  const prefix = config.get<string>('app.prefix', 'api');
  const version = config.get<string>('app.version', 'v1');
  const allowedOrigins = config.get<string[]>('app.allowedOrigins', ['http://localhost:3001']);

  // CORS
  app.enableCors({
    origin: allowedOrigins,
    credentials: true,
    methods: ['GET', 'POST', 'PATCH', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
  });

  // API versioning
  app.enableVersioning({ type: VersioningType.URI });

  // Global prefix
  app.setGlobalPrefix(`${prefix}/${version}`);

  // Body size
  app.use(express.json({ limit: '10mb' }));
  app.use(express.urlencoded({ extended: true, limit: '10mb' }));

  // Global validation
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
      transformOptions: { enableImplicitConversion: true },
      stopAtFirstError: false,
    }),
  );

  // Swagger documentation
  if (config.get('app.env') !== 'production') {
    const doc = new DocumentBuilder()
      .setTitle('Learnitali API')
      .setDescription('Italian learning platform REST API for Persian speakers')
      .setVersion('1.0')
      .addBearerAuth()
      .addTag('Auth', 'Authentication & Authorization')
      .addTag('Users', 'User management')
      .addTag('Courses', 'Course management')
      .addTag('Lessons', 'Lesson content')
      .addTag('Progress', 'Learning progress tracking')
      .addTag('Quizzes', 'Quiz system')
      .addTag('Flashcards', 'SM-2 flashcard system')
      .addTag('Files', 'File storage (audio, PDF, images)')
      .build();

    const document = SwaggerModule.createDocument(app, doc);
    SwaggerModule.setup(`${prefix}/docs`, app, document, {
      swaggerOptions: { persistAuthorization: true },
    });
    logger.log(`Swagger: http://localhost:${port}/${prefix}/docs`);
  }

  await app.listen(port);
  logger.log(`🚀 Learnitali API running at http://localhost:${port}/${prefix}/${version}`);
  logger.log(`Environment: ${config.get('app.env')}`);
}

bootstrap();
