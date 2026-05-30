'use client';
import { useRef } from 'react';
import { useTiltSpotlight } from '@/hooks/useTiltSpotlight';

type Card = { ico: string; title: string; val: string; desc: string; href: string; ext?: boolean };

const CARDS: Card[] = [
  { ico: '@', title: 'Email', val: 'nagaravindher08@gmail.com', desc: 'For collaborations, project inquiries, and photography opportunities.', href: 'mailto:nagaravindher08@gmail.com' },
  { ico: 'IG', title: 'Instagram', val: '@nani__1308', desc: 'Follow my latest photography, shoots, and creative work.', href: 'https://www.instagram.com/nani__1308/', ext: true },
  { ico: 'in', title: 'LinkedIn', val: 'Naga Ravindher Reddy', desc: 'Connect professionally and explore my creative journey.', href: 'https://www.linkedin.com/in/naga-ravindher-reddy-muthukuru-a03487347/', ext: true },
  { ico: 'WA', title: 'WhatsApp', val: '+91 70327 93341', desc: 'Quick chats, bookings, and creative project discussions.', href: 'https://wa.me/917032793341', ext: true },
];

function CCard({ c }: { c: Card }) {
  const ref = useRef<HTMLAnchorElement>(null);
  useTiltSpotlight(ref as unknown as React.RefObject<HTMLElement>, false);
  return (
    <a
      ref={ref} className="ccard" href={c.href} data-cursor="hover"
      {...(c.ext ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
    >
      <span className="spot" /><span className="arr">↗</span>
      <span className="ico">{c.ico}</span>
      <div>
        <h4>{c.title}</h4>
        <div className="val">{c.val}</div>
        <p>{c.desc}</p>
      </div>
    </a>
  );
}

export default function Contact() {
  return (
    <section className="section contact" id="contact">
      <h2>Get in Touch</h2>
      <div className="csub">Pick whichever channel suits you.</div>
      <div className="contact-grid">
        {CARDS.map((c) => <CCard key={c.title} c={c} />)}
      </div>
      <div className="contact-bottom">
        <span className="badge"><span className="dot-pulse" />Available for Collaborations</span>
        <div className="contact-tags">
          <span>Photography</span><span>Events</span><span>Portraits</span>
          <span>Creative Projects</span><span>Visual Storytelling</span>
        </div>
        <div className="divider" />
        <p className="quote">&ldquo;Every frame tells a story. <em>Let&apos;s create something meaningful together.</em>&rdquo;</p>
      </div>
    </section>
  );
}
