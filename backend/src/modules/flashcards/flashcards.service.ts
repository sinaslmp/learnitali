import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '@/prisma/prisma.service';
import { FlashcardRating, FlashcardState } from '@prisma/client';
import { addDays } from 'date-fns';

// SM-2 Algorithm Implementation
interface SM2Result {
  easeFactor: number;
  interval: number;
  repetitions: number;
  nextDue: Date;
  state: FlashcardState;
}

function sm2(
  rating: FlashcardRating,
  repetitions: number,
  interval: number,
  easeFactor: number,
): SM2Result {
  const ratingValue = { AGAIN: 0, HARD: 1, GOOD: 2, EASY: 3 }[rating];

  let newRepetitions = repetitions;
  let newInterval = interval;
  let newEF = easeFactor;
  let newState: FlashcardState;

  if (ratingValue < 2) {
    // Failed — reset
    newRepetitions = 0;
    newInterval = 1;
    newState = 'RELEARNING';
  } else {
    // Passed
    newRepetitions += 1;
    newEF = Math.max(1.3, easeFactor + 0.1 - (3 - ratingValue) * (0.08 + (3 - ratingValue) * 0.02));

    if (newRepetitions === 1) {
      newInterval = 1;
    } else if (newRepetitions === 2) {
      newInterval = 6;
    } else {
      newInterval = Math.round(interval * newEF);
    }

    if (rating === 'EASY') {
      newInterval = Math.round(newInterval * 1.3);
    }

    newState = newRepetitions >= 3 ? 'GRADUATED' : 'REVIEW';
  }

  return {
    easeFactor: Math.round(newEF * 100) / 100,
    interval: newInterval,
    repetitions: newRepetitions,
    nextDue: addDays(new Date(), newInterval),
    state: newState,
  };
}

@Injectable()
export class FlashcardsService {
  constructor(private readonly prisma: PrismaService) {}

  async getDueCards(userId: string, deckId?: string, limit = 20) {
    const where = {
      userId,
      dueDate: { lte: new Date() },
      ...(deckId && { deckId }),
    };

    return this.prisma.flashcardReview.findMany({
      where,
      take: limit,
      orderBy: { dueDate: 'asc' },
      include: { flashcard: true },
    });
  }

  async getNewCards(userId: string, deckId?: string, limit = 10) {
    // Cards that have never been reviewed
    const reviewed = await this.prisma.flashcardReview.findMany({
      where: { userId },
      select: { flashcardId: true },
    });
    const reviewedIds = reviewed.map((r) => r.flashcardId);

    return this.prisma.flashcard.findMany({
      where: {
        id: { notIn: reviewedIds },
        ...(deckId && { deckId }),
      },
      take: limit,
      orderBy: { sortOrder: 'asc' },
    });
  }

  async reviewCard(userId: string, flashcardId: string, rating: FlashcardRating, timeSpent?: number) {
    const existing = await this.prisma.flashcardReview.findUnique({
      where: { userId_flashcardId: { userId, flashcardId } },
    });

    const prev = {
      repetitions: existing?.repetitions ?? 0,
      interval: existing?.interval ?? 0,
      easeFactor: existing?.easeFactor ?? 2.5,
    };

    const result = sm2(rating, prev.repetitions, prev.interval, prev.easeFactor);

    return this.prisma.flashcardReview.upsert({
      where: { userId_flashcardId: { userId, flashcardId } },
      create: {
        userId,
        flashcardId,
        rating,
        state: result.state,
        easeFactor: result.easeFactor,
        interval: result.interval,
        repetitions: result.repetitions,
        dueDate: result.nextDue,
        lastReviewedAt: new Date(),
        timeSpent,
      },
      update: {
        rating,
        state: result.state,
        easeFactor: result.easeFactor,
        interval: result.interval,
        repetitions: result.repetitions,
        dueDate: result.nextDue,
        lastReviewedAt: new Date(),
        reviewedAt: new Date(),
        timeSpent,
      },
    });
  }

  async getStudyStats(userId: string) {
    const [total, learned, due, learning] = await Promise.all([
      this.prisma.flashcardReview.count({ where: { userId } }),
      this.prisma.flashcardReview.count({ where: { userId, state: 'GRADUATED' } }),
      this.prisma.flashcardReview.count({ where: { userId, dueDate: { lte: new Date() } } }),
      this.prisma.flashcardReview.count({ where: { userId, state: { in: ['LEARNING', 'RELEARNING'] } } }),
    ]);
    return { total, learned, due, learning, new: 0 };
  }

  async getDecks(userId: string) {
    return this.prisma.flashcardDeck.findMany({
      where: { userId },
      include: {
        _count: { select: { flashcards: true, reviews: true } },
      },
    });
  }

  async createDeck(userId: string, name: string, description?: string, lessonId?: string) {
    return this.prisma.flashcardDeck.create({
      data: { userId, name, description, lessonId },
    });
  }

  async getFlashcardsByLesson(lessonId: string) {
    return this.prisma.flashcard.findMany({
      where: { lessonId },
      include: { audioFile: true },
      orderBy: { sortOrder: 'asc' },
    });
  }
}
