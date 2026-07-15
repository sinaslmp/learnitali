'use client';

import { useEffect, useState } from 'react';
import { ZoomIn } from 'lucide-react';
import { PageZoomDialog } from './PageZoomDialog';

type PDFDocumentProxy = import('pdfjs-dist').PDFDocumentProxy;

const documentCache = new Map<string, Promise<PDFDocumentProxy>>();

async function loadPdf(pdfUrl: string): Promise<PDFDocumentProxy> {
  let cached = documentCache.get(pdfUrl);
  if (!cached) {
    cached = (async () => {
      const pdfjsLib = await import('pdfjs-dist');
      pdfjsLib.GlobalWorkerOptions.workerSrc = new URL(
        'pdfjs-dist/build/pdf.worker.min.mjs',
        import.meta.url
      ).toString();
      return pdfjsLib.getDocument(pdfUrl).promise;
    })();
    documentCache.set(pdfUrl, cached);
  }
  return cached;
}

async function renderPageToDataUrl(pdfUrl: string, page: number, scale: number): Promise<string> {
  const doc = await loadPdf(pdfUrl);
  const pdfPage = await doc.getPage(page);
  const viewport = pdfPage.getViewport({ scale });
  const canvas = document.createElement('canvas');
  canvas.width = viewport.width;
  canvas.height = viewport.height;
  const context = canvas.getContext('2d');
  if (!context) throw new Error('canvas 2d context unavailable');
  await pdfPage.render({ canvas, canvasContext: context, viewport }).promise;
  return canvas.toDataURL('image/png');
}

interface PdfPageImageProps {
  pdfUrl: string;
  page: number;
}

export function PdfPageImage({ pdfUrl, page }: PdfPageImageProps) {
  const [dataUrl, setDataUrl] = useState<string | null>(null);
  const [error, setError] = useState(false);
  const [zoomOpen, setZoomOpen] = useState(false);

  useEffect(() => {
    let cancelled = false;
    setDataUrl(null);
    setError(false);
    renderPageToDataUrl(pdfUrl, page, 2)
      .then((url) => {
        if (!cancelled) setDataUrl(url);
      })
      .catch((err) => {
        console.error('Failed to render PDF page', { pdfUrl, page, err });
        if (!cancelled) setError(true);
      });
    return () => {
      cancelled = true;
    };
  }, [pdfUrl, page]);

  return (
    <>
      <div className="relative rounded-2xl border border-border bg-muted/30 overflow-hidden">
        {error ? (
          <div className="aspect-[3/4] flex items-center justify-center text-sm text-muted-foreground">
            بارگذاری تصویر صفحه ناموفق بود
          </div>
        ) : !dataUrl ? (
          <div className="aspect-[3/4] flex items-center justify-center text-sm text-muted-foreground animate-pulse">
            در حال بارگذاری صفحه {page}...
          </div>
        ) : (
          <button
            type="button"
            onClick={() => setZoomOpen(true)}
            className="block w-full group cursor-zoom-in"
            aria-label="بزرگ‌نمایی صفحه"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={dataUrl} alt={`صفحه ${page}`} className="w-full h-auto block" />
            <span className="absolute bottom-3 left-3 flex items-center gap-1.5 bg-black/60 text-white text-xs px-3 py-1.5 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
              <ZoomIn size={14} /> بزرگ‌نمایی
            </span>
          </button>
        )}
      </div>
      {dataUrl && (
        <PageZoomDialog open={zoomOpen} onOpenChange={setZoomOpen} pdfUrl={pdfUrl} page={page} />
      )}
    </>
  );
}
