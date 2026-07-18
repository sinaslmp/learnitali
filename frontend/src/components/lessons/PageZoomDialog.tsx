'use client';

import { useEffect, useRef, useState } from 'react';
import * as Dialog from '@radix-ui/react-dialog';
import { Loader2, Maximize2, Minus, Plus, RotateCcw, X } from 'lucide-react';
import { renderPdfPage } from '@/lib/pdf-renderer';
import { cn } from '@/lib/utils';

interface PageZoomDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  pdfUrl: string;
  page: number;
  children: React.ReactNode;
}

interface Size {
  width: number;
  height: number;
}

interface ViewState {
  zoom: number;
  x: number;
  y: number;
}

// The dialog renders once at a high raster scale and only ever moves it with
// CSS transforms afterwards — this keeps zooming instant and avoids paying
// for another pdf.js render pass per zoom level.
const RENDER_SCALE = 4;
const MIN_ZOOM = 0.05;
const MAX_ZOOM = 4;
const ZOOM_STEP = 0.25;
const PAN_STEP = 80;
const WHEEL_ZOOM_SENSITIVITY = 0.0015;

const INITIAL_VIEW: ViewState = { zoom: 1, x: 0, y: 0 };

function distance(a: { x: number; y: number }, b: { x: number; y: number }) {
  return Math.hypot(a.x - b.x, a.y - b.y);
}

function midpoint(a: { x: number; y: number }, b: { x: number; y: number }) {
  return { x: (a.x + b.x) / 2, y: (a.y + b.y) / 2 };
}

function clampView(view: ViewState, natural: Size | null, container: HTMLElement | null): ViewState {
  const zoom = Math.min(MAX_ZOOM, Math.max(MIN_ZOOM, view.zoom));
  if (!natural || !container) return { zoom, x: 0, y: 0 };
  const rect = container.getBoundingClientRect();
  const scaledWidth = natural.width * zoom;
  const scaledHeight = natural.height * zoom;
  const maxX = Math.max(0, (scaledWidth - rect.width) / 2);
  const minY = Math.min(0, rect.height - scaledHeight);
  const x = Math.min(maxX, Math.max(-maxX, view.x));
  const y = Math.min(0, Math.max(minY, view.y));
  return { zoom, x, y };
}

function fitZoomFor(mode: 'contain' | 'width', natural: Size, rect: DOMRect): number {
  if (mode === 'width') return rect.width / natural.width;
  return Math.min(rect.width / natural.width, rect.height / natural.height, 1);
}

// "100%" is pinned to the raster's native pixel size (RENDER_SCALE), not to
// the viewport — so content can already overflow well below zoom=1 (a large
// page rendered at 4x easily exceeds the dialog width at, say, 60% zoom).
// Gate panning on actual overflow instead of a hardcoded zoom threshold.
function canPan(zoom: number, natural: Size | null, container: HTMLElement | null): boolean {
  if (!natural || !container) return false;
  const rect = container.getBoundingClientRect();
  return natural.width * zoom > rect.width + 0.5 || natural.height * zoom > rect.height + 0.5;
}

export function PageZoomDialog({ open, onOpenChange, pdfUrl, page, children }: PageZoomDialogProps) {
  const [dataUrl, setDataUrl] = useState<string | null>(null);
  const [error, setError] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);
  const [naturalSize, setNaturalSize] = useState<Size | null>(null);
  const [viewportSize, setViewportSize] = useState<Size | null>(null);
  const [view, setView] = useState<ViewState>(INITIAL_VIEW);
  const [gesturing, setGesturing] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  const viewRef = useRef(view);
  const pointersRef = useRef(new Map<number, { x: number; y: number }>());
  const lastSingleRef = useRef<{ x: number; y: number } | null>(null);
  const lastPinchRef = useRef<{ dist: number; mid: { x: number; y: number } } | null>(null);
  const wheelIdleTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    viewRef.current = view;
  }, [view]);

  // Render the high-res page once per open (or page/doc change). Panning and
  // zooming afterwards are pure CSS transforms on this same image.
  useEffect(() => {
    if (!open) return;
    let cancelled = false;
    setDataUrl(null);
    setError(false);
    setImgLoaded(false);
    setNaturalSize(null);
    setView(INITIAL_VIEW);
    renderPdfPage(pdfUrl, page, RENDER_SCALE)
      .then(({ dataUrl: url }) => {
        if (!cancelled) setDataUrl(url);
      })
      .catch((err) => {
        console.error('Failed to render PDF page', { pdfUrl, page, err });
        if (!cancelled) setError(true);
      });
    return () => {
      cancelled = true;
    };
  }, [open, pdfUrl, page]);

  // Ctrl+wheel zooms, plain wheel pans once zoomed — both need preventDefault,
  // which React's synthetic onWheel can't guarantee (it's registered passive).
  useEffect(() => {
    const el = containerRef.current;
    if (!el || !open) return;

    const handleWheel = (e: WheelEvent) => {
      if (e.ctrlKey || e.metaKey) {
        e.preventDefault();
        const factor = 1 - e.deltaY * WHEEL_ZOOM_SENSITIVITY;
        setGesturing(true);
        setView((prev) => clampView({ ...prev, zoom: prev.zoom * factor }, naturalSize, containerRef.current));
      } else if (canPan(viewRef.current.zoom, naturalSize, containerRef.current)) {
        e.preventDefault();
        setGesturing(true);
        setView((prev) =>
          clampView({ ...prev, x: prev.x - e.deltaX, y: prev.y - e.deltaY }, naturalSize, containerRef.current)
        );
      } else {
        return;
      }
      if (wheelIdleTimerRef.current) clearTimeout(wheelIdleTimerRef.current);
      wheelIdleTimerRef.current = setTimeout(() => setGesturing(false), 150);
    };

    el.addEventListener('wheel', handleWheel, { passive: false });
    return () => el.removeEventListener('wheel', handleWheel);
  }, [open, naturalSize]);

  useEffect(() => {
    return () => {
      if (wheelIdleTimerRef.current) clearTimeout(wheelIdleTimerRef.current);
    };
  }, []);

  // Tracked as state (not read from the ref at render time) so the cursor
  // style below can derive "is panning possible" without touching a ref
  // during render.
  useEffect(() => {
    const el = containerRef.current;
    if (!el || !open) return;
    const update = () => setViewportSize({ width: el.clientWidth, height: el.clientHeight });
    update();
    const observer = new ResizeObserver(update);
    observer.observe(el);
    return () => observer.disconnect();
  }, [open]);

  const updateView = (updater: (v: ViewState) => ViewState) => {
    setView((prev) => clampView(updater(prev), naturalSize, containerRef.current));
  };

  const zoomBy = (delta: number) => updateView((v) => ({ ...v, zoom: v.zoom + delta }));

  const resetView = () => setView(clampView(INITIAL_VIEW, naturalSize, containerRef.current));

  const fitWidth = () => {
    const container = containerRef.current;
    if (!container || !naturalSize) return;
    const zoom = fitZoomFor('width', naturalSize, container.getBoundingClientRect());
    setView(clampView({ zoom, x: 0, y: 0 }, naturalSize, container));
  };

  const handleImageLoad = () => {
    setImgLoaded(true);
    const img = imageRef.current;
    const container = containerRef.current;
    if (!img || !container) return;
    const natural = { width: img.naturalWidth, height: img.naturalHeight };
    setNaturalSize(natural);
    const zoom = fitZoomFor('contain', natural, container.getBoundingClientRect());
    setView(clampView({ zoom, x: 0, y: 0 }, natural, container));
  };

  const handleDoubleClick = () => {
    updateView((v) => (v.zoom >= 2 ? { zoom: 1, x: 0, y: 0 } : { zoom: 2, x: 0, y: 0 }));
  };

  const handlePointerDown = (e: React.PointerEvent) => {
    // Some mobile browsers can throw here for a pointer that's already gone
    // stale by the time this handler runs; that shouldn't abort tracking it.
    try {
      (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    } catch {
      // ignore
    }
    pointersRef.current.set(e.pointerId, { x: e.clientX, y: e.clientY });
    setGesturing(true);
    if (pointersRef.current.size === 1) {
      lastSingleRef.current = { x: e.clientX, y: e.clientY };
    } else if (pointersRef.current.size === 2) {
      const [a, b] = Array.from(pointersRef.current.values());
      lastPinchRef.current = { dist: distance(a, b), mid: midpoint(a, b) };
      lastSingleRef.current = null;
    }
  };

  const handlePointerMove = (e: React.PointerEvent) => {
    if (!pointersRef.current.has(e.pointerId)) return;
    pointersRef.current.set(e.pointerId, { x: e.clientX, y: e.clientY });

    if (pointersRef.current.size >= 2) {
      const [a, b] = Array.from(pointersRef.current.values());
      const dist = distance(a, b);
      const mid = midpoint(a, b);
      if (lastPinchRef.current) {
        const zoomFactor = dist / lastPinchRef.current.dist;
        const dx = mid.x - lastPinchRef.current.mid.x;
        const dy = mid.y - lastPinchRef.current.mid.y;
        updateView((v) => ({ zoom: v.zoom * zoomFactor, x: v.x + dx, y: v.y + dy }));
      }
      lastPinchRef.current = { dist, mid };
    } else if (
      pointersRef.current.size === 1 &&
      lastSingleRef.current &&
      canPan(viewRef.current.zoom, naturalSize, containerRef.current)
    ) {
      const last = lastSingleRef.current;
      const dx = e.clientX - last.x;
      const dy = e.clientY - last.y;
      updateView((v) => ({ ...v, x: v.x + dx, y: v.y + dy }));
      lastSingleRef.current = { x: e.clientX, y: e.clientY };
    }
  };

  const endPointer = (e: React.PointerEvent) => {
    pointersRef.current.delete(e.pointerId);
    if (pointersRef.current.size < 2) lastPinchRef.current = null;
    if (pointersRef.current.size === 0) {
      lastSingleRef.current = null;
      setGesturing(false);
    } else if (pointersRef.current.size === 1) {
      lastSingleRef.current = Array.from(pointersRef.current.values())[0];
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    switch (e.key) {
      case '+':
      case '=':
        e.preventDefault();
        zoomBy(ZOOM_STEP);
        break;
      case '-':
      case '_':
        e.preventDefault();
        zoomBy(-ZOOM_STEP);
        break;
      case '0':
        e.preventDefault();
        resetView();
        break;
      case 'ArrowUp':
        if (canPan(view.zoom, naturalSize, containerRef.current)) {
          e.preventDefault();
          updateView((v) => ({ ...v, y: v.y + PAN_STEP }));
        }
        break;
      case 'ArrowDown':
        if (canPan(view.zoom, naturalSize, containerRef.current)) {
          e.preventDefault();
          updateView((v) => ({ ...v, y: v.y - PAN_STEP }));
        }
        break;
      case 'ArrowLeft':
        if (canPan(view.zoom, naturalSize, containerRef.current)) {
          e.preventDefault();
          updateView((v) => ({ ...v, x: v.x + PAN_STEP }));
        }
        break;
      case 'ArrowRight':
        if (canPan(view.zoom, naturalSize, containerRef.current)) {
          e.preventDefault();
          updateView((v) => ({ ...v, x: v.x - PAN_STEP }));
        }
        break;
      default:
        break;
    }
  };

  const zoomPct = Math.round(view.zoom * 100);
  const canZoomOut = view.zoom > MIN_ZOOM + 0.01;
  const canZoomIn = view.zoom < MAX_ZOOM - 0.01;

  return (
    <Dialog.Root open={open} onOpenChange={onOpenChange}>
      <Dialog.Trigger asChild>{children}</Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/80 z-50 data-[state=open]:animate-in data-[state=open]:fade-in data-[state=closed]:animate-out data-[state=closed]:fade-out" />
        <Dialog.Content
          className="fixed inset-0 z-50 flex flex-col outline-none"
          aria-describedby={undefined}
          onKeyDown={handleKeyDown}
        >
          <Dialog.Title className="sr-only">نمایش بزرگ‌شده‌ی صفحه {page}</Dialog.Title>
          <div className="flex items-center justify-between p-3 bg-black/60 text-white shrink-0" dir="rtl">
            <span className="text-sm">صفحه {page}</span>
            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => zoomBy(-ZOOM_STEP)}
                disabled={!canZoomOut}
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 disabled:opacity-40 transition-colors"
                aria-label="کوچک‌نمایی"
              >
                <Minus size={16} />
              </button>
              <span className="text-xs w-12 text-center tabular-nums">{zoomPct}%</span>
              <button
                type="button"
                onClick={() => zoomBy(ZOOM_STEP)}
                disabled={!canZoomIn}
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 disabled:opacity-40 transition-colors"
                aria-label="بزرگ‌نمایی"
              >
                <Plus size={16} />
              </button>
              <div className="w-px h-5 bg-white/20 mx-1" />
              <button
                type="button"
                onClick={resetView}
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                aria-label="بازنشانی بزرگ‌نمایی (۱۰۰٪)"
                title="بازنشانی (۱۰۰٪)"
              >
                <RotateCcw size={15} />
              </button>
              <button
                type="button"
                onClick={fitWidth}
                className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                aria-label="متناسب با عرض صفحه"
                title="متناسب با عرض"
              >
                <Maximize2 size={15} />
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

          <div
            ref={containerRef}
            className="relative flex-1 overflow-hidden select-none"
            style={{ touchAction: 'none' }}
            onDoubleClick={handleDoubleClick}
            onPointerDown={handlePointerDown}
            onPointerMove={handlePointerMove}
            onPointerUp={endPointer}
            onPointerCancel={endPointer}
          >
            {error ? (
              <div className="absolute inset-0 flex items-center justify-center text-sm text-white/70">
                بارگذاری تصویر صفحه ناموفق بود
              </div>
            ) : !dataUrl ? (
              <div className="absolute inset-0 flex items-center justify-center">
                <Loader2 className="animate-spin text-white/70" size={32} />
              </div>
            ) : (
              <>
                {!imgLoaded && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Loader2 className="animate-spin text-white/70" size={32} />
                  </div>
                )}
                <div className="absolute inset-0 flex items-start justify-center">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    ref={imageRef}
                    src={dataUrl}
                    alt={`صفحه ${page} بزرگ‌شده`}
                    draggable={false}
                    onLoad={handleImageLoad}
                    className={cn(
                      'max-w-none',
                      !gesturing && 'transition-transform duration-200 ease-out',
                      imgLoaded ? 'opacity-100' : 'opacity-0',
                      'transition-opacity',
                      naturalSize &&
                        viewportSize &&
                        (naturalSize.width * view.zoom > viewportSize.width + 0.5 ||
                          naturalSize.height * view.zoom > viewportSize.height + 0.5)
                        ? gesturing
                          ? 'cursor-grabbing'
                          : 'cursor-grab'
                        : 'cursor-zoom-in'
                    )}
                    style={{
                      transform: `translate3d(${view.x}px, ${view.y}px, 0) scale(${view.zoom})`,
                      transformOrigin: 'center top',
                      willChange: 'transform',
                    }}
                  />
                </div>
              </>
            )}
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
