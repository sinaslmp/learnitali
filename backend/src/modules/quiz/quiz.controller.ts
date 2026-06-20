import { Controller, Get, Post, Body, Param, UseGuards } from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { IsArray, IsString, IsOptional, IsInt, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';
import { QuizService } from './quiz.service';
import { JwtAuthGuard } from '@/common/guards/jwt-auth.guard';
import { CurrentUser } from '@/common/decorators/current-user.decorator';

class AnswerDto {
  @ApiProperty() @IsString() questionId: string;
  @ApiProperty() @IsString() answer: string;
  @ApiProperty({ required: false }) @IsOptional() @IsInt() timeTaken?: number;
}

class SubmitQuizDto {
  @ApiProperty({ type: [AnswerDto] })
  @IsArray()
  @ValidateNested({ each: true })
  @Type(() => AnswerDto)
  answers: AnswerDto[];

  @ApiProperty({ required: false }) @IsOptional() @IsInt() timeTaken?: number;
}

@ApiTags('Quizzes')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('quizzes')
export class QuizController {
  constructor(private readonly quizService: QuizService) {}

  @Get('lessons/:lessonId')
  @ApiOperation({ summary: 'Get all quizzes for a lesson' })
  getByLesson(@Param('lessonId') lessonId: string) {
    return this.quizService.getQuizzesByLesson(lessonId);
  }

  @Get(':quizId')
  @ApiOperation({ summary: 'Get quiz with questions' })
  getQuiz(@Param('quizId') quizId: string) {
    return this.quizService.getQuiz(quizId);
  }

  @Post(':quizId/submit')
  @ApiOperation({ summary: 'Submit quiz answers' })
  submit(
    @CurrentUser('id') userId: string,
    @Param('quizId') quizId: string,
    @Body() dto: SubmitQuizDto,
  ) {
    return this.quizService.submitQuiz(userId, quizId, dto.answers, dto.timeTaken);
  }

  @Get(':quizId/attempts')
  @ApiOperation({ summary: 'Get my attempts for a quiz' })
  getAttempts(@CurrentUser('id') userId: string, @Param('quizId') quizId: string) {
    return this.quizService.getMyAttempts(userId, quizId);
  }

  @Get(':quizId/best')
  @ApiOperation({ summary: 'Get my best score for a quiz' })
  getBest(@CurrentUser('id') userId: string, @Param('quizId') quizId: string) {
    return this.quizService.getBestScore(userId, quizId);
  }
}
