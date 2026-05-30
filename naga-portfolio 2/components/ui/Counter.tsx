'use client';
import { useEffect, useRef, useState } from 'react';
import { gsap } from '@/lib/gsap';

export default function Counter({ target, suffix = '' }: { target: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const [val, setVal] = useState(0);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduced) { setVal(target); return; }
    const obj = { v: 0 };
    const st = gsap.context(() => {
      gsap.to(obj, {
        v: target, duration: 1.8, ease: 'power2.out',
        scrollTrigger: { trigger: el, start: 'top 90%', once: true },
        onUpdate: () => setVal(Math.floor(obj.v)),
      });
    });
    return () => st.revert();
  }, [target]);

  return <span ref={ref}>{val}{suffix}</span>;
}
