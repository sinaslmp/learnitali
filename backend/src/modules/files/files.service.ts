import { Injectable, BadRequestException, Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import {
  S3Client, PutObjectCommand, DeleteObjectCommand,
  GetObjectCommand, HeadObjectCommand,
} from '@aws-sdk/client-s3';
import { getSignedUrl } from '@aws-sdk/s3-request-presigner';
import { PrismaService } from '@/prisma/prisma.service';
import { randomUUID as uuid } from 'crypto';
import * as path from 'path';

const ALLOWED_AUDIO_TYPES = ['audio/mpeg', 'audio/mp3', 'audio/wav', 'audio/ogg', 'audio/m4a'];
const ALLOWED_PDF_TYPES = ['application/pdf'];
const ALLOWED_IMAGE_TYPES = ['image/jpeg', 'image/png', 'image/webp', 'image/gif'];

const MAX_AUDIO_SIZE = 50 * 1024 * 1024;  // 50MB
const MAX_PDF_SIZE = 100 * 1024 * 1024;    // 100MB
const MAX_IMAGE_SIZE = 10 * 1024 * 1024;   // 10MB

@Injectable()
export class FilesService {
  private readonly s3: S3Client;
  private readonly bucket: string;
  private readonly cdnUrl: string;
  private readonly logger = new Logger(FilesService.name);

  constructor(
    private readonly config: ConfigService,
    private readonly prisma: PrismaService,
  ) {
    const storageConfig = config.get('storage');
    this.bucket = storageConfig.bucket;
    this.cdnUrl = storageConfig.cdnUrl;

    this.s3 = new S3Client({
      region: storageConfig.region,
      credentials: {
        accessKeyId: storageConfig.accessKeyId,
        secretAccessKey: storageConfig.secretAccessKey,
      },
      ...(storageConfig.endpoint && { endpoint: storageConfig.endpoint }),
    });
  }

  // ─── Audio Upload ──────────────────────────────────────────────
  async uploadAudio(
    file: Express.Multer.File,
    uploadedBy: string,
    metadata?: { language?: string; transcript?: string },
  ) {
    this.validateFile(file, ALLOWED_AUDIO_TYPES, MAX_AUDIO_SIZE, 'audio');

    const ext = path.extname(file.originalname);
    const key = `audio/${uuid()}${ext}`;
    const url = await this.uploadToS3(file.buffer, key, file.mimetype);

    return this.prisma.audioFile.create({
      data: {
        filename: path.basename(key),
        originalName: file.originalname,
        mimeType: file.mimetype,
        size: file.size,
        url,
        storageKey: key,
        uploadedBy,
        language: metadata?.language,
        transcript: metadata?.transcript,
      },
    });
  }

  // ─── PDF Upload ────────────────────────────────────────────────
  async uploadPDF(file: Express.Multer.File, uploadedBy: string, description?: string) {
    this.validateFile(file, ALLOWED_PDF_TYPES, MAX_PDF_SIZE, 'PDF');

    const key = `pdfs/${uuid()}.pdf`;
    const url = await this.uploadToS3(file.buffer, key, file.mimetype);

    return this.prisma.pDFDocument.create({
      data: {
        filename: path.basename(key),
        originalName: file.originalname,
        mimeType: file.mimetype,
        size: file.size,
        url,
        storageKey: key,
        uploadedBy,
        description,
      },
    });
  }

  // ─── Image Upload ──────────────────────────────────────────────
  async uploadImage(file: Express.Multer.File, folder = 'images'): Promise<string> {
    this.validateFile(file, ALLOWED_IMAGE_TYPES, MAX_IMAGE_SIZE, 'image');

    const ext = path.extname(file.originalname);
    const key = `${folder}/${uuid()}${ext}`;
    return this.uploadToS3(file.buffer, key, file.mimetype);
  }

  // ─── Presigned URL (for direct client upload) ──────────────────
  async getPresignedUploadUrl(key: string, contentType: string, expiresIn = 300) {
    const command = new PutObjectCommand({
      Bucket: this.bucket,
      Key: key,
      ContentType: contentType,
    });
    const url = await getSignedUrl(this.s3, command, { expiresIn });
    return { url, key };
  }

  // ─── Delete File ───────────────────────────────────────────────
  async deleteFile(storageKey: string) {
    await this.s3.send(new DeleteObjectCommand({ Bucket: this.bucket, Key: storageKey }));
    this.logger.log(`Deleted file: ${storageKey}`);
  }

  // ─── Private helpers ───────────────────────────────────────────
  private async uploadToS3(buffer: Buffer, key: string, contentType: string): Promise<string> {
    await this.s3.send(new PutObjectCommand({
      Bucket: this.bucket,
      Key: key,
      Body: buffer,
      ContentType: contentType,
      ACL: 'public-read',
    }));

    return this.cdnUrl
      ? `${this.cdnUrl}/${key}`
      : `https://${this.bucket}.s3.amazonaws.com/${key}`;
  }

  private validateFile(file: Express.Multer.File, allowed: string[], maxSize: number, type: string) {
    if (!allowed.includes(file.mimetype)) {
      throw new BadRequestException(`Invalid ${type} type: ${file.mimetype}`);
    }
    if (file.size > maxSize) {
      throw new BadRequestException(`${type} file too large. Max: ${maxSize / (1024 * 1024)}MB`);
    }
  }
}
