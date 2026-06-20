import { apiClient, apiFetch } from './api';

export type FlashcardRating = 'AGAIN' | 'HARD' | 'GOOD' | 'EASY';

export interface FlashcardReviewData {
  flashcardId: string;
  state: string;
  easeFactor: number;
  interval: number;
  repetitions: number;
  dueDate: string;
}

export interface FlashcardStats {
  total: number;
  learned: number;
  due: number;
  learning: number;
}

export const flashcardsApi = {
  getDue: (deckId?: string, limit?: number) =>
    apiFetch<unknown[]>(
      apiClient.get('/flashcards/due', { params: { deckId, limit } }),
    ),

  getNew: (deckId?: string, limit?: number) =>
    apiFetch<unknown[]>(
      apiClient.get('/flashcards/new', { params: { deckId, limit } }),
    ),

  review: (flashcardId: string, rating: FlashcardRating, timeSpent?: number) =>
    apiFetch<FlashcardReviewData>(
      apiClient.post(`/flashcards/${flashcardId}/review`, { rating, timeSpent }),
    ),

  getStats: () =>
    apiFetch<FlashcardStats>(apiClient.get('/flashcards/stats')),

  getDecks: () =>
    apiFetch<unknown[]>(apiClient.get('/flashcards/decks')),

  createDeck: (name: string, description?: string, lessonId?: string) =>
    apiFetch<unknown>(
      apiClient.post('/flashcards/decks', { name, description, lessonId }),
    ),

  getByLesson: (lessonId: string) =>
    apiFetch<unknown[]>(apiClient.get(`/flashcards/lessons/${lessonId}`)),
};
