'use client';

import { useState } from 'react';
import { AppShell } from '@/components/layout/AppShell';
import { QuizEngine } from '@/components/quiz/QuizEngine';
import { lessons } from '@/data/lessons';
import { useProgressStore } from '@/stores/progressStore';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Trophy, Target, RotateCcw } from 'lucide-react';
import { cn, scoreColor } from '@/lib/utils';

export default function QuizzesPage() {
  const [activeLesson, setActiveLesson] = useState<number | null>(null);
  const { getLessonProgress } = useProgressStore();

  const activeL = activeLesson ? lessons.find((l) => l.id === activeLesson) : null;

  return (
    <AppShell title="آزمون‌ها">
      <div className="space-y-6 max-w-4xl mx-auto" dir="rtl">

        {!activeLesson ? (
          <>
            <div className="text-right">
              <h1 className="text-2xl font-bold">آزمون‌ها</h1>
              <p className="text-muted-foreground text-sm mt-1">آزمون هر درس را جداگانه بده</p>
            </div>

            <div className="grid gap-4">
              {lessons.map((lesson) => {
                const lp = getLessonProgress(lesson.id);
                const hasScore = lp.quizScore !== undefined;
                return (
                  <div
                    key={lesson.id}
                    className="bg-card border border-border rounded-2xl p-5 flex items-center gap-5 hover:shadow-md transition-shadow"
                  >
                    <span className="text-3xl">{lesson.icon}</span>
                    <div className="flex-1 text-right">
                      <p className="font-bold">{lesson.titleFa}</p>
                      <p className="text-sm text-muted-foreground">{lesson.exercises.length + lesson.grammar.reduce((s, g) => s + g.exercises.length, 0)} سوال</p>
                      {hasScore && (
                        <p className={cn('text-sm font-medium mt-1', scoreColor(lp.quizScore!))}>
                          بهترین نمره: {lp.quizScore}% — {lp.quizAttempts} تلاش
                        </p>
                      )}
                    </div>
                    <div className="flex items-center gap-3">
                      {hasScore && (
                        <Badge variant={lp.quizScore! >= 70 ? 'success' : 'warning'}>
                          {lp.quizScore}%
                        </Badge>
                      )}
                      <Button
                        size="sm"
                        variant={hasScore ? 'outline' : 'primary'}
                        onClick={() => setActiveLesson(lesson.id)}
                      >
                        {hasScore ? <><RotateCcw size={14} /> دوباره</> : <><Target size={14} /> شروع</>}
                      </Button>
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        ) : (
          <>
            <div className="flex items-center justify-between">
              <Button variant="outline" size="sm" onClick={() => setActiveLesson(null)}>
                ← بازگشت به آزمون‌ها
              </Button>
              <div className="flex items-center gap-2">
                <span className="text-xl">{activeL?.icon}</span>
                <span className="font-bold">{activeL?.titleFa}</span>
              </div>
            </div>
            {activeL && (
              <div className="bg-card border border-border rounded-2xl p-6">
                <QuizEngine
                  exercises={[
                    ...activeL.exercises,
                    ...activeL.grammar.flatMap((g) => g.exercises),
                  ]}
                  lessonId={activeL.id}
                  title={`آزمون: ${activeL.titleFa}`}
                />
              </div>
            )}
          </>
        )}
      </div>
    </AppShell>
  );
}
