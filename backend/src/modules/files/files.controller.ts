import {
  Controller, Post, Delete, Param, Body,
  UseGuards, UseInterceptors, UploadedFile,
  ParseFilePipe, MaxFileSizeValidator, FileTypeValidator,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiTags, ApiBearerAuth, ApiOperation, ApiConsumes } from '@nestjs/swagger';
import { UserRole } from '@prisma/client';
import { FilesService } from './files.service';
import { JwtAuthGuard } from '@/common/guards/jwt-auth.guard';
import { RolesGuard } from '@/common/guards/roles.guard';
import { Roles } from '@/common/decorators/roles.decorator';
import { CurrentUser } from '@/common/decorators/current-user.decorator';

@ApiTags('Files')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard, RolesGuard)
@Controller('files')
export class FilesController {
  constructor(private readonly filesService: FilesService) {}

  @Post('audio')
  @Roles(UserRole.ADMIN, UserRole.TEACHER)
  @UseInterceptors(FileInterceptor('file'))
  @ApiConsumes('multipart/form-data')
  @ApiOperation({ summary: 'Upload audio file' })
  uploadAudio(
    @CurrentUser('id') userId: string,
    @UploadedFile() file: Express.Multer.File,
    @Body() body: { language?: string; transcript?: string },
  ) {
    return this.filesService.uploadAudio(file, userId, body);
  }

  @Post('pdf')
  @Roles(UserRole.ADMIN, UserRole.TEACHER)
  @UseInterceptors(FileInterceptor('file'))
  @ApiConsumes('multipart/form-data')
  @ApiOperation({ summary: 'Upload PDF document' })
  uploadPDF(
    @CurrentUser('id') userId: string,
    @UploadedFile() file: Express.Multer.File,
    @Body('description') description?: string,
  ) {
    return this.filesService.uploadPDF(file, userId, description);
  }

  @Post('image')
  @Roles(UserRole.ADMIN)
  @UseInterceptors(FileInterceptor('file'))
  @ApiConsumes('multipart/form-data')
  @ApiOperation({ summary: 'Upload image' })
  uploadImage(@UploadedFile() file: Express.Multer.File) {
    return this.filesService.uploadImage(file);
  }

  @Post('presigned-url')
  @Roles(UserRole.ADMIN)
  @ApiOperation({ summary: 'Get presigned URL for direct client upload' })
  getPresignedUrl(@Body() body: { key: string; contentType: string }) {
    return this.filesService.getPresignedUploadUrl(body.key, body.contentType);
  }

  @Delete(':key')
  @Roles(UserRole.ADMIN)
  @ApiOperation({ summary: 'Admin: delete a file from storage' })
  deleteFile(@Param('key') key: string) {
    return this.filesService.deleteFile(key);
  }
}
