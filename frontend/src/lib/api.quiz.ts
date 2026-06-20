import { apiClient, apiFetch } from './api';

export interface QuizAnswer {
  questionId: string;
  answer: string;
  timeTaken?: number;
}

export interface QuizResult {
  score: number;
  passed: boolean;
  earnedPoints: number;
  totalPoints: number;
  correctCount: number;
  totalCount: number;
  gradedAnswers?: { questionId: string; isCorrect: boolean; userAnswer: string }[];
}

export const quizApi = {
  getByLesson: (lessonId: string) =>
    apiFetch<unknown[]>(apiClient.get(`/quizzes/lessons/${lessonId}`)),

  getQuiz: (quizId: string) =>
    apiFetch<unknown>(apiClient.get(`/quizzes/${quizId}`)),

  submit: (quizId: string, answers: QuizAnswer[], timeTaken?: number) =>
    apiFetch<QuizResult>(
      apiClient.post(`/quizzes/${quizId}/submit`, { answers, timeTaken }),
    ),

  getAttempts: (quizId: string) =>
    apiFetch<unknown[]>(apiClient.get(`/quizzes/${quizId}/attempts`)),

  getBest: (quizId: string) =>
    apiFetch<unknown>(apiClient.get(`/quizzes/${quizId}/best`)),
};
