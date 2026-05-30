'use client';
import { useEffect, useState } from 'react';

export default function Loader() {
  const [count, setCount] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setDone(true);
      return;
    }
    let n = 0;
    const id = setInterval(() => {
      n += Math.floor(Math.random() * 8) + 3;
      if (n >= 100) {
        n = 100;
        clearInterval(id);
        setTimeout(() => setDone(true), 600);
      }
      setCount(n);
    }, 70);
    return () => clearInterval(id);
  }, []);

  return (
    <div
      className="loader"
      style={{
        opacity: done ? 0 : 1,
        pointerEvents: done ? 'none' : 'auto',
        transition: 'opacity .8s ease',
        visibility: done && count === 100 ? 'hidden' : 'visible',
      }}
      aria-hidden={done}
    >
      <div className="loader-mono">
        <span className="diamond" />
        <span className="diamond b" />
        <span className="mono">N<i>R</i></span>
      </div>
      <div className="loader-count">{String(count).padStart(3, '0')}</div>
      <div className="loader-bar"><i style={{ width: `${count}%` }} /></div>
    </div>
  );
}
