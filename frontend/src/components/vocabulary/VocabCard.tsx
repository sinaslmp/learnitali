'use client';

import { VocabularyItem } from '@/types';
import { useProgressStore } from '@/stores/progressStore';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Heart, Volume2, CheckCircle } from 'lucide-react';
import { cn } from '@/lib/utils';
import { difficultyLabel } from '@/lib/utils';

interface VocabCardProps {
  item: VocabularyItem;
  compact?: boolean;
}

const difficultyVariant: Record<string, 'success' | 'warning' | 'danger'> = {
  beginner: 'success',
  intermediate: 'warning',
  advanced: 'danger',
};

export function VocabCard({ item, compact }: VocabCardProps) {
  const { progress, toggleFavoriteVocab, markVocabLearned } = useProgressStore();
  const isFav = progress.favoriteVocab.includes(item.id);
  const lp = progress.lessons[item.lessonId];
  const isLearned = lp?.vocabLearned.includes(item.id);

  if (compact) {
    return (
      <div className={cn(
        'flex items-center justify-between p-3 rounded-xl border transition-colors',
        isLearned ? 'bg-green-500/5 border-green-500/20' : 'bg-card border-border hover:border-green-500/30'
      )}>
        <div className="flex items-center gap-3">
          <button
            onClick={() => toggleFavoriteVocab(item.id)}
            className={cn('transition-colors', isFav ? 'text-red-500' : 'text-muted-foreground hover:text-red-400')}
          >
            <Heart size={16} className={isFav ? 'fill-current' : ''} />
          </button>
          <div className="text-right">
            <span className="font-semibold text-foreground">{item.word}</span>
            <span className="text-muted-foreground mx-2">—</span>
            <span className="text-sm text-muted-foreground">{item.translation}</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Badge variant={difficultyVariant[item.difficulty]} size="sm">
            {difficultyLabel(item.difficulty)}
          </Badge>
          {isLearned && <CheckCircle size={16} className="text-green-500" />}
        </div>
      </div>
    );
  }

  return (
    <div className={cn(
      'rounded-2xl border p-5 space-y-4 transition-all duration-200',
      isLearned ? 'bg-green-500/5 border-green-500/30' : 'bg-card border-border hover:shadow-md'
    )}>
      {/* Header */}
      <div className="flex items-start justify-between">
        <button
          onClick={() => toggleFavoriteVocab(item.id)}
          className={cn('p-1.5 rounded-lg transition-colors', isFav ? 'text-red-500' : 'text-muted-foreground hover:text-red-400')}
        >
          <Heart size={18} className={isFav ? 'fill-current' : ''} />
        </button>
        <div className="text-right">
          <p className="text-2xl font-bold text-foreground">{item.word}</p>
          <p className="text-sm text-muted-foreground italic mt-0.5">/{item.pronunciation}/</p>
        </div>
      </div>

      {/* Translation */}
      <div className="bg-muted/50 rounded-xl p-3 text-right">
        <p className="text-lg font-semibold text-foreground">{item.translation}</p>
        <Badge variant={difficultyVariant[item.difficulty]} size="sm" className="mt-1">
          {difficultyLabel(item.difficulty)}
        </Badge>
      </div>

      {/* Example */}
      <div className="space-y-1.5 text-right">
        <div className="flex items-center justify-between">
          <button className="p-1.5 rounded-lg hover:bg-accent text-muted-foreground hover:text-blue-500 transition-colors">
            <Volume2 size={16} />
          </button>
          <p className="text-sm font-medium text-foreground italic">{item.exampleIt}</p>
        </div>
        <p className="text-sm text-muted-foreground">{item.exampleFa}</p>
      </div>

      {/* Actions */}
      <div className="flex gap-2 pt-1">
        {!isLearned ? (
          <Button
            size="sm"
            onClick={() => markVocabLearned(item.lessonId, item.id)}
            className="flex-1"
          >
            <CheckCircle size={15} />
            یاد گرفتم
          </Button>
        ) : (
          <div className="flex-1 flex items-center justify-center gap-2 text-sm text-green-600 dark:text-green-400 font-medium">
            <CheckCircle size={15} />
            یاد گرفته شد
          </div>
        )}
      </div>
    </div>
  );
}
