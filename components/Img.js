'use client';
import { px, fallback } from '@/lib/services';

// <img> with a branded fallback + the ".rdy" load animation used by the CSS.
export default function Img({ id, w, h, alt = '', className = '', domId }) {
  return (
    <img
      id={domId}
      src={px(id, w, h)}
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
