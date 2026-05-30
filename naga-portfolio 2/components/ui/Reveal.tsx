'use client';
import { useEffect, useRef } from 'react';
import { gsap } from '@/lib/gsap';

export default function Reveal({
  children, className = '', y = 40, as = 'div',
}: { children: React.ReactNode; className?: string; y?: number; as?: 'div' | 'h2' | 'p' }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const ctx = gsap.context(() => {
      gsap.from(el, {
        y, opacity: 0, duration: 1, ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 88%' },
      });
    });
    return () => ctx.revert();
  }, [y]);
  const Tag = as as React.ElementType;
  return <Tag ref={ref} className={className}>{children}</Tag>;
}
