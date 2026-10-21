'use client';
import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

// The pixel's own snippet in app/layout.js fires PageView once per full page
// load. Next.js then navigates client-side without reloading, so this re-fires
// PageView on every route change (skipping the first render, already counted).
export default function MetaPixel() {
  const pathname = usePathname();
  const first = useRef(true);

  useEffect(() => {
    if (first.current) { first.current = false; return; }
    if (typeof window.fbq === 'function') window.fbq('track', 'PageView');
  }, [pathname]);

  return null;
}
