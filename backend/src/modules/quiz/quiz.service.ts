import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { PrismaService } from '@/prisma/prisma.service';
import { ProgressService } from '@/modules/progress/progress.service';

interface AnswerDto {
  questionId: string;
  answer: string;
  timeTaken?: number;
}

@Injectable()
export class QuizService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly progress: ProgressService,
  ) {}

  async getQuizzesByLesson(lessonId: string) {
    return this.prisma.quiz.findMany({
      where: { lessonId },
      include: {
        questions: { orderBy: { sortOrder: 'asc' } },
        _count: { select: { questions: true, attempts: true } },
      },
      orderBy: { sortOrder: 'asc' },
    });
  }

  async getQuiz(quizId: string) {
    const quiz = await this.prisma.quiz.findUnique({
      where: { id: quizId },
      include: { questions: { orderBy: { sortOrder: 'asc' } } },
    });
    if (!quiz) throw new NotFoundException('Quiz not found');
    return quiz;
  }

  async submitQuiz(userId: string, quizId: string, answers: AnswerDto[], timeTaken?: number) {
    const quiz = await this.getQuiz(quizId);

    if (quiz.maxAttempts) {
      const attemptCount = await this.prisma.quizAttempt.count({ where: { userId, quizId } });
      if (attemptCount >= quiz.maxAttempts) {
        throw new BadRequestException(`Maximum ${quiz.maxAttempts} attempts allowed`);
      }
    }

    // Score calculation
    let earnedPoints = 0;
    const totalPoints = quiz.questions.reduce((s, q) => s + q.points, 0);
    const gradedAnswers: { questionId: string; isCorrect: boolean; pointsEarned: number; userAnswer: string; timeTaken?: number }[] = [];

    for (const answer of answers) {
      const question = quiz.questions.find((q) => q.id === answer.questionId);
      if (!question) continue;

      const isCorrect = this.gradeAnswer(answer.answer, question.correctAnswer, question.type as string);
      const pointsEarned = isCorrect ? question.points : 0;
      earnedPoints += pointsEarned;

      gradedAnswers.push({
        questionId: question.id,
        userAnswer: answer.answer,
        isCorrect,
        pointsEarned,
        timeTaken: answer.timeTaken,
      });
    }

    const score = totalPoints > 0 ? (earnedPoints / totalPoints) * 100 : 0;
    const passed = score >= quiz.passingScore;

    const attempt = await this.prisma.quizAttempt.create({
      data: {
        userId,
        quizId,
        score: Math.round(score * 100) / 100,
        totalPoints,
        earnedPoints,
        timeTaken,
        passed,
        completedAt: new Date(),
        answers: {
          create: gradedAnswers.map((a) => ({
            quizQuestionId: a.questionId,
            userAnswer: a.userAnswer,
            isCorrect: a.isCorrect,
            pointsEarned: a.pointsEarned,
            timeTaken: a.timeTaken,
          })),
        },
      },
      include: { answers: true },
    });

    // Record XP if passed
    if (passed) {
      await this.progress.markSectionComplete(userId, quiz.lessonId, 'QUIZ' as never);
    }

    return {
      attempt,
      score: Math.round(score),
      passed,
      earnedPoints,
      totalPoints,
      correctCount: gradedAnswers.filter((a) => a.isCorrect).length,
      totalCount: gradedAnswers.length,
      ...(quiz.showAnswers && { gradedAnswers }),
    };
  }

  async getMyAttempts(userId: string, quizId: string) {
    return this.prisma.quizAttempt.findMany({
      where: { userId, quizId },
      include: { answers: true },
      orderBy: { startedAt: 'desc' },
    });
  }

  async getBestScore(userId: string, quizId: string) {
    const best = await this.prisma.quizAttempt.findFirst({
      where: { userId, quizId },
      orderBy: { score: 'desc' },
    });
    return best;
  }

  private gradeAnswer(userAnswer: string, correctAnswer: string, type: string): boolean {
    const norm = (s: string) => s.trim().toLowerCase();

    if (type === 'FILL_BLANK' || type === 'WRITTEN_ANSWER') {
      // Allow some flexibility for written answers
      return norm(userAnswer) === norm(correctAnswer);
    }

    return norm(userAnswer) === norm(correctAnswer);
  }
}
