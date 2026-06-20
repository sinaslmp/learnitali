'use client';

import { useState } from 'react';
import { Flashcard } from '@/types';
import { useProgressStore } from '@/stores/progressStore';
import { Button } from '@/components/ui/Button';
import { Badge } from '@/components/ui/Badge';
import { ProgressBar } from '@/components/ui/ProgressBar';
import { Volume2, RotateCcw, ChevronLeft, ChevronRight, CheckCircle, Brain } from 'lucide-react';
import { cn } from '@/lib/utils';

interface FlashcardDeckProps {
  cards: Flashcard[];
  title: string;
}

export function FlashcardDeck({ cards, title }: FlashcardDeckProps) {
  const [index, setIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [finished, setFinished] = useState<string[]>([]);
  const { setFlashcardStatus, progress } = useProgressStore();

  const card = cards[index];
  const total = cards.length;
  const pct = Math.round((finished.length / total) * 100);
  const statusMap = progress.flashcardStatus;

  const flip = () => setFlipped(!flipped);

  const next = () => {
    setFlipped(false);
    setTimeout(() => setIndex((i) => Math.min(i + 1, total - 1)), 150);
  };

  const prev = () => {
    setFlipped(false);
    setTimeout(() => setIndex((i) => Math.max(i - 1, 0)), 150);
  };

  const markStatus = (status: 'learning' | 'learned') => {
    setFlashcardStatus(card.id, status);
    if (status === 'learned' && !finished.includes(card.id)) {
      setFinished([...finished, card.id]);
    }
    if (index < total - 1) next();
  };

  const reset = () => {
    setIndex(0);
    setFlipped(false);
    setFinished([]);
  };

  if (!card) return null;

  const allDone = finished.length === total;

  return (
    <div className="space-y-6 max-w-xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between">
        <Button variant="ghost" size="sm" onClick={reset}>
          <RotateCcw size={15} />
          شروع مجدد
        </Button>
        <div className="text-center">
          <p className="text-sm font-semibold text-foreground">{title}</p>
          <p className="text-xs text-muted-foreground">{index + 1} از {total}</p>
        </div>
        <Badge variant={allDone ? 'success' : 'outline'}>{finished.length}/{total} یاد گرفته</Badge>
      </div>

      <ProgressBar value={pct} />

      {allDone ? (
        <div className="text-center py-16 space-y-4">
          <p className="text-5xl">🎉</p>
          <p className="text-xl font-bold">آفرین! همه کارت‌ها را مرور کردی!</p>
          <p className="text-muted-foreground">Ottimo lavoro! Bravo/a!</p>
          <Button onClick={reset} size="lg">مرور مجدد</Button>
        </div>
      ) : (
        <>
          {/* Card */}
          <div
            className="cursor-pointer"
            style={{ perspective: 1000 }}
            onClick={flip}
          >
            <div
              className="relative transition-transform duration-500"
              style={{
                transformStyle: 'preserve-3d',
                transform: flipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
                height: 280,
              }}
            >
              {/* Front */}
              <div
                className="absolute inset-0 rounded-3xl border-2 border-border bg-gradient-to-br from-card to-muted flex flex-col items-center justify-center p-8 text-center shadow-lg"
                style={{ backfaceVisibility: 'hidden' }}
              >
                <p className="text-xs text-muted-foreground mb-4 uppercase tracking-widest">ایتالیایی</p>
                <p className="text-4xl font-bold text-foreground">{card.front}</p>
                <p className="text-sm text-muted-foreground italic mt-3">/{card.pronunciation}/</p>
                <div className="mt-6 flex items-center gap-2 text-xs text-muted-foreground">
                  <Volume2 size={14} />
                  <span>برای شنیدن کلیک کنید</span>
                </div>
                <p className="mt-2 text-xs text-muted-foreground opacity-60">برگردان ←</p>
              </div>

              {/* Back */}
              <div
                className="absolute inset-0 rounded-3xl border-2 border-green-500/40 bg-gradient-to-br from-green-500/10 to-emerald-500/10 flex flex-col items-center justify-center p-8 text-center shadow-lg"
                style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
              >
                <p className="text-xs text-muted-foreground mb-4 uppercase tracking-widest">فارسی</p>
                <p className="text-3xl font-bold text-foreground">{card.back}</p>
                <div className="mt-4 bg-background/60 rounded-xl px-4 py-2">
                  <p className="text-sm text-muted-foreground italic">{card.example}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Nav */}
          <div className="flex items-center gap-3">
            <button
              onClick={prev}
              disabled={index === 0}
              className="p-3 rounded-xl border border-border hover:bg-accent disabled:opacity-30 transition-colors"
            >
              <ChevronRight size={20} />
            </button>

            {flipped && (
              <>
                <Button
                  variant="outline"
                  className="flex-1 border-orange-500/30 text-orange-600 hover:bg-orange-500/10"
                  onClick={() => markStatus('learning')}
                >
                  <Brain size={16} />
                  هنوز یاد می‌گیرم
                </Button>
                <Button
                  className="flex-1"
                  onClick={() => markStatus('learned')}
                >
                  <CheckCircle size={16} />
                  بلدم!
                </Button>
              </>
            )}
            {!flipped && (
              <Button variant="outline" className="flex-1" onClick={flip}>
                برگردان برای دیدن پاسخ
              </Button>
            )}

            <button
              onClick={next}
              disabled={index === total - 1}
              className="p-3 rounded-xl border border-border hover:bg-accent disabled:opacity-30 transition-colors"
            >
              <ChevronLeft size={20} />
            </button>
          </div>

          {/* Status indicators */}
          <div className="flex gap-1 flex-wrap">
            {cards.map((c, i) => (
              <div
                key={c.id}
                className={cn(
                  'w-6 h-1.5 rounded-full transition-colors',
                  i === index ? 'bg-green-500' :
                  statusMap[c.id] === 'learned' ? 'bg-green-300 dark:bg-green-700' :
                  statusMap[c.id] === 'learning' ? 'bg-orange-300 dark:bg-orange-700' :
                  'bg-muted'
                )}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
