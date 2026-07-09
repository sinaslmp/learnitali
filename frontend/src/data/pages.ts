import { BookPageContent, Lesson } from '@/types';
import { pagesEspresso1 } from './pages-espresso-1';
import { pagesEspresso2 } from './pages-espresso-2';
import { pagesEspresso3 } from './pages-espresso-3';
import { pagesEspresso4 } from './pages-espresso-4';

export const allPageContent: BookPageContent[] = [
  ...pagesEspresso1,
  ...pagesEspresso2,
  ...pagesEspresso3,
  ...pagesEspresso4,
];

export const getPageContent = (bookSlug: string, page: number): BookPageContent | undefined =>
  allPageContent.find((p) => p.bookSlug === bookSlug && p.page === page);

export const getPagesForLesson = (lesson: Lesson): BookPageContent[] =>
  allPageContent.filter(
    (p) => p.bookSlug === lesson.bookSlug && p.page >= lesson.startPage && p.page <= lesson.endPage
  );
