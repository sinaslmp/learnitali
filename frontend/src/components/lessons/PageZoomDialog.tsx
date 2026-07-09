'use client';

import { useEffect, useRef, useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { Minus, Plus, X } from 'lucide-react';

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

interface PageZoomDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  pdfUrl: string;
  page: number;
}

const MIN_ZOOM = 1;
const MAX_ZOOM = 3;

export function PageZoomDialog({ open, onOpenChange, pdfUrl, page }: PageZoomDialogProps) {
  const [dataUrl, setDataUrl] = useState<string | null>(null);
  const [zoom, setZoom] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    setZoom(1);
    setDataUrl(null);
    renderPageToDataUrl(pdfUrl, page, 3.5).then(setDataUrl).catch(() => setDataUrl(null));
  }, [open, pdfUrl, page]);

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/80 z-50" />
        <Dialog.Content
          className="fixed inset-0 z-50 flex flex-col outline-none"
          aria-describedby={undefined}
        >
          <Dialog.Title className="sr-only">نمایش بزرگ‌شده‌ی صفحه {page}</Dialog.Title>
          <div className="flex items-center justify-between p-3 bg-black/60 text-white shrink-0" dir="rtl">
            <span className="text-sm">صفحه {page}</span>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setZoom((z) => Math.max(MIN_ZOOM, +(z - 0.5).toFixed(1)))}
                disabled={zoom <= MIN_ZOOM}
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 disabled:opacity-40 transition-colors"
                aria-label="کوچک‌نمایی"
              >
                <Minus size={16} />
              </button>
              <span className="text-xs w-10 text-center">{Math.round(zoom * 100)}%</span>
              <button
                type="button"
                onClick={() => setZoom((z) => Math.min(MAX_ZOOM, +(z + 0.5).toFixed(1)))}
                disabled={zoom >= MAX_ZOOM}
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 disabled:opacity-40 transition-colors"
                aria-label="بزرگ‌نمایی"
              >
                <Plus size={16} />
              </button>
              <Dialog.Close asChild>
                <button
                  type="button"
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                  aria-label="بستن"
                >
                  <X size={16} />
                </button>
              </Dialog.Close>
            </div>
          </div>
          <div ref={containerRef} className="flex-1 overflow-auto flex items-start justify-center p-4">
            {dataUrl ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={dataUrl}
                alt={`صفحه ${page} بزرگ‌شده`}
                style={{ width: `${zoom * 100}%`, maxWidth: 'none' }}
                className="transition-[width] duration-150"
              />
            ) : (
              <div className="text-white/70 text-sm mt-20">در حال بارگذاری...</div>
            )}
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
