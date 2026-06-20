import { apiClient, apiFetch } from './api';

export interface DashboardStats {
  totalXP: number;
  streak: number;
  completedLessons: number;
  vocabLearned: number;
  grammarCompleted: number;
  avgQuizScore: number;
  totalStudyMinutes: number;
}

export interface LessonProgressData {
  lessonId: string;
  completedSections: string[];
  studyTimeMinutes: number;
  isCompleted: boolean;
  quizScore?: number;
  xpEarned: number;
  lastStudiedAt?: string;
}

export interface VocabProgressData {
  vocabularyItemId: string;
  isLearned: boolean;
  isFavorited: boolean;
  reviewCount: number;
}

export const progressApi = {
  getDashboard: () =>
    apiFetch<DashboardStats>(apiClient.get('/progress/dashboard')),

  getCourseProgress: (courseId: string) =>
    apiFetch<unknown>(apiClient.get(`/progress/courses/${courseId}`)),

  getLessonProgress: (lessonId: string) =>
    apiFetch<LessonProgressData | null>(apiClient.get(`/progress/lessons/${lessonId}`)),

  markSectionComplete: (lessonId: string, section: string) =>
    apiFetch<LessonProgressData>(
      apiClient.post(`/progress/lessons/${lessonId}/sections/${section}`),
    ),

  addStudyTime: (lessonId: string, minutes: number) =>
    apiFetch<LessonProgressData>(
      apiClient.post(`/progress/lessons/${lessonId}/time`, { minutes }),
    ),

  markVocabLearned: (itemId: string) =>
    apiFetch<VocabProgressData>(
      apiClient.post(`/progress/vocabulary/${itemId}/learned`),
    ),

  toggleVocabFavorite: (itemId: string) =>
    apiFetch<VocabProgressData>(
      apiClient.post(`/progress/vocabulary/${itemId}/favorite`),
    ),

  getVocabProgress: (lessonId?: string) =>
    apiFetch<VocabProgressData[]>(
      apiClient.get('/progress/vocabulary', { params: lessonId ? { lessonId } : {} }),
    ),

  markGrammarComplete: (topicId: string) =>
    apiFetch<unknown>(apiClient.post(`/progress/grammar/${topicId}/complete`)),
};
