const BOOKS_BASE_URL = process.env.NEXT_PUBLIC_BOOKS_BASE_URL;

/**
 * Book PDFs/audio live under `/books/...` in public/ during local dev, but that
 * folder is gitignored (too large to commit) and isn't deployed. In production,
 * set NEXT_PUBLIC_BOOKS_BASE_URL to the bucket/CDN root that hosts the same
 * `/books/...` layout, and this resolves asset paths there instead.
 */
export function resolveBookAsset(path?: string): string | undefined {
  if (!path) return path;
  if (/^https?:\/\//.test(path)) return path;
  if (!BOOKS_BASE_URL) return path;
  return `${BOOKS_BASE_URL.replace(/\/$/, '')}${path}`;
}
