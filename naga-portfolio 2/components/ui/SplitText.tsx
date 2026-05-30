'use client';
import { useEffect, useRef } from 'react';
import { gsap } from '@/lib/gsap';

type Line = { text: string; variant?: 'bold' | 'italic' };

export default function SplitText({ lines, className = '' }: { lines: Line[]; className?: string }) {
  const root = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const chars = root.current?.querySelectorAll('.char');
    if (!chars) return;
    if (reduced) { gsap.set(chars, { yPercent: 0 }); return; }
    gsap.set(chars, { yPercent: 115 });
    gsap.to(chars, { yPercent: 0, duration: 1, ease: 'power4.out', stagger: 0.022, delay: 0.7 });
  }, []);

  return (
    <h1 ref={root} className={className}>
      {lines.map((line, li) => {
        const Tag = line.variant === 'italic' ? 'em' : line.variant === 'bold' ? 'b' : 'span';
        return (
          <span className="line-mask" key={li}>
            <Tag>
              {[...line.text].map((ch, ci) => (
                <span className="char" key={ci}>{ch === ' ' ? '\u00A0' : ch}</span>
              ))}
            </Tag>
          </span>
        );
      })}
    </h1>
  );
}
