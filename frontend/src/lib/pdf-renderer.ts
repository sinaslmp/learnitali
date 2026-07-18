import { applyPdfjsPolyfills } from './pdfjs-native-polyfills';

type PDFDocumentProxy = import('pdfjs-dist').PDFDocumentProxy;

const documentCache = new Map<string, Promise<PDFDocumentProxy>>();

export async function loadPdfDocument(pdfUrl: string): Promise<PDFDocumentProxy> {
  let cached = documentCache.get(pdfUrl);
  if (!cached) {
    cached = (async () => {
      // pdf.js can fall back to running "worker" code on the main thread,
      // so the polyfill is needed here too, not just inside the worker below.
      applyPdfjsPolyfills();
      const pdfjsLib = await import('pdfjs-dist');
      // The bundler resolves this to a root-relative path (e.g. "/_next/static/...")
      // rather than a fully-qualified URL. That's fine for assigning to
      // `workerSrc` directly (browsers resolve it against the document), but a
      // dynamic `import()` from inside a Blob's own module scope can't resolve
      // a root-relative specifier the same way, so re-anchor it to a real origin.
      const workerUrl = new URL(
        new URL('pdfjs-dist/build/pdf.worker.min.mjs', import.meta.url).toString(),
        window.location.href
      ).toString();

      // The dedicated worker has its own isolated JS realm, so the polyfill
      // above doesn't reach it. Build a tiny wrapper module in a Blob that
      // runs the polyfill first, then imports the real worker — a bundler
      // can't compile a local worker entry point with an npm-package import
      // inside it, so this composes the two at runtime instead.
      const shimSource = `(${applyPdfjsPolyfills.toString()})();\nawait import(${JSON.stringify(workerUrl)});`;
      const shimBlob = new Blob([shimSource], { type: 'text/javascript' });
      pdfjsLib.GlobalWorkerOptions.workerSrc = URL.createObjectURL(shimBlob);

      return pdfjsLib.getDocument(pdfUrl).promise;
    })();
    documentCache.set(pdfUrl, cached);
  }
  return cached;
}

export interface RenderedPage {
  dataUrl: string;
  width: number;
  height: number;
}

export async function renderPdfPage(pdfUrl: string, page: number, scale: number): Promise<RenderedPage> {
  const doc = await loadPdfDocument(pdfUrl);
  const pdfPage = await doc.getPage(page);
  const viewport = pdfPage.getViewport({ scale });
  const canvas = document.createElement('canvas');
  canvas.width = viewport.width;
  canvas.height = viewport.height;
  const context = canvas.getContext('2d');
  if (!context) throw new Error('canvas 2d context unavailable');
  await pdfPage.render({ canvas, canvasContext: context, viewport }).promise;
  return { dataUrl: canvas.toDataURL('image/png'), width: viewport.width, height: viewport.height };
}
