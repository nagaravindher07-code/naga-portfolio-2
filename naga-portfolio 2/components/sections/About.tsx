'use client';
import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { gsap } from '@/lib/gsap';
import { SKILLS } from '@/lib/data';
import Counter from '@/components/ui/Counter';
import profilePhoto from '@/public/profile.jpg';

const TOOLKIT: { h: string; items: string[] }[] = [
  { h: 'Photography', items: ['Portrait Photography', 'Event Coverage', 'Candid Photography', 'Visual Storytelling'] },
  { h: 'Creative Tools', items: ['DaVinci Resolve', 'Canva', 'Content Creation', 'Color Grading'] },
  { h: 'Creative Skills', items: ['Composition', 'Lighting', 'Framing', 'Storytelling'] },
  { h: 'Personal Strengths', items: ['Creativity', 'Attention to Detail', 'Communication', 'Team Collaboration'] },
];

export default function About() {
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      skillsRef.current?.querySelectorAll<HTMLElement>('.bar i').forEach((b) => {
        b.style.width = `${b.dataset.w}%`;
      });
      return;
    }
    const ctx = gsap.context(() => {
      skillsRef.current?.querySelectorAll<HTMLElement>('.bar i').forEach((b) => {
        gsap.to(b, {
          width: `${b.dataset.w}%`, duration: 1.3, ease: 'power3.out',
          scrollTrigger: { trigger: b, start: 'top 92%', once: true },
        });
      });
    }, skillsRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className="section" id="journey">
      <span className="eyebrow">The Person Behind the Lens</span>
      <div className="about-grid">
        <div className="profile-card" data-cursor="hover">
          <Image
            src={profilePhoto}
            alt="M. Naga Ravindher Reddy photographing on location"
            className="profile-photo"
            placeholder="blur"
            sizes="(max-width: 900px) 90vw, 38vw"
            priority={false}
          />
          <span className="photo-shade" />
          <span className="pb tl" /><span className="pb br" />
          <div className="pstrip"><span>Profile · 001</span><span className="av"><span className="dot-pulse" />Available</span></div>
          <div className="profile-mark">N<i>R</i></div>
          <div className="pcap">
            <b>Based in Hyderabad</b><br />Open to Collaborations<br />
            MLR Institute of Technology<br />Photography &amp; Creative Team · SCOPE Club
          </div>
        </div>
        <div className="about-bio">
          <h2>Capturing moments.<br /><em>Creating stories.</em></h2>
          <div className="bio">
            <p>I am a passionate photographer and visual storyteller currently pursuing my B.Tech in Computer Science Engineering at MLR Institute of Technology.</p>
            <p>Through my journey in photography and my experience as a Photography &amp; Creative Team Member at SCOPE Club, I have developed a strong passion for capturing authentic emotions, memorable moments, and compelling visual stories.</p>
            <p>My work focuses on portraits, event coverage, candid storytelling, and cinematic imagery. I believe photography is more than documenting moments — it&apos;s about preserving emotions, experiences, and memories that people can revisit for years to come.</p>
            <p>Whether covering college events, creative shoots, or everyday moments, I strive to create visuals that feel genuine, meaningful, and visually engaging.</p>
          </div>
          <div className="toolkit">
            {TOOLKIT.map((t) => (
              <div className="tk" key={t.h}>
                <h5>{t.h}</h5>
                <div className="pills">{t.items.map((x) => <span className="pill" key={x}>{x}</span>)}</div>
              </div>
            ))}
          </div>
          <div className="counters">
            <div className="c"><div className="num"><Counter target={500} suffix="+" /></div><div className="lab">Images Captured</div></div>
            <div className="c"><div className="num"><Counter target={10} suffix="+" /></div><div className="lab">Creative Shoots</div></div>
            <div className="c"><div className="num"><i>04</i></div><div className="lab">Events Covered</div></div>
            <div className="c"><div className="num"><i>01</i></div><div className="lab">Year at SCOPE</div></div>
          </div>
          <div className="skills" ref={skillsRef}>
            {SKILLS.map(([n, v]) => (
              <div className="skill" key={n}>
                <div className="top"><b>{n}</b><span>{v}%</span></div>
                <div className="bar"><i data-w={v} /></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
