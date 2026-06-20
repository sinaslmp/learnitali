import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '@/prisma/prisma.service';
import { LessonSectionType } from '@prisma/client';

const XP_TABLE = {
  SECTION_COMPLETE: 10,
  VOCAB_LEARNED: 5,
  GRAMMAR_COMPLETE: 15,
  QUIZ_PASS: 25,
  LESSON_COMPLETE: 50,
  DAILY_GOAL: 20,
};

@Injectable()
export class ProgressService {
  constructor(private readonly prisma: PrismaService) {}

  // ─── Lesson Progress ───────────────────────────────────────────
  async getLessonProgress(userId: string, lessonId: string) {
    return this.prisma.lessonProgress.findUnique({
      where: { userId_lessonId: { userId, lessonId } },
    });
  }

  async markSectionComplete(userId: string, lessonId: string, section: LessonSectionType) {
    const existing = await this.prisma.lessonProgress.findUnique({
      where: { userId_lessonId: { userId, lessonId } },
    });

    const completedSections = existing?.completedSections ?? [];
    if (completedSections.includes(section)) {
      return existing;
    }

    const newSections = [...completedSections, section];
    const totalSections = Object.values(LessonSectionType).length;
    const isCompleted = newSections.length >= totalSections - 1; // exclude NOTES

    const [progress] = await this.prisma.$transaction([
      this.prisma.lessonProgress.upsert({
        where: { userId_lessonId: { userId, lessonId } },
        create: {
          userId, lessonId,
          completedSections: newSections,
          lastStudiedAt: new Date(),
          isCompleted,
          completedAt: isCompleted ? new Date() : undefined,
          xpEarned: (existing?.xpEarned ?? 0) + XP_TABLE.SECTION_COMPLETE,
        },
        update: {
          completedSections: newSections,
          lastStudiedAt: new Date(),
          isCompleted,
          completedAt: isCompleted ? new Date() : undefined,
          xpEarned: { increment: XP_TABLE.SECTION_COMPLETE },
        },
      }),
    ]);

    // Update streak
    await this.updateStreak(userId, XP_TABLE.SECTION_COMPLETE);

    if (isCompleted) {
      await this.checkAchievements(userId);
    }

    return progress;
  }

  // ─── Vocabulary Progress ───────────────────────────────────────
  async markVocabLearned(userId: string, vocabularyItemId: string) {
    const vp = await this.prisma.vocabularyProgress.upsert({
      where: { userId_vocabularyItemId: { userId, vocabularyItemId } },
      create: { userId, vocabularyItemId, isLearned: true, learnedAt: new Date(), reviewCount: 1 },
      update: { isLearned: true, learnedAt: new Date(), reviewCount: { increment: 1 } },
    });
    await this.updateStreak(userId, XP_TABLE.VOCAB_LEARNED);
    return vp;
  }

  async toggleVocabFavorite(userId: string, vocabularyItemId: string) {
    const vp = await this.prisma.vocabularyProgress.findUnique({
      where: { userId_vocabularyItemId: { userId, vocabularyItemId } },
    });
    return this.prisma.vocabularyProgress.upsert({
      where: { userId_vocabularyItemId: { userId, vocabularyItemId } },
      create: { userId, vocabularyItemId, isFavorited: true },
      update: { isFavorited: !vp?.isFavorited },
    });
  }

  async getVocabProgress(userId: string, lessonId?: string) {
    return this.prisma.vocabularyProgress.findMany({
      where: {
        userId,
        ...(lessonId && { vocabularyItem: { lessonId } }),
      },
      include: { vocabularyItem: true },
    });
  }

  // ─── Grammar Progress ──────────────────────────────────────────
  async markGrammarComplete(userId: string, grammarTopicId: string) {
    const gp = await this.prisma.grammarProgress.upsert({
      where: { userId_grammarTopicId: { userId, grammarTopicId } },
      create: { userId, grammarTopicId, isCompleted: true, completedAt: new Date() },
      update: { isCompleted: true, completedAt: new Date() },
    });
    await this.updateStreak(userId, XP_TABLE.GRAMMAR_COMPLETE);
    return gp;
  }

  // ─── Overall Progress ──────────────────────────────────────────
  async getCourseProgress(userId: string, courseId: string) {
    const [enrollment, lessonProgressList, vocabProgress, grammarProgress] = await Promise.all([
      this.prisma.enrollment.findUnique({ where: { userId_courseId: { userId, courseId } } }),
      this.prisma.lessonProgress.findMany({
        where: { userId, lesson: { courseId } },
        include: { lesson: { select: { id: true, number: true, title: true, titleFa: true } } },
      }),
      this.prisma.vocabularyProgress.count({ where: { userId, isLearned: true, vocabularyItem: { lesson: { courseId } } } }),
      this.prisma.grammarProgress.count({ where: { userId, isCompleted: true, grammarTopic: { lesson: { courseId } } } }),
    ]);

    const completedLessons = lessonProgressList.filter((l) => l.isCompleted).length;
    const totalLessons = await this.prisma.lesson.count({ where: { courseId, isPublished: true } });
    const totalVocab = await this.prisma.vocabularyItem.count({ where: { lesson: { courseId } } });
    const totalGrammar = await this.prisma.grammarTopic.count({ where: { lesson: { courseId } } });

    const totalStudyMinutes = lessonProgressList.reduce((s, l) => s + l.studyTimeMinutes, 0);

    return {
      enrollment,
      completedLessons,
      totalLessons,
      completionPercent: totalLessons > 0 ? Math.round((completedLessons / totalLessons) * 100) : 0,
      vocabProgress: { learned: vocabProgress, total: totalVocab },
      grammarProgress: { completed: grammarProgress, total: totalGrammar },
      totalStudyMinutes,
      lessonProgress: lessonProgressList,
    };
  }

  async getDashboardStats(userId: string) {
    const [
      totalXP, streak, completedLessons, vocabLearned,
      grammarCompleted, avgQuizScore, totalStudyMin,
    ] = await Promise.all([
      this.prisma.lessonProgress.aggregate({ where: { userId }, _sum: { xpEarned: true } }),
      this.getCurrentStreak(userId),
      this.prisma.lessonProgress.count({ where: { userId, isCompleted: true } }),
      this.prisma.vocabularyProgress.count({ where: { userId, isLearned: true } }),
      this.prisma.grammarProgress.count({ where: { userId, isCompleted: true } }),
      this.prisma.quizAttempt.aggregate({ where: { userId }, _avg: { score: true } }),
      this.prisma.lessonProgress.aggregate({ where: { userId }, _sum: { studyTimeMinutes: true } }),
    ]);

    return {
      totalXP: totalXP._sum.xpEarned ?? 0,
      streak,
      completedLessons,
      vocabLearned,
      grammarCompleted,
      avgQuizScore: Math.round(avgQuizScore._avg.score ?? 0),
      totalStudyMinutes: totalStudyMin._sum.studyTimeMinutes ?? 0,
    };
  }

  // ─── Study Time ────────────────────────────────────────────────
  async addStudyTime(userId: string, lessonId: string, minutes: number) {
    return this.prisma.lessonProgress.upsert({
      where: { userId_lessonId: { userId, lessonId } },
      create: { userId, lessonId, studyTimeMinutes: minutes, lastStudiedAt: new Date() },
      update: { studyTimeMinutes: { increment: minutes }, lastStudiedAt: new Date() },
    });
  }

  // ─── Study Streak ──────────────────────────────────────────────
  private async updateStreak(userId: string, xp: number) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const settings = await this.prisma.userSettings.findUnique({ where: { userId } });
    const dailyGoal = settings?.dailyGoalMinutes ?? 20;

    await this.prisma.studyStreak.upsert({
      where: { userId_date: { userId, date: today } },
      create: { userId, date: today, xpEarned: xp },
      update: { xpEarned: { increment: xp } },
    });
  }

  private async getCurrentStreak(userId: string): Promise<number> {
    const streaks = await this.prisma.studyStreak.findMany({
      where: { userId },
      orderBy: { date: 'desc' },
      take: 365,
    });

    if (streaks.length === 0) return 0;

    let streak = 0;
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    for (let i = 0; i < streaks.length; i++) {
      const expected = new Date(today);
      expected.setDate(expected.getDate() - i);
      const streakDate = new Date(streaks[i].date);
      streakDate.setHours(0, 0, 0, 0);

      if (streakDate.getTime() === expected.getTime()) {
        streak++;
      } else {
        break;
      }
    }

    return streak;
  }

  // ─── Achievements ──────────────────────────────────────────────
  private async checkAchievements(userId: string) {
    const achievements = await this.prisma.achievement.findMany({ where: { isActive: true } });
    const stats = await this.getDashboardStats(userId);

    for (const ach of achievements) {
      const condition = ach.condition as Record<string, number>;
      let progress = 0;

      if (ach.type === 'STREAK') progress = (stats.streak / condition['threshold']) * 100;
      if (ach.type === 'VOCABULARY') progress = (stats.vocabLearned / condition['threshold']) * 100;
      if (ach.type === 'LESSONS_COMPLETED') progress = (stats.completedLessons / condition['threshold']) * 100;

      if (progress >= 100) {
        await this.prisma.userAchievement.upsert({
          where: { userId_achievementId: { userId, achievementId: ach.id } },
          create: { userId, achievementId: ach.id, progress: 100 },
          update: { progress: 100 },
        });
      } else {
        await this.prisma.userAchievement.upsert({
          where: { userId_achievementId: { userId, achievementId: ach.id } },
          create: { userId, achievementId: ach.id, progress },
          update: { progress },
        }).catch(() => {/* ignore */});
      }
    }
  }
}
