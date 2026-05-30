'use client';
import { useEffect, useRef } from 'react';
import { gsap } from '@/lib/gsap';

export default function Footer() {
  const wordmark = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const el = wordmark.current;
    if (!el) return;
    const ctx = gsap.context(() => {
      gsap.fromTo(el,
        { scale: 0.86, y: 40 },
        { scale: 1.04, y: -20, ease: 'none', scrollTrigger: { trigger: '.wordmark', start: 'top bottom', end: 'bottom top', scrub: 1 } }
      );
    });
    return () => ctx.revert();
  }, []);

  const marqueeContent = (
    <>
      <span>Open for Collaborations</span>· Capturing Stories Through Every Frame ·
      <span>Portraits</span>· Events ·<span>Visual Storytelling</span>· Creative Photography ·
      <span>Cinematic Visuals</span>·{' '}
    </>
  );

  return (
    <footer className="footer">
      <div className="marquee">
        <div className="track">{marqueeContent}{marqueeContent}</div>
      </div>
      <div className="wordmark"><h2 ref={wordmark}>Naga Ravindher</h2></div>
      <div className="footer-bar">
        <div>© 2026 M. Naga Ravindher Reddy · All Rights Reserved</div>
        <div className="st"><span className="dot-pulse" />Crafted Through Creativity</div>
        <a href="#home" className="top" data-cursor="hover">Back To Top ↑</a>
      </div>
    </footer>
  );
}
