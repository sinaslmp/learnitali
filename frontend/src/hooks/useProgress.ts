'use client';

import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { progressApi } from '@/lib/api.progress';
import { useAuthStore } from '@/stores/authStore';

// ─── Query keys ──────────────────────────────────────────────────────────────
export const progressKeys = {
  dashboard: ['progress', 'dashboard'] as const,
  lesson: (id: string) => ['progress', 'lesson', id] as const,
  vocab: (lessonId?: string) => ['progress', 'vocab', lessonId ?? 'all'] as const,
  course: (id: string) => ['progress', 'course', id] as const,
};

// ─── Dashboard stats ──────────────────────────────────────────────────────────
export function useDashboardStats() {
  const isAuth = useAuthStore((s) => s.isAuthenticated());
  return useQuery({
    queryKey: progressKeys.dashboard,
    queryFn: progressApi.getDashboard,
    enabled: isAuth,
    staleTime: 30_000,
  });
}

// ─── Lesson progress ──────────────────────────────────────────────────────────
export function useLessonProgress(lessonId: string) {
  const isAuth = useAuthStore((s) => s.isAuthenticated());
  return useQuery({
    queryKey: progressKeys.lesson(lessonId),
    queryFn: () => progressApi.getLessonProgress(lessonId),
    enabled: isAuth && !!lessonId,
  });
}

// ─── Mark section complete ────────────────────────────────────────────────────
export function useMarkSectionComplete() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: ({ lessonId, section }: { lessonId: string; section: string }) =>
      progressApi.markSectionComplete(lessonId, section),
    onSuccess: (_, { lessonId }) => {
      qc.invalidateQueries({ queryKey: progressKeys.lesson(lessonId) });
      qc.invalidateQueries({ queryKey: progressKeys.dashboard });
    },
  });
}

// ─── Vocab progress ───────────────────────────────────────────────────────────
export function useVocabProgress(lessonId?: string) {
  const isAuth = useAuthStore((s) => s.isAuthenticated());
  return useQuery({
    queryKey: progressKeys.vocab(lessonId),
    queryFn: () => progressApi.getVocabProgress(lessonId),
    enabled: isAuth,
  });
}

export function useMarkVocabLearned() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (itemId: string) => progressApi.markVocabLearned(itemId),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ['progress', 'vocab'] });
      qc.invalidateQueries({ queryKey: progressKeys.dashboard });
    },
  });
}

export function useToggleVocabFavorite() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (itemId: string) => progressApi.toggleVocabFavorite(itemId),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: ['progress', 'vocab'] });
    },
  });
}

// ─── Grammar progress ─────────────────────────────────────────────────────────
export function useMarkGrammarComplete() {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: (topicId: string) => progressApi.markGrammarComplete(topicId),
    onSuccess: () => {
      qc.invalidateQueries({ queryKey: progressKeys.dashboard });
    },
  });
}

// ─── Study time ───────────────────────────────────────────────────────────────
export function useAddStudyTime() {
  return useMutation({
    mutationFn: ({ lessonId, minutes }: { lessonId: string; minutes: number }) =>
      progressApi.addStudyTime(lessonId, minutes),
  });
}
