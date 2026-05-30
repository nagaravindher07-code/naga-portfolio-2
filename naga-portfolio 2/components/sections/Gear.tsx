'use client';
import { GEAR } from '@/lib/data';

export default function Gear() {
  return (
    <section className="section" id="gear">
      <span className="eyebrow">Tools of the Craft</span>
      <h2 className="sec-head" style={{ fontSize: 'clamp(40px,6vw,84px)', marginTop: 22 }}>
        My <em>Gear</em>
      </h2>
      <div className="gear-grid">
        {GEAR.map((g) => (
          <div className="gear" key={g.t}>
            <span className="glow2" />
            <div className="gk">{g.k}</div>
            <h4>{g.t}</h4>
            <div className="gs">{g.s}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
