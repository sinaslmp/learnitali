'use client';

import { AppShell } from '@/components/layout/AppShell';
import { StatCard } from '@/components/dashboard/StatCard';
import { LessonCard } from '@/components/lessons/LessonCard';
import { ProgressBar } from '@/components/ui/ProgressBar';
import { Button } from '@/components/ui/Button';
import { useProgressStore } from '@/stores/progressStore';
import { lessons } from '@/data/lessons';
import { formatTime, getLevelLabel } from '@/lib/utils';
import {
  BookOpen, Flame, Star, Trophy, Clock, Brain,
  TrendingUp, CheckCircle, ArrowLeft
} from 'lucide-react';
import Link from 'next/link';

export default function DashboardPage() {
  const { progress, getLessonProgress, getTotalVocabLearned, getCompletedLessons, getOverallProgress } = useProgressStore();

  const completedLessons = getCompletedLessons();
  const totalVocab = getTotalVocabLearned();
  const overall = getOverallProgress();
  const totalStudyTime = Object.values(progress.lessons).reduce((s, lp) => s + lp.studyTimeMinutes, 0);
  const level = getLevelLabel(progress.totalXP);

  // Find the next lesson to study
  const nextLesson = lessons.find((l) => !completedLessons.includes(l.id)) ?? lessons[0];
  const recentLessons = lessons.filter((l) => progress.lessons[l.id]?.lastStudied).slice(0, 3);
  const continueLesson = recentLessons[0] ?? nextLesson;

  return (
    <AppShell title="داشبورد">
      <div className="space-y-8 max-w-6xl mx-auto" dir="rtl">

        {/* Welcome banner */}
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-green-500 to-emerald-600 p-6 lg:p-8 text-white shadow-xl shadow-green-500/20">
          <div className="relative z-10">
            <p className="text-green-100 text-sm font-medium">سلام، دانشجو! 👋</p>
            <h1 className="text-2xl lg:text-3xl font-bold mt-1">به Learnitali خوش اومدی</h1>
            <p className="text-green-100 mt-1 text-sm lg:text-base">
              {overall > 0
                ? `${overall}% پیشرفت کلی داری — ادامه بده!`
                : 'اولین درس را شروع کن و ایتالیایی را یاد بگیر!'}
            </p>
            <div className="mt-4">
              <ProgressBar
                value={overall}
                size="lg"
                barClassName="bg-white/90"
                className="max-w-md"
              />
              <p className="text-green-100 text-xs mt-1">{overall}% — سطح: {level.labelFa} ({level.label})</p>
            </div>
            <Link href={`/lessons/${continueLesson.id}`}>
              <Button className="mt-5 bg-white text-green-600 hover:bg-green-50" size="lg">
                {overall > 0 ? 'ادامه یادگیری' : 'شروع یادگیری'}
                <ArrowLeft size={18} />
              </Button>
            </Link>
          </div>
          {/* Decorative */}
          <div className="absolute -left-8 -top-8 w-40 h-40 rounded-full bg-white/10" />
          <div className="absolute -left-4 bottom-0 w-24 h-24 rounded-full bg-white/5" />
          <div className="absolute right-6 top-4 text-6xl opacity-20">🇮🇹</div>
        </div>

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard
            label="روز متوالی"
            value={progress.streak}
            sublabel="Striscia di giorni"
            icon={Flame}
            iconColor="text-orange-500"
          />
          <StatCard
            label="امتیاز کل"
            value={progress.totalXP}
            sublabel={`سطح: ${level.labelFa}`}
            icon={Star}
            iconColor="text-amber-500"
          />
          <StatCard
            label="لغت یاد گرفته"
            value={totalVocab}
            sublabel="از ۱۰ درس"
            icon={BookOpen}
            iconColor="text-blue-500"
          />
          <StatCard
            label="درس تموم شده"
            value={`${completedLessons.length}/10`}
            sublabel="Lezioni completate"
            icon={Trophy}
            iconColor="text-purple-500"
          />
        </div>

        {/* Secondary stats */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="bg-card border border-border rounded-2xl p-5 text-right">
            <div className="flex items-center justify-between mb-3">
              <Clock size={20} className="text-muted-foreground" />
              <p className="text-sm font-medium text-muted-foreground">زمان مطالعه</p>
            </div>
            <p className="text-2xl font-bold">{formatTime(totalStudyTime)}</p>
            <p className="text-xs text-muted-foreground mt-1">Tempo di studio totale</p>
          </div>
          <div className="bg-card border border-border rounded-2xl p-5 text-right">
            <div className="flex items-center justify-between mb-3">
              <Brain size={20} className="text-muted-foreground" />
              <p className="text-sm font-medium text-muted-foreground">گرامر یاد گرفته</p>
            </div>
            <p className="text-2xl font-bold">
              {Object.values(progress.lessons).reduce((s, lp) => s + lp.grammarCompleted.length, 0)}
            </p>
            <p className="text-xs text-muted-foreground mt-1">موضوع گرامری</p>
          </div>
          <div className="bg-card border border-border rounded-2xl p-5 text-right">
            <div className="flex items-center justify-between mb-3">
              <TrendingUp size={20} className="text-muted-foreground" />
              <p className="text-sm font-medium text-muted-foreground">میانگین نمره آزمون</p>
            </div>
            <p className="text-2xl font-bold">
              {(() => {
                const scores = Object.values(progress.lessons)
                  .filter((lp) => lp.quizScore !== undefined)
                  .map((lp) => lp.quizScore!);
                return scores.length > 0
                  ? Math.round(scores.reduce((a, b) => a + b, 0) / scores.length) + '%'
                  : '—';
              })()}
            </p>
            <p className="text-xs text-muted-foreground mt-1">Media voti quiz</p>
          </div>
        </div>

        {/* Lessons progress */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <Link href="/lessons" className="text-sm text-green-500 hover:underline font-medium flex items-center gap-1">
              همه درس‌ها
              <ArrowLeft size={14} />
            </Link>
            <h2 className="text-lg font-bold">درس‌های من</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {lessons.slice(0, 6).map((lesson) => (
              <LessonCard key={lesson.id} lesson={lesson} />
            ))}
          </div>
        </div>

        {/* Lesson checklist */}
        <div className="bg-card border border-border rounded-2xl p-6">
          <h2 className="text-lg font-bold text-right mb-4">پیشرفت همه درس‌ها</h2>
          <div className="space-y-3">
            {lessons.map((lesson) => {
              const lp = getLessonProgress(lesson.id);
              const pct = Math.round((lp.completedSections.length / 8) * 100);
              return (
                <Link key={lesson.id} href={`/lessons/${lesson.id}`} className="block group">
                  <div className="flex items-center gap-4 p-3 rounded-xl hover:bg-accent transition-colors">
                    <span className="text-xl">{lesson.icon}</span>
                    <div className="flex-1 space-y-1">
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-muted-foreground">{pct}%</span>
                        <span className="text-sm font-medium text-right">{lesson.titleFa}</span>
                      </div>
                      <ProgressBar value={pct} size="sm" />
                    </div>
                    {lp.isCompleted
                      ? <CheckCircle size={18} className="text-green-500 shrink-0" />
                      : <ArrowLeft size={16} className="text-muted-foreground group-hover:text-green-500 transition-colors shrink-0" />
                    }
                  </div>
                </Link>
              );
            })}
          </div>
        </div>

      </div>
    </AppShell>
  );
}
