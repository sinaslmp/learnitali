'use client';

import { use, useEffect } from 'react';
import { notFound, useRouter } from 'next/navigation';
import { AppShell } from '@/components/layout/AppShell';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { PdfPageImage } from '@/components/lessons/PdfPageImage';
import { RichText } from '@/components/lessons/RichText';
import { getLessonById, getAdjacentLessons } from '@/data/lessons';
import { getPageContent } from '@/data/pages';
import { resolveBookAsset } from '@/lib/assets';
import { ChevronRight, ChevronLeft, BookOpen, Sparkles, Lightbulb, Languages } from 'lucide-react';

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

  useEffect(() => {
    document.querySelector('main')?.scrollTo({ top: 0, behavior: 'instant' });
  }, [lesson.id, page]);

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
        <PdfPageImage pdfUrl={resolveBookAsset(lesson.pdfUrl)!} page={page} />

        {/* Explanation */}
        {content ? (
          <div className="space-y-4 text-right">
            {/* Main explanation card */}
            <div className="bg-card border border-border rounded-2xl overflow-hidden">
              <div className="flex items-center gap-3 px-5 py-4 bg-gradient-to-l from-indigo-500/10 to-transparent border-b border-border">
                <span className="w-9 h-9 rounded-xl bg-indigo-500/15 flex items-center justify-center shrink-0 text-lg">
                  {content.titleEmoji ?? <Sparkles size={16} className="text-indigo-600 dark:text-indigo-400" />}
                </span>
                <div>
                  <p className="text-xs text-muted-foreground">توضیح این صفحه</p>
                  {content.titleFa && <h2 className="font-bold leading-snug">{content.titleFa}</h2>}
                </div>
              </div>
              <div className="px-5 py-5 space-y-4">
                {content.explanationFa.map((para, i) => (
                  <p key={i} className="text-sm leading-8 border-r-2 border-indigo-500/30 pr-4">
                    <RichText text={para} />
                  </p>
                ))}
              </div>
            </div>

            {/* Italian summary */}
            {content.explanation && (
              <div className="bg-blue-500/5 border border-blue-500/20 rounded-2xl p-4 flex items-start gap-3">
                <Languages size={16} className="text-blue-500 mt-0.5 shrink-0" />
                <p className="text-sm text-muted-foreground italic leading-7" dir="ltr">
                  {content.explanation}
                </p>
              </div>
            )}

            {/* Key points */}
            {content.keyPoints && content.keyPoints.length > 0 && (
              <div className="bg-amber-500/5 border border-amber-500/20 rounded-2xl p-5">
                <h3 className="flex items-center gap-2 text-sm font-semibold text-amber-600 dark:text-amber-400 mb-3">
                  <Lightbulb size={15} />
                  نکات کلیدی
                </h3>
                <ul className="space-y-2">
                  {content.keyPoints.map((kp, i) => (
                    <li key={i} className="text-sm flex items-start gap-2.5">
                      <span className="w-5 h-5 rounded-full bg-amber-500/15 text-amber-600 dark:text-amber-400 flex items-center justify-center text-[11px] font-bold shrink-0 mt-0.5">
                        {i + 1}
                      </span>
                      <span className="text-muted-foreground leading-6">
                        <RichText text={kp} />
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ) : (
          <div className="bg-card border border-dashed border-border rounded-2xl p-8 text-center">
            <p className="text-sm text-muted-foreground">توضیح این صفحه به‌زودی اضافه می‌شود.</p>
          </div>
        )}

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
