'use client';

import { useState, useMemo } from 'react';
import { AppShell } from '@/components/layout/AppShell';
import { VocabCard } from '@/components/vocabulary/VocabCard';
import { lessons } from '@/data/lessons';
import { useProgressStore } from '@/stores/progressStore';
import { Badge } from '@/components/ui/Badge';
import { VocabularyItem } from '@/types';
import { Search, Heart, BookOpen } from 'lucide-react';

const allVocab: VocabularyItem[] = lessons.flatMap((l) => l.vocabulary);

const categories = Array.from(new Set(allVocab.map((v) => v.category)));

export default function VocabularyPage() {
  const [search, setSearch] = useState('');
  const [filterLesson, setFilterLesson] = useState<number | 'all'>('all');
  const [filterCategory, setFilterCategory] = useState<string | 'all'>('all');
  const [showFavOnly, setShowFavOnly] = useState(false);
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const { progress } = useProgressStore();

  const filtered = useMemo(() => {
    return allVocab.filter((v) => {
      if (filterLesson !== 'all' && v.lessonId !== filterLesson) return false;
      if (filterCategory !== 'all' && v.category !== filterCategory) return false;
      if (showFavOnly && !progress.favoriteVocab.includes(v.id)) return false;
      if (search) {
        const q = search.toLowerCase();
        return v.word.toLowerCase().includes(q) || v.translation.includes(q) || v.exampleIt.toLowerCase().includes(q);
      }
      return true;
    });
  }, [search, filterLesson, filterCategory, showFavOnly, progress.favoriteVocab]);

  const totalLearned = allVocab.filter((v) => {
    const lp = progress.lessons[v.lessonId];
    return lp?.vocabLearned.includes(v.id);
  }).length;

  return (
    <AppShell title="لغات">
      <div className="space-y-6 max-w-6xl mx-auto" dir="rtl">

        {/* Header */}
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
          <div className="text-right">
            <h1 className="text-2xl font-bold">لغات</h1>
            <p className="text-muted-foreground text-sm mt-1">
              {totalLearned} از {allVocab.length} لغت یاد گرفته شده
            </p>
          </div>
          <div className="flex gap-2">
            <Badge variant="success">{totalLearned} یاد گرفته</Badge>
            <Badge variant="outline">{allVocab.length - totalLearned} باقی‌مانده</Badge>
          </div>
        </div>

        {/* Filters */}
        <div className="bg-card border border-border rounded-2xl p-4 space-y-3">
          {/* Search */}
          <div className="relative">
            <Search size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="جستجو در لغات..."
              className="w-full pr-9 pl-4 py-2.5 rounded-xl border border-border bg-muted/30 text-sm focus:outline-none focus:border-green-500"
            />
          </div>

          {/* Filter row */}
          <div className="flex flex-wrap gap-2">
            {/* Lesson filter */}
            <select
              value={filterLesson}
              onChange={(e) => setFilterLesson(e.target.value === 'all' ? 'all' : Number(e.target.value))}
              className="px-3 py-1.5 rounded-xl border border-border bg-card text-sm focus:outline-none focus:border-green-500"
            >
              <option value="all">همه درس‌ها</option>
              {lessons.map((l) => (
                <option key={l.id} value={l.id}>درس {l.id}: {l.titleFa}</option>
              ))}
            </select>

            {/* Category filter */}
            <select
              value={filterCategory}
              onChange={(e) => setFilterCategory(e.target.value)}
              className="px-3 py-1.5 rounded-xl border border-border bg-card text-sm focus:outline-none focus:border-green-500"
            >
              <option value="all">همه دسته‌ها</option>
              {categories.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>

            {/* Favorites toggle */}
            <button
              onClick={() => setShowFavOnly(!showFavOnly)}
              className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl border text-sm transition-colors ${
                showFavOnly ? 'border-red-500 bg-red-500/10 text-red-600' : 'border-border hover:border-red-500/40'
              }`}
            >
              <Heart size={14} className={showFavOnly ? 'fill-current' : ''} />
              موردعلاقه
            </button>

            {/* View toggle */}
            <div className="mr-auto flex gap-1 border border-border rounded-xl p-1">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-1.5 rounded-lg text-xs ${viewMode === 'grid' ? 'bg-green-500 text-white' : 'hover:bg-accent'}`}
              >
                ▦
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-1.5 rounded-lg text-xs ${viewMode === 'list' ? 'bg-green-500 text-white' : 'hover:bg-accent'}`}
              >
                ☰
              </button>
            </div>
          </div>

          <p className="text-xs text-muted-foreground">{filtered.length} لغت پیدا شد</p>
        </div>

        {/* Vocab display */}
        {filtered.length === 0 ? (
          <div className="text-center py-16 text-muted-foreground">
            <BookOpen size={48} className="mx-auto mb-4 opacity-30" />
            <p>لغتی پیدا نشد</p>
          </div>
        ) : viewMode === 'grid' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((v) => <VocabCard key={v.id} item={v} />)}
          </div>
        ) : (
          <div className="space-y-2">
            {filtered.map((v) => <VocabCard key={v.id} item={v} compact />)}
          </div>
        )}
      </div>
    </AppShell>
  );
}
