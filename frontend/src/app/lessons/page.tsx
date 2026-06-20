'use client';

import { AppShell } from '@/components/layout/AppShell';
import { LessonCard } from '@/components/lessons/LessonCard';
import { lessons } from '@/data/lessons';
import { useProgressStore } from '@/stores/progressStore';
import { ProgressBar } from '@/components/ui/ProgressBar';

export default function LessonsPage() {
  const { getCompletedLessons, getOverallProgress } = useProgressStore();
  const completed = getCompletedLessons();
  const overall = getOverallProgress();

  return (
    <AppShell title="درس‌ها">
      <div className="space-y-6 max-w-6xl mx-auto" dir="rtl">

        {/* Header */}
        <div className="text-right">
          <h1 className="text-2xl font-bold">درس‌های Nuovo Espresso 1</h1>
          <p className="text-muted-foreground mt-1">۱۰ درس — از مبتدی تا پیش‌میانی</p>
          <div className="mt-4 max-w-md">
            <div className="flex items-center justify-between text-sm mb-1">
              <span className="text-muted-foreground">{completed.length} از ۱۰ تموم شده</span>
              <span className="font-medium text-green-500">{overall}%</span>
            </div>
            <ProgressBar value={overall} />
          </div>
        </div>

        {/* Lesson grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {lessons.map((lesson) => (
            <LessonCard key={lesson.id} lesson={lesson} />
          ))}

          {/* Future lesson placeholder */}
          {[11, 12].map((n) => (
            <div
              key={n}
              className="rounded-2xl border-2 border-dashed border-border bg-muted/30 flex flex-col items-center justify-center p-8 text-center min-h-[220px]"
            >
              <p className="text-3xl opacity-30">🔒</p>
              <p className="text-muted-foreground text-sm mt-2 font-medium">درس {n}</p>
              <p className="text-xs text-muted-foreground mt-1">به زودی...</p>
            </div>
          ))}
        </div>

      </div>
    </AppShell>
  );
}
