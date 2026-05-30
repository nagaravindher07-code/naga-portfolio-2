'use client';
import { useRef } from 'react';
import { DISCIPLINES } from '@/lib/data';
import { useTiltSpotlight } from '@/hooks/useTiltSpotlight';

function DCard({ d }: { d: typeof DISCIPLINES[number] }) {
  const ref = useRef<HTMLDivElement>(null);
  useTiltSpotlight(ref, true);
  return (
    <div className="dcard tilt" ref={ref}>
      <span className="spot" /><span className="sheen" />
      <span className="db tl" /><span className="db br" />
      <div className="didx">{`// ${d.i}`}</div>
      <h3>{d.t}</h3>
      <p>{d.d}</p>
      <div className="pills">{d.p.map((x) => <span className="pill" key={x}>{x}</span>)}</div>
    </div>
  );
}

function CtaCard() {
  const ref = useRef<HTMLAnchorElement>(null);
  useTiltSpotlight(ref as unknown as React.RefObject<HTMLElement>, true);
  return (
    <a className="dcard cta tilt" href="#contact" ref={ref} data-cursor="hover">
      <span className="spot" />
      <div className="didx">{'// 06'}</div>
      <h3>Let&apos;s Create Together</h3>
      <p>Have a unique idea, creative vision, or photography project in mind? Let&apos;s collaborate and transform your ideas into compelling visual stories.</p>
      <span className="gbtn">Contact Me →</span>
    </a>
  );
}

export default function Disciplines() {
  return (
    <section className="section" id="disciplines">
      <span className="eyebrow">What I Capture</span>
      <h2 className="sec-head" style={{ fontSize: 'clamp(40px,6vw,84px)', marginTop: 22 }}>
        Photography <em>Disciplines</em>
      </h2>
      <div className="disc-grid">
        {DISCIPLINES.map((d) => <DCard key={d.i} d={d} />)}
        <CtaCard />
      </div>
    </section>
  );
}
