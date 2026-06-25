'use client';

import { useState } from 'react';
import { AppShell } from '@/components/layout/AppShell';
import { LessonCard } from '@/components/lessons/LessonCard';
import { getLessonsByBook } from '@/data/lessons';
import { books } from '@/data/books';
import { useProgressStore } from '@/stores/progressStore';
import { ProgressBar } from '@/components/ui/ProgressBar';
import { cn } from '@/lib/utils';

export default function LessonsPage() {
  const [activeBook, setActiveBook] = useState(books[0].slug);
  const { getCompletedLessons } = useProgressStore();
  const completed = getCompletedLessons();

  const currentBook = books.find((b) => b.slug === activeBook)!;
  const bookLessons = getLessonsByBook(activeBook);
  const bookCompleted = completed.filter((id) =>
    bookLessons.some((l) => l.id === id)
  ).length;
  const bookProgress = Math.round((bookCompleted / bookLessons.length) * 100);

  return (
    <AppShell title="درس‌ها">
      <div className="space-y-6 max-w-6xl mx-auto" dir="rtl">

        {/* Book tabs */}
        <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none">
          {books.map((book) => {
            const bLessons = getLessonsByBook(book.slug);
            const bCompleted = completed.filter((id) =>
              bLessons.some((l) => l.id === id)
            ).length;
            return (
              <button
                key={book.slug}
                onClick={() => setActiveBook(book.slug)}
                className={cn(
                  'flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium whitespace-nowrap shrink-0 transition-all border',
                  activeBook === book.slug
                    ? `bg-linear-to-r ${book.color} text-white border-transparent shadow-md`
                    : 'bg-card border-border text-muted-foreground hover:text-foreground hover:border-green-500/30'
                )}
              >
                <span>{book.icon}</span>
                <span>{book.titleFa}</span>
                <span className={cn(
                  'text-xs px-1.5 py-0.5 rounded-full',
                  activeBook === book.slug ? 'bg-white/20' : 'bg-muted'
                )}>
                  {bCompleted}/{book.totalLessons}
                </span>
              </button>
            );
          })}
        </div>

        {/* Header for current book */}
        <div className="text-right">
          <h1 className="text-2xl font-bold">{currentBook.titleFa}</h1>
          <p className="text-muted-foreground mt-1">
            {currentBook.totalLessons} درس — سطح {currentBook.levelLabel} ({currentBook.level})
          </p>
          <div className="mt-4 max-w-md">
            <div className="flex items-center justify-between text-sm mb-1">
              <span className="text-muted-foreground">{bookCompleted} از {currentBook.totalLessons} تموم شده</span>
              <span className="font-medium text-green-500">{bookProgress}%</span>
            </div>
            <ProgressBar value={bookProgress} />
          </div>
        </div>

        {/* Lesson grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {bookLessons.map((lesson) => (
            <LessonCard key={lesson.id} lesson={lesson} />
          ))}
        </div>

      </div>
    </AppShell>
  );
}
