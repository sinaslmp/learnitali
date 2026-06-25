'use client';

import Link from 'next/link';
import { Lesson } from '@/types';
import { useProgressStore } from '@/stores/progressStore';
import { ProgressBar } from '@/components/ui/ProgressBar';
import { Badge } from '@/components/ui/Badge';
import { Clock, CheckCircle, Lock } from 'lucide-react';
import { cn } from '@/lib/utils';

interface LessonCardProps {
  lesson: Lesson;
  isLocked?: boolean;
}

const TOTAL_SECTIONS = 8;

export function LessonCard({ lesson, isLocked }: LessonCardProps) {
  const { getLessonProgress } = useProgressStore();
  const lp = getLessonProgress(lesson.id);
  const pct = Math.round((lp.completedSections.length / TOTAL_SECTIONS) * 100);
  const isCompleted = lp.isCompleted;

  return (
    <Link href={isLocked ? '#' : `/lessons/${lesson.id}`}>
      <div
        className={cn(
          'group relative rounded-2xl border bg-card overflow-hidden transition-all duration-200',
          isLocked
            ? 'opacity-60 cursor-not-allowed border-border'
            : 'hover:shadow-lg hover:-translate-y-1 cursor-pointer border-border hover:border-green-500/40'
        )}
      >
        {/* Gradient header */}
        <div className={cn('h-24 bg-gradient-to-br flex items-center justify-between px-5', lesson.color)}>
          <span className="text-4xl">{lesson.icon}</span>
          <div className="text-left">
            <p className="text-white/70 text-xs font-medium">درس {lesson.number}</p>
            {isCompleted && (
              <Badge variant="success" className="mt-1 bg-white/20 text-white border-white/30">
                ✓ تمام شد
              </Badge>
            )}
            {isLocked && (
              <div className="flex items-center gap-1 text-white/70 text-xs mt-1">
                <Lock size={12} />
                <span>قفل</span>
              </div>
            )}
          </div>
        </div>

        <div className="p-5">
          <h3 className="font-bold text-foreground text-base">{lesson.titleFa}</h3>
          <p className="text-sm text-muted-foreground italic mt-0.5">{lesson.title}</p>
          <p className="text-xs text-muted-foreground mt-1">{lesson.subtitleFa}</p>

          <div className="mt-4 space-y-2">
            <div className="flex items-center justify-between text-xs text-muted-foreground">
              <span>{pct}% پیشرفت</span>
              <div className="flex items-center gap-1">
                <Clock size={11} />
                <span>{lesson.estimatedMinutes} دقیقه</span>
              </div>
            </div>
            <ProgressBar value={pct} size="sm" />
          </div>

          <div className="mt-4 flex items-center justify-between">
            <div className="flex gap-1.5">
              <Badge variant="outline" size="sm">{lesson.vocabulary.length} لغت</Badge>
              <Badge variant="outline" size="sm">{lesson.grammar.length} گرامر</Badge>
            </div>
            {!isLocked && (
              <span className="text-xs text-green-500 font-medium group-hover:underline">
                {pct > 0 ? 'ادامه بده ←' : 'شروع کن ←'}
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
