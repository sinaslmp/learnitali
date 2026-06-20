import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { StudentProgress, LessonProgress, LessonSection, StudentNote, AppSettings } from '@/types';

const defaultLessonProgress = (): LessonProgress => ({
  lessonId: 0,
  completedSections: [],
  vocabLearned: [],
  grammarCompleted: [],
  quizScore: undefined,
  quizAttempts: 0,
  studyTimeMinutes: 0,
  lastStudied: undefined,
  isCompleted: false,
});

interface ProgressStore {
  progress: StudentProgress;
  settings: AppSettings;

  // Progress actions
  markSectionComplete: (lessonId: number, section: LessonSection) => void;
  markVocabLearned: (lessonId: number, vocabId: string) => void;
  markGrammarComplete: (lessonId: number, grammarId: string) => void;
  setQuizScore: (lessonId: number, score: number) => void;
  addStudyTime: (lessonId: number, minutes: number) => void;
  toggleFavoriteVocab: (vocabId: string) => void;
  setFlashcardStatus: (cardId: string, status: 'new' | 'learning' | 'learned') => void;

  // Notes
  addNote: (content: string, lessonId?: number, section?: LessonSection) => void;
  updateNote: (noteId: string, content: string) => void;
  deleteNote: (noteId: string) => void;

  // Settings
  updateSettings: (patch: Partial<AppSettings>) => void;

  // API sync
  setApiStats: (stats: { totalXP: number; streak: number; completedLessons: number; vocabLearned: number; totalStudyMinutes: number }) => void;

  // Computed helpers
  getLessonProgress: (lessonId: number) => LessonProgress;
  getTotalVocabLearned: () => number;
  getCompletedLessons: () => number[];
  getOverallProgress: () => number; // 0-100
}

const initialSettings: AppSettings = {
  theme: 'system',
  language: 'fa',
  fontSize: 'md',
  showTranslations: true,
  autoPlayAudio: false,
  studyReminder: false,
};

const initialProgress: StudentProgress = {
  totalXP: 0,
  streak: 0,
  lastStudyDate: undefined,
  lessons: {},
  favoriteVocab: [],
  flashcardStatus: {},
  notes: [],
};

export const useProgressStore = create<ProgressStore>()(
  persist(
    (set, get) => ({
      progress: initialProgress,
      settings: initialSettings,

      getLessonProgress: (lessonId) => {
        return get().progress.lessons[lessonId] ?? { ...defaultLessonProgress(), lessonId };
      },

      markSectionComplete: (lessonId, section) => {
        set((state) => {
          const lp = state.progress.lessons[lessonId] ?? { ...defaultLessonProgress(), lessonId };
          if (lp.completedSections.includes(section)) return state;
          const updated = {
            ...lp,
            completedSections: [...lp.completedSections, section],
            lastStudied: new Date().toISOString(),
          };
          const XP_PER_SECTION = 10;
          return {
            progress: {
              ...state.progress,
              totalXP: state.progress.totalXP + XP_PER_SECTION,
              lessons: { ...state.progress.lessons, [lessonId]: updated },
            },
          };
        });
      },

      markVocabLearned: (lessonId, vocabId) => {
        set((state) => {
          const lp = state.progress.lessons[lessonId] ?? { ...defaultLessonProgress(), lessonId };
          if (lp.vocabLearned.includes(vocabId)) return state;
          const updated = { ...lp, vocabLearned: [...lp.vocabLearned, vocabId] };
          return {
            progress: {
              ...state.progress,
              totalXP: state.progress.totalXP + 5,
              lessons: { ...state.progress.lessons, [lessonId]: updated },
            },
          };
        });
      },

      markGrammarComplete: (lessonId, grammarId) => {
        set((state) => {
          const lp = state.progress.lessons[lessonId] ?? { ...defaultLessonProgress(), lessonId };
          if (lp.grammarCompleted.includes(grammarId)) return state;
          const updated = { ...lp, grammarCompleted: [...lp.grammarCompleted, grammarId] };
          return {
            progress: {
              ...state.progress,
              totalXP: state.progress.totalXP + 15,
              lessons: { ...state.progress.lessons, [lessonId]: updated },
            },
          };
        });
      },

      setQuizScore: (lessonId, score) => {
        set((state) => {
          const lp = state.progress.lessons[lessonId] ?? { ...defaultLessonProgress(), lessonId };
          const updated = {
            ...lp,
            quizScore: Math.max(lp.quizScore ?? 0, score),
            quizAttempts: lp.quizAttempts + 1,
            isCompleted: score >= 70,
          };
          return {
            progress: {
              ...state.progress,
              totalXP: state.progress.totalXP + Math.floor(score / 10),
              lessons: { ...state.progress.lessons, [lessonId]: updated },
            },
          };
        });
      },

      addStudyTime: (lessonId, minutes) => {
        set((state) => {
          const lp = state.progress.lessons[lessonId] ?? { ...defaultLessonProgress(), lessonId };
          const updated = { ...lp, studyTimeMinutes: lp.studyTimeMinutes + minutes };
          return {
            progress: {
              ...state.progress,
              lessons: { ...state.progress.lessons, [lessonId]: updated },
            },
          };
        });
      },

      toggleFavoriteVocab: (vocabId) => {
        set((state) => {
          const favs = state.progress.favoriteVocab;
          return {
            progress: {
              ...state.progress,
              favoriteVocab: favs.includes(vocabId)
                ? favs.filter((id) => id !== vocabId)
                : [...favs, vocabId],
            },
          };
        });
      },

      setFlashcardStatus: (cardId, status) => {
        set((state) => ({
          progress: {
            ...state.progress,
            flashcardStatus: { ...state.progress.flashcardStatus, [cardId]: status },
          },
        }));
      },

      addNote: (content, lessonId, section) => {
        const note: StudentNote = {
          id: `note-${Date.now()}`,
          lessonId,
          section,
          content,
          createdAt: new Date().toISOString(),
          updatedAt: new Date().toISOString(),
        };
        set((state) => ({
          progress: { ...state.progress, notes: [...state.progress.notes, note] },
        }));
      },

      updateNote: (noteId, content) => {
        set((state) => ({
          progress: {
            ...state.progress,
            notes: state.progress.notes.map((n) =>
              n.id === noteId ? { ...n, content, updatedAt: new Date().toISOString() } : n
            ),
          },
        }));
      },

      deleteNote: (noteId) => {
        set((state) => ({
          progress: {
            ...state.progress,
            notes: state.progress.notes.filter((n) => n.id !== noteId),
          },
        }));
      },

      updateSettings: (patch) => {
        set((state) => ({ settings: { ...state.settings, ...patch } }));
      },

      setApiStats: (stats) => {
        set((state) => ({
          progress: {
            ...state.progress,
            totalXP: stats.totalXP,
            streak: stats.streak,
          },
        }));
      },

      getTotalVocabLearned: () => {
        const { lessons } = get().progress;
        return Object.values(lessons).reduce((sum, lp) => sum + lp.vocabLearned.length, 0);
      },

      getCompletedLessons: () => {
        const { lessons } = get().progress;
        return Object.values(lessons)
          .filter((lp) => lp.isCompleted)
          .map((lp) => lp.lessonId);
      },

      getOverallProgress: () => {
        const total = 10; // 10 lessons
        const completed = get().getCompletedLessons().length;
        return Math.round((completed / total) * 100);
      },
    }),
    { name: 'learnitali-progress' }
  )
);
