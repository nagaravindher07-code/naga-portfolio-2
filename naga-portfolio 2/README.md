# M. Naga Ravindher Reddy — Photography Portfolio

A cinematic, production-grade photographer portfolio built on the full spec stack:
**Next.js 14 (App Router) · React 18 · TypeScript (strict) · Three.js + React Three Fiber ·
GSAP + ScrollTrigger · Framer Motion · Lenis · Tailwind CSS 3.4.**

## Features
- Cinematic dark industrial theme (carbon + ember), grain, vignette, grid, ambient orbs
- Three.js ambient particle field + floating satellites with mouse parallax (R3F, lazy-loaded, SSR-disabled, auto-off on low-core devices)
- GSAP page loader (0→100, rotating diamond), Lenis smooth scroll synced to the GSAP ticker
- Custom lerp cursor with hover / VIEW states, magnetic buttons (spring physics)
- Character-by-character hero reveal with descender-safe masks
- Pinned horizontal-scroll Featured Work gallery (vertical stack on mobile)
- 3D-tilt discipline cards with cursor spotlight, sheen, corner brackets, capability pills
- About/Journey split with sticky profile card, animated counters, shimmer skill bars
- Contact hub (Email / Instagram / LinkedIn / WhatsApp) with magnetic spotlight cards
- Footer marquee + scroll-scaled mega wordmark
- Full SEO: metadata, Open Graph, Twitter cards, JSON-LD Person schema, sitemap, robots
- `prefers-reduced-motion` fully respected (disables Lenis, Three.js, all animation)

## Getting started
```bash
npm install
npm run dev          # http://localhost:3000
npm run build && npm run start
```

## Deploy to Vercel
Push to GitHub and import the repo in Vercel (framework auto-detected as Next.js — no config needed),
or run `npx vercel`. Update `metadataBase` in `app/layout.tsx` and the URLs in `app/sitemap.ts`
and `public/robots.txt` to your real domain.

## Hero video
`public/hero-photographer.mp4` is your provided clip. For best performance, also export a WebM and
add it as a first `<source>` in `components/sections/Hero.tsx`:
```bash
ffmpeg -i public/hero-photographer.mp4 -c:v libvpx-vp9 -b:v 0 -crf 32 public/hero-photographer.webm
```

## Editing content
All copy/data lives in `lib/data.ts` (galleries, disciplines, gear, skills, nav). Bio, toolkit, and
contact details live in their section components under `components/sections/`.

## Structure
```
app/            layout (fonts, SEO, JSON-LD), page, globals.css, sitemap
components/     Loader, Cursor, SmoothScroll, ScrollProgress, Atmosphere, ThreeAmbient, Navigation
components/ui/  MagneticButton, SplitText, Counter, Reveal
components/sections/  Hero, FeaturedWork, Disciplines, Gear, About, Contact, Footer
hooks/          useTiltSpotlight
lib/            data, gsap registration, global types
public/         hero video + poster, og.svg, robots.txt
```
