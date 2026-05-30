'use client';
import { useEffect, useRef } from 'react';

export default function ScrollProgress() {
  const bar = useRef<HTMLElement>(null);
  useEffect(() => {
    const update = () => {
      const h = document.documentElement;
      const scrolled = h.scrollTop / (h.scrollHeight - h.clientHeight || 1);
      if (bar.current) bar.current.style.height = `${scrolled * 100}%`;
    };
    const lenis = window.__lenis;
    if (lenis) lenis.on('scroll', update);
    else window.addEventListener('scroll', update, { passive: true });
    update();
    return () => {
      if (lenis) lenis.off('scroll', update);
      else window.removeEventListener('scroll', update);
    };
  }, []);
  return <div className="scroll-prog"><i ref={bar} /></div>;
}
