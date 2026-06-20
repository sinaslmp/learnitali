import {
  Controller, Get, Post, Patch, Delete,
  Body, Param, Query, UseGuards, HttpCode, HttpStatus,
} from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { LessonSectionType } from '@prisma/client';
import { NotesService } from './notes.service';
import { JwtAuthGuard } from '@/common/guards/jwt-auth.guard';
import { CurrentUser } from '@/common/decorators/current-user.decorator';
import { PaginationDto } from '@/common/utils/pagination';

@ApiTags('Notes')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('notes')
export class NotesController {
  constructor(private readonly notesService: NotesService) {}

  @Get()
  @ApiOperation({ summary: 'List my notes' })
  findAll(
    @CurrentUser('id') userId: string,
    @Query() pagination: PaginationDto,
    @Query('lessonId') lessonId?: string,
  ) {
    return this.notesService.findAll(userId, pagination, lessonId);
  }

  @Post()
  @ApiOperation({ summary: 'Create a note' })
  create(
    @CurrentUser('id') userId: string,
    @Body() body: {
      content: string;
      title?: string;
      lessonId?: string;
      courseId?: string;
      section?: LessonSectionType;
      tags?: string[];
      isPinned?: boolean;
    },
  ) {
    return this.notesService.create(userId, body);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Update a note' })
  update(
    @CurrentUser('id') userId: string,
    @Param('id') id: string,
    @Body() body: { content?: string; title?: string; isPinned?: boolean; tags?: string[] },
  ) {
    return this.notesService.update(userId, id, body);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.OK)
  @ApiOperation({ summary: 'Delete a note' })
  delete(@CurrentUser('id') userId: string, @Param('id') id: string) {
    return this.notesService.delete(userId, id);
  }
}
