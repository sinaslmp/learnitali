import { Controller, Get, Post, Body, Param, Query, UseGuards } from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { LessonSectionType } from '@prisma/client';
import { ProgressService } from './progress.service';
import { JwtAuthGuard } from '@/common/guards/jwt-auth.guard';
import { CurrentUser } from '@/common/decorators/current-user.decorator';

@ApiTags('Progress')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('progress')
export class ProgressController {
  constructor(private readonly progressService: ProgressService) {}

  @Get('dashboard')
  @ApiOperation({ summary: 'Get dashboard stats' })
  getDashboard(@CurrentUser('id') userId: string) {
    return this.progressService.getDashboardStats(userId);
  }

  @Get('courses/:courseId')
  @ApiOperation({ summary: 'Get progress for a course' })
  getCourseProgress(@CurrentUser('id') userId: string, @Param('courseId') courseId: string) {
    return this.progressService.getCourseProgress(userId, courseId);
  }

  @Get('lessons/:lessonId')
  @ApiOperation({ summary: 'Get progress for a lesson' })
  getLessonProgress(@CurrentUser('id') userId: string, @Param('lessonId') lessonId: string) {
    return this.progressService.getLessonProgress(userId, lessonId);
  }

  @Post('lessons/:lessonId/sections/:section')
  @ApiOperation({ summary: 'Mark a lesson section as complete' })
  markSection(
    @CurrentUser('id') userId: string,
    @Param('lessonId') lessonId: string,
    @Param('section') section: LessonSectionType,
  ) {
    return this.progressService.markSectionComplete(userId, lessonId, section);
  }

  @Post('lessons/:lessonId/time')
  @ApiOperation({ summary: 'Add study time to a lesson' })
  addStudyTime(
    @CurrentUser('id') userId: string,
    @Param('lessonId') lessonId: string,
    @Body('minutes') minutes: number,
  ) {
    return this.progressService.addStudyTime(userId, lessonId, minutes);
  }

  @Post('vocabulary/:itemId/learned')
  @ApiOperation({ summary: 'Mark vocabulary item as learned' })
  markVocabLearned(@CurrentUser('id') userId: string, @Param('itemId') itemId: string) {
    return this.progressService.markVocabLearned(userId, itemId);
  }

  @Post('vocabulary/:itemId/favorite')
  @ApiOperation({ summary: 'Toggle vocabulary favorite' })
  toggleFavorite(@CurrentUser('id') userId: string, @Param('itemId') itemId: string) {
    return this.progressService.toggleVocabFavorite(userId, itemId);
  }

  @Get('vocabulary')
  @ApiOperation({ summary: 'Get vocabulary progress' })
  getVocabProgress(
    @CurrentUser('id') userId: string,
    @Query('lessonId') lessonId?: string,
  ) {
    return this.progressService.getVocabProgress(userId, lessonId);
  }

  @Post('grammar/:topicId/complete')
  @ApiOperation({ summary: 'Mark grammar topic as complete' })
  markGrammarComplete(@CurrentUser('id') userId: string, @Param('topicId') topicId: string) {
    return this.progressService.markGrammarComplete(userId, topicId);
  }
}
