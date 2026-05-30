'use client';
import { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from '@/lib/gsap';
import { GALLERIES } from '@/lib/data';
import Reveal from '@/components/ui/Reveal';

export default function FeaturedWork() {
  const pin = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.innerWidth <= 900) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const pinEl = pin.current, trackEl = track.current;
    if (!pinEl || !trackEl) return;

    const ctx = gsap.context(() => {
      const dist = () =>
        trackEl.scrollWidth - window.innerWidth + parseFloat(getComputedStyle(trackEl).paddingLeft);
      gsap.to(trackEl, {
        x: () => -dist(),
        ease: 'none',
        scrollTrigger: {
          trigger: pinEl,
          start: 'top top',
          end: () => '+=' + dist(),
          scrub: 1,
          pin: true,
          invalidateOnRefresh: true,
        },
      });
    });
    ScrollTrigger.refresh();
    return () => ctx.revert();
  }, []);

  return (
    <section className="works-wrap" id="works">
      <div className="works-intro">
        <span className="eyebrow">Selected Photography</span>
        <Reveal as="h2">FEATURED WORK</Reveal>
        <Reveal as="p">A collection of stories, moments, and perspectives captured through my lens.</Reveal>
      </div>
      <div className="h-track-pin" ref={pin}>
        <div className="h-track" ref={track}>
          {GALLERIES.map((g) => (
            <a
              key={g.i} href={g.u} target="_blank" rel="noopener noreferrer"
              className="gcard" data-cursor="view"
              style={{ ['--accent' as string]: g.a }}
            >
              <div
                className="bgimg"
                style={{ background: `radial-gradient(120% 90% at 70% 10%, ${g.a}33, transparent 55%), linear-gradient(160deg, ${g.a}1f, #08070500)` }}
              />
              <span className="gbr tl" /><span className="gbr tr" />
              <span className="gbr bl" /><span className="gbr br2" />
              <div className="gnum">{g.i}</div>
              <div>
                <div className="gcat">{g.c}</div>
                <h3>{g.t}</h3>
                <p>{g.d}</p>
                <span className="gbtn">{g.b}</span>
              </div>
            </a>
          ))}
          <div className="gcard end" style={{ ['--accent' as string]: '#F37512' }}>
            <span className="gbr tl" /><span className="gbr br2" />
            <div className="gnum" style={{ opacity: 0.4 }}>✦</div>
            <div>
              <h3>More Stories Ahead</h3>
              <p style={{ marginLeft: 'auto', marginRight: 'auto' }}>
                New adventures, new perspectives, and countless moments waiting to be captured.
              </p>
              <span className="gbtn" style={{ justifyContent: 'center', marginTop: 18 }}>Explore More →</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
