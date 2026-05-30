'use client';
import { useEffect, useState } from 'react';
import { NAV_LINKS } from '@/lib/data';
import MagneticButton from './ui/MagneticButton';

export default function Navigation() {
  const [compact, setCompact] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setCompact((window.__lenis?.scroll ?? window.scrollY) > 80);
    const lenis = window.__lenis;
    if (lenis) lenis.on('scroll', onScroll);
    else window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => {
      if (lenis) lenis.off('scroll', onScroll);
      else window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <>
      <nav className={`nav${compact ? ' compact' : ''}`}>
        <div className="nav-inner">
          <a href="#home" className="nav-logo" data-cursor="hover">
            <span className="mk">N<i>R</i></span>
            <span className="meta"><b>M. Naga Ravindher Reddy</b>Photography Portfolio</span>
          </a>
          <div className="nav-links">
            {NAV_LINKS.map((l) => (
              <a key={l.href} href={l.href} data-cursor="hover">
                <span className="n">{l.n}</span>{l.label}
              </a>
            ))}
          </div>
          <MagneticButton href="#works" className="nav-cta" data-cursor="hover">
            View My Work →
          </MagneticButton>
          <div className="nav-burger" data-cursor="hover" onClick={() => setOpen((o) => !o)}>
            <span /><span /><span />
          </div>
        </div>
      </nav>
      <div className={`mobile-menu${open ? ' open' : ''}`}>
        {NAV_LINKS.map((l) => (
          <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
            <span>{l.n}</span>{l.label}
          </a>
        ))}
      </div>
    </>
  );
}
