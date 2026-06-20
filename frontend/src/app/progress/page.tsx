'use client';

import { AppShell } from '@/components/layout/AppShell';
import { useProgressStore } from '@/stores/progressStore';
import { lessons } from '@/data/lessons';
import { ProgressBar } from '@/components/ui/ProgressBar';
import { Badge } from '@/components/ui/Badge';
import { getLevelLabel, formatTime, scoreColor } from '@/lib/utils';
import { Flame, Star, BookOpen, Brain, Trophy, Clock, Target } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function ProgressPage() {
  const { progress, getLessonProgress } = useProgressStore();
  const level = getLevelLabel(progress.totalXP);
  const xpToNext = level.next - progress.totalXP;
  const levelPct = Math.round(((progress.totalXP % level.next) / level.next) * 100);

  const totalVocab = Object.values(progress.lessons).reduce((s, lp) => s + lp.vocabLearned.length, 0);
  const totalGrammar = Object.values(progress.lessons).reduce((s, lp) => s + lp.grammarCompleted.length, 0);
  const totalStudy = Object.values(progress.lessons).reduce((s, lp) => s + lp.studyTimeMinutes, 0);
  const completedLessons = Object.values(progress.lessons).filter((lp) => lp.isCompleted).length;
  const allVocab = lessons.flatMap((l) => l.vocabulary).length;
  const allGrammar = lessons.flatMap((l) => l.grammar).length;

  return (
    <AppShell title="پیشرفت">
      <div className="space-y-6 max-w-4xl mx-auto" dir="rtl">

        <h1 className="text-2xl font-bold text-right">پیشرفت من</h1>

        {/* Level card */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-violet-500 to-purple-600 p-6 text-white shadow-xl">
          <div className="relative z-10">
            <div className="flex items-center justify-between">
              <div className="text-left">
                <p className="text-violet-200 text-sm">امتیاز کل</p>
                <p className="text-4xl font-bold">{progress.totalXP}</p>
                <p className="text-violet-200 text-sm">XP</p>
              </div>
              <div className="text-right">
                <p className="text-violet-200 text-sm">سطح فعلی</p>
                <p className="text-2xl font-bold">{level.labelFa}</p>
                <p className="text-violet-200 text-sm italic">{level.label}</p>
              </div>
            </div>
            <div className="mt-5 space-y-1">
              <div className="flex justify-between text-sm text-violet-200">
                <span>{xpToNext} XP تا سطح بعدی</span>
                <span>{levelPct}%</span>
              </div>
              <ProgressBar value={levelPct} barClassName="bg-white/80" />
            </div>
          </div>
          <div className="absolute -right-8 -top-8 w-40 h-40 rounded-full bg-white/10" />
        </div>

        {/* Key stats */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
          {[
            { icon: Flame, label: 'روز متوالی', value: `${progress.streak}`, sub: 'Striscia', color: 'text-orange-500' },
            { icon: Trophy, label: 'درس تموم‌شده', value: `${completedLessons}/10`, sub: 'Lezioni', color: 'text-yellow-500' },
            { icon: BookOpen, label: 'لغت یاد گرفته', value: `${totalVocab}/${allVocab}`, sub: 'Vocaboli', color: 'text-blue-500' },
            { icon: Brain, label: 'گرامر یاد گرفته', value: `${totalGrammar}/${allGrammar}`, sub: 'Grammatica', color: 'text-green-500' },
            { icon: Clock, label: 'زمان مطالعه', value: formatTime(totalStudy), sub: 'Tempo totale', color: 'text-cyan-500' },
            { icon: Star, label: 'موردعلاقه', value: `${progress.favoriteVocab.length}`, sub: 'Preferiti', color: 'text-pink-500' },
          ].map(({ icon: Icon, label, value, sub, color }) => (
            <div key={label} className="bg-card border border-border rounded-2xl p-5 text-right">
              <Icon size={22} className={cn(color, 'mb-2')} />
              <p className="text-2xl font-bold">{value}</p>
              <p className="text-sm text-muted-foreground">{label}</p>
              <p className="text-xs text-muted-foreground/60 italic">{sub}</p>
            </div>
          ))}
        </div>

        {/* Per-lesson breakdown */}
        <div className="bg-card border border-border rounded-2xl p-6">
          <h2 className="text-lg font-bold text-right mb-5">پیشرفت هر درس</h2>
          <div className="space-y-4">
            {lessons.map((lesson) => {
              const lp = getLessonProgress(lesson.id);
              const secPct = Math.round((lp.completedSections.length / 8) * 100);
              return (
                <div key={lesson.id} className="space-y-2">
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-muted-foreground min-w-[3rem] text-left">
                      {lp.quizScore !== undefined && (
                        <span className={cn('font-bold text-xs', scoreColor(lp.quizScore))}>
                          {lp.quizScore}%
                        </span>
                      )}
                    </span>
                    <div className="flex-1 space-y-1">
                      <div className="flex items-center justify-between text-xs">
                        <div className="flex items-center gap-2">
                          <span className="text-muted-foreground">{secPct}%</span>
                          {lp.isCompleted && <Badge variant="success" size="sm">✓</Badge>}
                        </div>
                        <div className="flex items-center gap-2">
                          <span>{lesson.icon}</span>
                          <span className="font-medium">{lesson.titleFa}</span>
                        </div>
                      </div>
                      <ProgressBar value={secPct} size="sm" />
                    </div>
                  </div>
                  <div className="flex justify-end gap-3 text-xs text-muted-foreground">
                    <span>{lp.vocabLearned.length}/{lesson.vocabulary.length} لغت</span>
                    <span>{lp.grammarCompleted.length}/{lesson.grammar.length} گرامر</span>
                    {lp.studyTimeMinutes > 0 && <span>{formatTime(lp.studyTimeMinutes)}</span>}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </AppShell>
  );
}
