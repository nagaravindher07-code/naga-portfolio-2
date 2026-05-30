'use client';
import { useEffect } from 'react';

export default function Cursor() {
  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return;
    const dot = document.querySelector<HTMLElement>('.cursor-dot');
    const ring = document.querySelector<HTMLElement>('.cursor-ring');
    if (!dot || !ring) return;

    let mx = innerWidth / 2, my = innerHeight / 2, rx = mx, ry = my;
    let frame = 0;

    const move = (e: MouseEvent) => {
      mx = e.clientX; my = e.clientY;
      dot.style.transform = `translate(${mx}px, ${my}px) translate(-50%, -50%)`;
    };
    window.addEventListener('mousemove', move);

    const loop = () => {
      rx += (mx - rx) * 0.18; ry += (my - ry) * 0.18;
      ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;
      frame = requestAnimationFrame(loop);
    };
    loop();

    const enter = (e: Event) => {
      const t = (e.currentTarget as HTMLElement).dataset.cursor;
      if (t) document.body.classList.add('cur-' + t);
    };
    const leave = (e: Event) => {
      const t = (e.currentTarget as HTMLElement).dataset.cursor;
      if (t) document.body.classList.remove('cur-' + t);
    };
    const els = Array.from(document.querySelectorAll<HTMLElement>('[data-cursor]'));
    els.forEach((el) => {
      el.addEventListener('mouseenter', enter);
      el.addEventListener('mouseleave', leave);
    });

    return () => {
      window.removeEventListener('mousemove', move);
      cancelAnimationFrame(frame);
      els.forEach((el) => {
        el.removeEventListener('mouseenter', enter);
        el.removeEventListener('mouseleave', leave);
      });
    };
  }, []);

  return (
    <>
      <div className="cursor-dot" />
      <div className="cursor-ring"><span className="lbl">VIEW</span></div>
    </>
  );
}
