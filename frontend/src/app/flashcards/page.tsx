'use client';

import { useState } from 'react';
import { AppShell } from '@/components/layout/AppShell';
import { FlashcardDeck } from '@/components/flashcards/FlashcardDeck';
import { lessons } from '@/data/lessons';
import { useProgressStore } from '@/stores/progressStore';
import { Badge } from '@/components/ui/Badge';
import { cn } from '@/lib/utils';

const allCards = lessons.flatMap((l) => l.flashcards);

export default function FlashcardsPage() {
  const [selectedLesson, setSelectedLesson] = useState<number | 'all'>('all');
  const { progress } = useProgressStore();

  const cards = selectedLesson === 'all' ? allCards : allCards.filter((c) => c.lessonId === selectedLesson);

  const learnedCount = allCards.filter((c) => progress.flashcardStatus[c.id] === 'learned').length;

  return (
    <AppShell title="فلش‌کارت">
      <div className="space-y-6 max-w-3xl mx-auto" dir="rtl">

        <div className="text-right">
          <h1 className="text-2xl font-bold">فلش‌کارت</h1>
          <p className="text-muted-foreground text-sm mt-1">
            {learnedCount} از {allCards.length} کارت یاد گرفته شده
          </p>
        </div>

        {/* Lesson selector */}
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setSelectedLesson('all')}
            className={cn(
              'px-4 py-2 rounded-xl text-sm font-medium border transition-all',
              selectedLesson === 'all'
                ? 'bg-green-500 text-white border-green-500'
                : 'border-border hover:border-green-500/40 bg-card'
            )}
          >
            همه ({allCards.length})
          </button>
          {lessons.map((l) => (
            <button
              key={l.id}
              onClick={() => setSelectedLesson(l.id)}
              className={cn(
                'px-3 py-2 rounded-xl text-sm font-medium border transition-all flex items-center gap-1.5',
                selectedLesson === l.id
                  ? 'bg-green-500 text-white border-green-500'
                  : 'border-border hover:border-green-500/40 bg-card'
              )}
            >
              <span>{l.icon}</span>
              <span>درس {l.id}</span>
              <Badge
                variant={selectedLesson === l.id ? 'outline' : 'outline'}
                size="sm"
                className={selectedLesson === l.id ? 'bg-white/20 text-white border-white/30' : ''}
              >
                {l.flashcards.length}
              </Badge>
            </button>
          ))}
        </div>

        {/* Stats bar */}
        <div className="grid grid-cols-3 gap-3">
          {['new', 'learning', 'learned'].map((status) => {
            const count = allCards.filter((c) => (progress.flashcardStatus[c.id] ?? 'new') === status).length;
            const labels: Record<string, string> = { new: 'جدید', learning: 'در حال یادگیری', learned: 'یاد گرفته' };
            const colors: Record<string, string> = { new: 'text-blue-500', learning: 'text-orange-500', learned: 'text-green-500' };
            return (
              <div key={status} className="bg-card border border-border rounded-xl p-3 text-center">
                <p className={cn('text-xl font-bold', colors[status])}>{count}</p>
                <p className="text-xs text-muted-foreground mt-1">{labels[status]}</p>
              </div>
            );
          })}
        </div>

        {/* Deck */}
        <div className="bg-card border border-border rounded-2xl p-6">
          <FlashcardDeck
            cards={cards}
            title={selectedLesson === 'all' ? 'همه فلش‌کارت‌ها' : `درس ${selectedLesson}`}
          />
        </div>
      </div>
    </AppShell>
  );
}
