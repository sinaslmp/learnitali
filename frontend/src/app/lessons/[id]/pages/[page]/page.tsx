'use client';

import { use } from 'react';
import { notFound, useRouter } from 'next/navigation';
import { AppShell } from '@/components/layout/AppShell';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { PdfPageImage } from '@/components/lessons/PdfPageImage';
import { getLessonById, getAdjacentLessons } from '@/data/lessons';
import { getPageContent } from '@/data/pages';
import { ChevronRight, ChevronLeft, BookOpen } from 'lucide-react';

interface PageParams {
  id: string;
  page: string;
}

export default function LessonPageViewer({ params }: { params: Promise<PageParams> }) {
  const { id, page: pageParam } = use(params);
  const router = useRouter();
  const lesson = getLessonById(Number(id));
  const page = Number(pageParam);
  if (!lesson || !lesson.pdfUrl || !Number.isFinite(page) || page < lesson.startPage || page > lesson.endPage) {
    notFound();
  }

  const { prev: prevLesson, next: nextLesson } = getAdjacentLessons(lesson.id);
  const content = getPageContent(lesson.bookSlug, page);

  const atFirstPage = page === lesson.startPage;
  const atLastPage = page === lesson.endPage;

  const goToPrev = () => {
    if (!atFirstPage) {
      router.push(`/lessons/${lesson.id}/pages/${page - 1}`);
    } else if (prevLesson) {
      router.push(`/lessons/${prevLesson.id}/pages/${prevLesson.endPage}`);
    }
  };

  const goToNext = () => {
    if (!atLastPage) {
      router.push(`/lessons/${lesson.id}/pages/${page + 1}`);
    } else if (nextLesson) {
      router.push(`/lessons/${nextLesson.id}/pages/${nextLesson.startPage}`);
    }
  };

  const canGoPrev = !atFirstPage || !!prevLesson;
  const canGoNext = !atLastPage || !!nextLesson;

  return (
    <AppShell title={lesson.titleFa}>
      <div className="max-w-3xl mx-auto space-y-6" dir="rtl">
        {/* Header */}
        <div className="flex items-center justify-between">
          <a
            href={`/lessons/${lesson.id}`}
            className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <BookOpen size={14} />
            بازگشت به درس
          </a>
          <div className="text-right">
            <h1 className="font-bold">{lesson.titleFa}</h1>
            <Badge variant="info" size="sm" className="mt-1">
              صفحه {page} از {lesson.startPage}-{lesson.endPage}
            </Badge>
          </div>
        </div>

        {/* Page image */}
        <PdfPageImage pdfUrl={lesson.pdfUrl} page={page} />

        {/* Explanation */}
        <div className="bg-card border border-border rounded-2xl p-6 text-right space-y-4">
          {content ? (
            <>
              {content.titleFa && <h2 className="text-lg font-bold">{content.titleFa}</h2>}
              <p className="text-sm leading-8 whitespace-pre-line">{content.explanationFa}</p>
              {content.explanation && (
                <p className="text-sm text-muted-foreground italic leading-7" dir="ltr">
                  {content.explanation}
                </p>
              )}
              {content.keyPoints && content.keyPoints.length > 0 && (
                <div>
                  <h3 className="text-sm font-semibold mb-2">نکات کلیدی</h3>
                  <ul className="space-y-1.5">
                    {content.keyPoints.map((kp, i) => (
                      <li key={i} className="text-sm text-muted-foreground flex items-start gap-2">
                        <span className="text-green-500 mt-0.5">•</span>
                        {kp}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </>
          ) : (
            <p className="text-sm text-muted-foreground text-center py-6">
              توضیح این صفحه به‌زودی اضافه می‌شود.
            </p>
          )}
        </div>

        {/* Prev / Next */}
        <div className="flex items-center justify-between gap-3">
          <Button variant="outline" onClick={goToPrev} disabled={!canGoPrev}>
            <ChevronRight size={16} />
            صفحه قبل
          </Button>
          <Button onClick={goToNext} disabled={!canGoNext}>
            صفحه بعد
            <ChevronLeft size={16} />
          </Button>
        </div>
      </div>
    </AppShell>
  );
}
