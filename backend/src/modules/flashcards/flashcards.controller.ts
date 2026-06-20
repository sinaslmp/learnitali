import { Controller, Get, Post, Body, Param, Query, UseGuards } from '@nestjs/common';
import { ApiTags, ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { FlashcardRating } from '@prisma/client';
import { FlashcardsService } from './flashcards.service';
import { JwtAuthGuard } from '@/common/guards/jwt-auth.guard';
import { CurrentUser } from '@/common/decorators/current-user.decorator';

@ApiTags('Flashcards')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('flashcards')
export class FlashcardsController {
  constructor(private readonly service: FlashcardsService) {}

  @Get('due')
  @ApiOperation({ summary: 'Get due flashcards for review (SM-2)' })
  getDue(
    @CurrentUser('id') userId: string,
    @Query('deckId') deckId?: string,
    @Query('limit') limit?: number,
  ) {
    return this.service.getDueCards(userId, deckId, limit);
  }

  @Get('new')
  @ApiOperation({ summary: 'Get new flashcards' })
  getNew(
    @CurrentUser('id') userId: string,
    @Query('deckId') deckId?: string,
    @Query('limit') limit?: number,
  ) {
    return this.service.getNewCards(userId, deckId, limit);
  }

  @Post(':flashcardId/review')
  @ApiOperation({ summary: 'Submit a flashcard review with SM-2 rating' })
  review(
    @CurrentUser('id') userId: string,
    @Param('flashcardId') flashcardId: string,
    @Body() body: { rating: FlashcardRating; timeSpent?: number },
  ) {
    return this.service.reviewCard(userId, flashcardId, body.rating, body.timeSpent);
  }

  @Get('stats')
  @ApiOperation({ summary: 'Get flashcard study stats' })
  stats(@CurrentUser('id') userId: string) {
    return this.service.getStudyStats(userId);
  }

  @Get('decks')
  @ApiOperation({ summary: 'Get my flashcard decks' })
  getDecks(@CurrentUser('id') userId: string) {
    return this.service.getDecks(userId);
  }

  @Post('decks')
  @ApiOperation({ summary: 'Create a new flashcard deck' })
  createDeck(
    @CurrentUser('id') userId: string,
    @Body() body: { name: string; description?: string; lessonId?: string },
  ) {
    return this.service.createDeck(userId, body.name, body.description, body.lessonId);
  }

  @Get('lessons/:lessonId')
  @ApiOperation({ summary: 'Get flashcards for a lesson' })
  getByLesson(@Param('lessonId') lessonId: string) {
    return this.service.getFlashcardsByLesson(lessonId);
  }
}
