export type Gallery = {
  i: string; t: string; c: string; d: string; a: string; u: string; b: string;
};
export type Discipline = { i: string; t: string; d: string; p: string[] };
export type GearItem = { k: string; t: string; s: string };
export type Skill = [string, number];

export const GALLERIES: Gallery[] = [
  { i: '01', t: 'Skies & Golden Hours', c: 'Landscape Photography', d: 'Sunrises, sunsets, dramatic clouds, golden-hour light, and atmospheric skies.', a: '#F37512', u: 'https://portfolio2-six-alpha-61.vercel.app', b: 'View Gallery →' },
  { i: '02', t: 'Sacred Places', c: 'Travel & Heritage', d: 'Temples, architecture, cultural landmarks, and spiritual destinations.', a: '#F2F2EC', u: 'https://sacred-places-2y0ocgy4o-nnschinmayee07-8534s-projects.vercel.app', b: 'View Gallery →' },
  { i: '03', t: 'Seascapes & Shores', c: 'Nature Photography', d: 'Ocean horizons, beaches, reflections, waves, and coastal beauty.', a: '#5b9bd5', u: 'https://seascapes-shores.vercel.app', b: 'View Gallery →' },
  { i: '04', t: 'Nature & Landscapes', c: 'Landscape Photography', d: 'Forests, mountains, open landscapes, and natural scenery.', a: '#5fa777', u: 'https://nature-landscapes-7zl05o2ja-nnschinmayee07-8534s-projects.vercel.app', b: 'View Gallery →' },
  { i: '05', t: 'Wildlife & Life', c: 'Wildlife Photography', d: 'Animals, birds, and beautiful moments from nature.', a: '#a87b4f', u: 'https://wildlife-life.vercel.app', b: 'View Gallery →' },
  { i: '06', t: 'Urban & Architecture', c: 'Architecture Photography', d: 'Modern buildings, cityscapes, geometry, and urban storytelling.', a: '#9aa0a6', u: 'https://urban-architecture.vercel.app', b: 'View Gallery →' },
  { i: '07', t: 'Everyday Moments', c: 'Lifestyle Photography', d: 'Authentic stories, candid moments, and daily life through photography.', a: '#FBD5A5', u: 'https://everyday-moments.vercel.app', b: 'View Gallery →' },
  { i: '08', t: 'Videos', c: 'Cinematic Films', d: 'Creative video projects, cinematic edits, and visual storytelling through motion.', a: '#ff6a1a', u: 'https://videos-project.vercel.app', b: 'Watch Collection →' },
];

export const DISCIPLINES: Discipline[] = [
  { i: '01', t: 'Portrait Photography', d: 'Creating expressive and timeless portraits that capture personality, emotion, and individuality through thoughtful composition and natural storytelling.', p: ['Individual Portraits', 'Creative Portraits', 'Lifestyle Photography', 'Outdoor Sessions'] },
  { i: '02', t: 'Event Coverage', d: 'Documenting memorable events with a storytelling-first approach, preserving genuine moments, interactions, and experiences.', p: ['College Events', 'Club Activities', 'Cultural Programs', 'Behind-The-Scenes'] },
  { i: '03', t: 'Candid Storytelling', d: 'Capturing authentic emotions and unscripted moments that tell meaningful stories through natural and spontaneous photography.', p: ['Candid Photography', 'Everyday Moments', 'Human Emotions', 'Visual Narratives'] },
  { i: '04', t: 'Cinematic Photography', d: 'Crafting visually striking imagery inspired by cinematic composition, lighting, atmosphere, and storytelling techniques.', p: ['Cinematic Portraits', 'Mood-Based Shoots', 'Creative Concepts', 'Story-Driven Visuals'] },
  { i: '05', t: 'Photo Editing & Color Grading', d: 'Transforming raw captures into polished visual experiences through professional editing, color correction, and cinematic grading.', p: ['Lightroom Editing', 'Color Grading', 'Retouching', 'Visual Enhancement'] },
];

export const GEAR: GearItem[] = [
  { k: 'Body · DSLR', t: 'Canon DSLR', s: 'Primary // stills + events' },
  { k: 'Body · Mirrorless', t: 'Sony Mirrorless', s: 'Secondary // cinematic' },
  { k: 'Optics', t: 'Prime & Zoom Lenses', s: 'Portraits // landscapes' },
  { k: 'Edit Suite', t: 'DaVinci Resolve', s: 'Color grading // motion' },
  { k: 'Edit Suite', t: 'Adobe Lightroom', s: 'RAW develop // retouch' },
  { k: 'Field Kit', t: 'SD Cards · Notebook · Mug', s: 'Always on the desk' },
];

export const SKILLS: Skill[] = [
  ['Photography', 95], ['Event Coverage', 90], ['Visual Storytelling', 92], ['DaVinci Resolve', 85],
  ['Canva Design', 88], ['Color Grading', 82], ['Creative Direction', 86], ['Content Creation', 90],
];

export const NAV_LINKS = [
  { n: '01', label: 'Home', href: '#home' },
  { n: '02', label: 'Works', href: '#works' },
  { n: '03', label: 'Disciplines', href: '#disciplines' },
  { n: '04', label: 'My Gear', href: '#gear' },
  { n: '05', label: 'Journey', href: '#journey' },
  { n: '06', label: 'Contact', href: '#contact' },
];
