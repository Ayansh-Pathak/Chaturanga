/**
 * Returns the API base URL.
 *
 * - On GitHub Pages (no Express server), all /api/* calls are silently dropped
 *   and the callers already have fallback logic, so we return an empty string
 *   and let fetch() throw so the catch clause provides grandmaster advice.
 * - In dev / Vercel / Railway (Express backend running), relative paths work.
 */
export const IS_STATIC_HOST =
  typeof window !== 'undefined' &&
  (window.location.hostname.endsWith('github.io') ||
    window.location.hostname.endsWith('netlify.app') ||
    window.location.hostname.endsWith('pages.dev'));

/**
 * Build an API URL.
 * On static hosts returns null so callers can skip the fetch.
 */
export function apiUrl(path: string): string | null {
  if (IS_STATIC_HOST) return null;
  return path;
}

/**
 * Get the correct asset URL based on host.
 */
export function getAssetUrl(path: string): string {
  if (typeof window === 'undefined') return path;

  // On Android, use the appassets.androidplatform.net domain
  if (window.location.hostname === 'appassets.androidplatform.net') {
    return `https://appassets.androidplatform.net${path.startsWith('/') ? '' : '/'}${path}`;
  }

  return path.startsWith('/') ? path : `/${path}`;
}
