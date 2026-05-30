'use client';
import { useMemo, useRef } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';

function Particles() {
  const ref = useRef<THREE.Points>(null);
  const scrollY = useRef(0);

  const { positions, colors } = useMemo(() => {
    const N = 520;
    const positions = new Float32Array(N * 3);
    const colors = new Float32Array(N * 3);
    const cA = new THREE.Color('#F37512');
    const cB = new THREE.Color('#FBD5A5');
    const cC = new THREE.Color('#4a5e80');
    for (let i = 0; i < N; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 60;
      positions[i * 3 + 1] = (Math.random() - 0.5) * 40;
      positions[i * 3 + 2] = (Math.random() - 0.5) * 30;
      const r = Math.random();
      const c = r < 0.5 ? cA : r < 0.78 ? cB : cC;
      colors[i * 3] = c.r; colors[i * 3 + 1] = c.g; colors[i * 3 + 2] = c.b;
    }
    return { positions, colors };
  }, []);

  useFrame(() => {
    if (window.__lenis) scrollY.current = window.__lenis.scroll;
    if (ref.current) {
      ref.current.rotation.y += 0.0004;
      ref.current.rotation.x += 0.0002;
      ref.current.position.y = scrollY.current * 0.0008;
    }
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.13}
        vertexColors
        transparent
        opacity={0.8}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
      />
    </points>
  );
}

function Satellites() {
  const group = useRef<THREE.Group>(null);
  const items = useMemo(() => {
    const arr: { pos: [number, number, number]; rot: [number, number, number]; type: 'ring' | 'frame'; color: string }[] = [];
    for (let i = 0; i < 5; i++) {
      arr.push({
        pos: [(Math.random() - 0.5) * 40, (Math.random() - 0.5) * 24, -5 - Math.random() * 10],
        rot: [Math.random() * 3, Math.random() * 3, 0],
        type: 'ring',
        color: i % 2 ? '#F37512' : '#FBD5A5',
      });
    }
    for (let i = 0; i < 4; i++) {
      arr.push({
        pos: [(Math.random() - 0.5) * 44, (Math.random() - 0.5) * 26, -8 - Math.random() * 6],
        rot: [Math.random(), Math.random(), 0],
        type: 'frame',
        color: '#F2F2EC',
      });
    }
    return arr;
  }, []);

  useFrame(() => {
    if (group.current) {
      group.current.children.forEach((c, i) => {
        c.rotation.x += 0.002 + i * 0.0003;
        c.rotation.y += 0.0015;
      });
    }
  });

  return (
    <group ref={group}>
      {items.map((it, i) =>
        it.type === 'ring' ? (
          <mesh key={i} position={it.pos} rotation={it.rot}>
            <torusGeometry args={[1.1 + Math.random(), 0.03, 8, 40]} />
            <meshBasicMaterial color={it.color} transparent opacity={0.25} />
          </mesh>
        ) : (
          <mesh key={i} position={it.pos} rotation={it.rot}>
            <planeGeometry args={[1.6, 1.1]} />
            <meshBasicMaterial color={it.color} transparent opacity={0.05} side={THREE.DoubleSide} />
          </mesh>
        )
      )}
    </group>
  );
}

function ParallaxRig() {
  const target = useRef({ x: 0, y: 0 });
  const { camera } = useThree();
  useMemo(() => {
    const handler = (e: MouseEvent) => {
      target.current.x = e.clientX / innerWidth - 0.5;
      target.current.y = e.clientY / innerHeight - 0.5;
    };
    if (typeof window !== 'undefined' && !window.matchMedia('(pointer: coarse)').matches) {
      window.addEventListener('mousemove', handler);
    }
    return () => {};
  }, []);
  useFrame(() => {
    camera.position.x += (target.current.x * 4 - camera.position.x) * 0.04;
    camera.position.y += (-target.current.y * 3 - camera.position.y) * 0.04;
    camera.lookAt(0, 0, 0);
  });
  return null;
}

export default function ThreeAmbient() {
  return (
    <Canvas
      id="three-canvas"
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 22], fov: 60 }}
      gl={{ alpha: true, antialias: true }}
    >
      <Particles />
      <Satellites />
      <ParallaxRig />
    </Canvas>
  );
}
