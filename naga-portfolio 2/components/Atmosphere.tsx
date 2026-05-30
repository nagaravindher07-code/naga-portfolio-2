'use client';
import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

const ThreeAmbient = dynamic(() => import('./ThreeAmbient'), { ssr: false });

export default function Atmosphere() {
  const [show3D, setShow3D] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const lowCore = (navigator.hardwareConcurrency || 4) <= 2;
    if (!reduced && !lowCore) setShow3D(true);
  }, []);

  return (
    <>
      <div className="fx-grid" />
      <div className="orb a" />
      <div className="orb b" />
      <div className="orb c" />
      {show3D && <ThreeAmbient />}
      <div className="fx-vignette" />
      <div className="fx-grain" style={{ animation: 'grain 8s steps(8) infinite' }} />
    </>
  );
}
