'use client';
import { useEffect, RefObject } from 'react';
import { gsap } from '@/lib/gsap';

export function useTiltSpotlight(ref: RefObject<HTMLElement>, tilt = true) {
  useEffect(() => {
    const card = ref.current;
    if (!card) return;
    const touch = window.matchMedia('(pointer: coarse)').matches;

    const move = (e: MouseEvent) => {
      const r = card.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width;
      const py = (e.clientY - r.top) / r.height;
      card.style.setProperty('--mx', `${px * 100}%`);
      card.style.setProperty('--my', `${py * 100}%`);
      if (tilt && !touch) {
        gsap.to(card, {
          rotateY: (px - 0.5) * 10, rotateX: (0.5 - py) * 10,
          duration: 0.4, ease: 'power2.out', transformPerspective: 1200,
        });
      }
    };
    const leave = () => { if (tilt) gsap.to(card, { rotateY: 0, rotateX: 0, duration: 0.6, ease: 'power3.out' }); };

    card.addEventListener('mousemove', move);
    card.addEventListener('mouseleave', leave);
    return () => {
      card.removeEventListener('mousemove', move);
      card.removeEventListener('mouseleave', leave);
    };
  }, [ref, tilt]);
}
