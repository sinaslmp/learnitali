import { Lesson } from '@/types';
import { lessonsEspresso1 } from './lessons-espresso-1';
import { lessonsEspresso2 } from './lessons-espresso-2';
import { lessonsEspresso3 } from './lessons-espresso-3';
import { lessonsEspresso4 } from './lessons-espresso-4';

export const allLessons: Lesson[] = [
  ...lessonsEspresso1,
  ...lessonsEspresso2,
  ...lessonsEspresso3,
  ...lessonsEspresso4,
];

// backward-compat alias
export const lessons = allLessons;

export const getLessonById = (id: number): Lesson | undefined =>
  allLessons.find((l) => l.id === id);

export const getLessonBySlug = (slug: string): Lesson | undefined =>
  allLessons.find((l) => l.slug === slug);

export const getLessonsByBook = (bookSlug: string): Lesson[] =>
  allLessons.filter((l) => l.bookSlug === bookSlug);

export const getAdjacentLessons = (id: number): { prev?: Lesson; next?: Lesson } => {
  const idx = allLessons.findIndex((l) => l.id === id);
  return {
    prev: idx > 0 ? allLessons[idx - 1] : undefined,
    next: idx < allLessons.length - 1 ? allLessons[idx + 1] : undefined,
  };
};
