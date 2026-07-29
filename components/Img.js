'use client';
import { px, fallback } from '@/lib/services';

// Local files under public/ need the basePath prepended by hand — a plain <img>
// gets none of next/image's rewriting, so a subpath deploy would 404 them.
// Empty for the ohuddental.com root deploy (see next.config.mjs).
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || '';

/**
 * <img> with a branded fallback + the ".rdy" load animation used by the CSS.
 *
 * `id` accepts either:
 *   - a Pexels photo id (number) -> resolved through px()
 *   - a path into public/ starting with "/" (e.g. '/team/syed-muhammad-ali.jpg')
 *     -> served as-is, for real photos of real people
 */
export default function Img({ id, w, h, alt = '', className = '', domId }) {
  const isLocal = typeof id === 'string' && id.startsWith('/');
  const src = isLocal ? `${BASE_PATH}${id}` : px(id, w, h);

  return (
    <img
      id={domId}
      src={src}
      width={w}
      height={h}
      alt={alt}
      loading="lazy"
      className={className}
      onLoad={(e) => e.currentTarget.classList.add('rdy')}
      onError={(e) => {
        e.currentTarget.onerror = null;
        e.currentTarget.src = fallback(w, h);
      }}
    />
  );
}
