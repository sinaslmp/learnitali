// ─── Core Domain Types ───────────────────────────────────────────────────────

export type Difficulty = 'beginner' | 'intermediate' | 'advanced';
export type LessonSection =
  | 'overview'
  | 'vocabulary'
  | 'grammar'
  | 'reading'
  | 'listening'
  | 'speaking'
  | 'writing'
  | 'exercises'
  | 'quiz'
  | 'notes';

// ─── Vocabulary ───────────────────────────────────────────────────────────────

export interface VocabularyItem {
  id: string;
  lessonId: number;
  word: string;            // Italian
  translation: string;     // Persian
  pronunciation: string;   // IPA or phonetic
  exampleIt: string;
  exampleFa: string;
  audioUrl?: string;
  difficulty: Difficulty;
  category: string;
}

// ─── Grammar ─────────────────────────────────────────────────────────────────

export interface GrammarExample {
  italian: string;
  persian: string;
}

export interface GrammarTopic {
  id: string;
  lessonId: number;
  title: string;           // Italian title
  titleFa: string;         // Persian title
  explanation: string;     // Italian explanation
  explanationFa: string;   // Persian explanation
  examples: GrammarExample[];
  commonMistakes: string[];
  exercises: Exercise[];
}

// ─── Exercises & Quiz ────────────────────────────────────────────────────────

export type ExerciseType =
  | 'multiple_choice'
  | 'fill_blank'
  | 'matching'
  | 'true_false'
  | 'translation';

export interface Exercise {
  id: string;
  type: ExerciseType;
  question: string;
  questionFa?: string;
  options?: string[];
  correctAnswer: string | string[];
  explanation?: string;
  explanationFa?: string;
}

// ─── Reading ─────────────────────────────────────────────────────────────────

export interface ReadingText {
  id: string;
  lessonId: number;
  title: string;
  titleFa: string;
  content: string;         // Italian text
  translation: string;     // Persian translation
  audioUrl?: string;
  vocabulary: string[];    // vocab item ids highlighted
}

// ─── Listening ───────────────────────────────────────────────────────────────

export interface ListeningTrack {
  id: string;
  lessonId: number;
  title: string;
  titleFa: string;
  audioUrl?: string;
  transcript: string;
  translation: string;
  duration?: number;       // seconds
}

// ─── Speaking ────────────────────────────────────────────────────────────────

export interface SpeakingExercise {
  id: string;
  lessonId: number;
  type: 'conversation' | 'pronunciation' | 'roleplay' | 'challenge';
  title: string;
  titleFa: string;
  scenario: string;
  scenarioFa: string;
  lines: { speaker: string; text: string; translation: string }[];
  tips: string[];
}

// ─── Flashcard ───────────────────────────────────────────────────────────────

export interface Flashcard {
  id: string;
  lessonId: number;
  front: string;           // Italian
  back: string;            // Persian
  example: string;
  pronunciation: string;
  audioUrl?: string;
  difficulty: Difficulty;
}

// ─── Lesson ───────────────────────────────────────────────────────────────────

export interface Lesson {
  id: number;
  slug: string;
  title: string;           // Italian
  titleFa: string;         // Persian
  subtitle: string;
  subtitleFa: string;
  overview: string;
  overviewFa: string;
  objectives: string[];
  objectivesFa: string[];
  color: string;           // Tailwind color class
  icon: string;
  pdfUrl?: string;
  vocabulary: VocabularyItem[];
  grammar: GrammarTopic[];
  reading: ReadingText[];
  listening: ListeningTrack[];
  speaking: SpeakingExercise[];
  exercises: Exercise[];
  flashcards: Flashcard[];
  estimatedMinutes: number;
}

// ─── Progress ────────────────────────────────────────────────────────────────

export interface LessonProgress {
  lessonId: number;
  completedSections: LessonSection[];
  vocabLearned: string[];
  grammarCompleted: string[];
  quizScore?: number;
  quizAttempts: number;
  studyTimeMinutes: number;
  lastStudied?: string;    // ISO date
  isCompleted: boolean;
}

export interface StudentProgress {
  totalXP: number;
  streak: number;
  lastStudyDate?: string;
  lessons: Record<number, LessonProgress>;
  favoriteVocab: string[];
  flashcardStatus: Record<string, 'new' | 'learning' | 'learned'>;
  notes: StudentNote[];
}

// ─── Notes ───────────────────────────────────────────────────────────────────

export interface StudentNote {
  id: string;
  lessonId?: number;
  section?: LessonSection;
  content: string;
  createdAt: string;
  updatedAt: string;
}

// ─── Settings ────────────────────────────────────────────────────────────────

export interface AppSettings {
  theme: 'light' | 'dark' | 'system';
  language: 'fa' | 'it' | 'en';
  fontSize: 'sm' | 'md' | 'lg';
  showTranslations: boolean;
  autoPlayAudio: boolean;
  studyReminder: boolean;
}
