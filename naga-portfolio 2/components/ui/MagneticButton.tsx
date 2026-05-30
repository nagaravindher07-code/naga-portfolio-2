'use client';
import { useRef } from 'react';
import { gsap } from '@/lib/gsap';

type Props = {
  href?: string;
  className?: string;
  children: React.ReactNode;
  target?: string;
  rel?: string;
  ['data-cursor']?: string;
};

export default function MagneticButton({ href = '#', className = '', children, ...rest }: Props) {
  const ref = useRef<HTMLAnchorElement>(null);

  const onMove = (e: React.MouseEvent) => {
    if (window.matchMedia('(pointer: coarse)').matches) return;
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = e.clientX - r.left - r.width / 2;
    const y = e.clientY - r.top - r.height / 2;
    gsap.to(el, { x: x * 0.3, y: y * 0.4, duration: 0.5, ease: 'power3.out' });
  };
  const onLeave = () => {
    if (ref.current) gsap.to(ref.current, { x: 0, y: 0, duration: 0.6, ease: 'elastic.out(1,.4)' });
  };

  return (
    <a ref={ref} href={href} className={className} onMouseMove={onMove} onMouseLeave={onLeave} {...rest}>
      {children}
    </a>
  );
}
