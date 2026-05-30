'use client';
import { useEffect } from 'react';
import { gsap } from '@/lib/gsap';
import SplitText from '@/components/ui/SplitText';
import MagneticButton from '@/components/ui/MagneticButton';
import Counter from '@/components/ui/Counter';

export default function Hero() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.75 });
      tl.from('.hero-left .eyebrow', { y: 20, opacity: 0, duration: 0.7 }, 0.2)
        .from('.hero-sub', { y: 24, opacity: 0, duration: 0.8 }, '-=.5')
        .from('.hero-ctas .btn', { y: 24, opacity: 0, duration: 0.7, stagger: 0.1 }, '-=.6')
        .from('.hero-stats .stat', { y: 24, opacity: 0, duration: 0.6, stagger: 0.08 }, '-=.5')
        .from('.hero-visual', { scale: 0.94, opacity: 0, duration: 1.1, ease: 'power3.out' }, '-=1.1')
        .from('.hero-strip span', { opacity: 0, y: -8, stagger: 0.08, duration: 0.5 }, '-=.8')
        .from('.avail', { opacity: 0, duration: 0.6 }, '-=.4');
    });
    return () => ctx.revert();
  }, []);

  return (
    <header className="hero" id="home">
      <div className="hero-strip">
        <span>M. Naga Ravindher Reddy · Photography Portfolio</span>
        <span>Visual Storytelling Index</span>
        <span>Capture · Create · Inspire</span>
      </div>
      <div className="hero-grid">
        <div className="hero-left">
          <span className="eyebrow">Photographer &amp; Visual Storyteller</span>
          <SplitText
            className="hero-title"
            lines={[
              { text: 'Capturing', variant: 'bold' },
              { text: 'Stories', variant: 'italic' },
              { text: 'Through Every', variant: 'bold' },
              { text: 'Frame.', variant: 'bold' },
            ]}
          />
          <p className="hero-sub">
            Passionate photographer and visual storyteller specializing in portraits, events, candid
            moments, and cinematic imagery. Currently pursuing B.Tech at MLR Institute of Technology and
            serving as a Photography &amp; Creative Team Member at SCOPE Club — transforming everyday
            moments into compelling visual narratives.
          </p>
          <div className="hero-ctas">
            <MagneticButton href="#works" className="btn btn-primary" data-cursor="hover">
              <span className="lbl">View My Work →</span>
            </MagneticButton>
            <MagneticButton href="#contact" className="btn btn-ghost" data-cursor="hover">
              <span className="lbl">Let&apos;s Collaborate</span>
            </MagneticButton>
          </div>
          <div className="hero-stats">
            <div className="stat"><div className="num"><Counter target={500} suffix="+" /></div><div className="lab">Images Captured</div></div>
            <div className="stat"><div className="num"><Counter target={10} suffix="+" /></div><div className="lab">Creative Shoots</div></div>
            <div className="stat"><div className="num"><i>05</i></div><div className="lab">Events Covered</div></div>
            <div className="stat"><div className="num"><i>01</i></div><div className="lab">Year at SCOPE Club</div></div>
          </div>
        </div>
        <div className="hero-visual" data-cursor="hover">
          <div className="glow" />
          <video autoPlay muted loop playsInline poster="/hero-poster.jpg">
            <source src="/hero-photographer.mp4" type="video/mp4" />
          </video>
          <span className="bracket tl" /><span className="bracket tr" />
          <span className="bracket bl" /><span className="bracket br" />
          <span className="tag">{'// editing_studio · live'}</span>
        </div>
      </div>
      <div className="avail"><span className="dot-pulse" /> Available for Collaborations</div>
    </header>
  );
}
