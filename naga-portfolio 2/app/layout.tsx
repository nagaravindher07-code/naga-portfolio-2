import type { Metadata } from 'next';
import { Fraunces, JetBrains_Mono } from 'next/font/google';
import { GeistSans } from 'geist/font/sans';
import './globals.css';

const fraunces = Fraunces({
  subsets: ['latin'],
  weight: ['300', '400', '600', '700', '900'],
  style: ['normal', 'italic'],
  variable: '--font-fraunces',
  display: 'swap',
});

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-jetbrains',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://your-vercel-domain.vercel.app'),
  title: 'M. Naga Ravindher Reddy — Photographer & Visual Storyteller',
  description:
    'Passionate photographer and visual storyteller specializing in portraits, events, candid moments, and cinematic imagery. Based in Hyderabad, India.',
  keywords: [
    'Photography', 'Portrait Photography', 'Event Coverage', 'Visual Storytelling',
    'Cinematic Photography', 'Naga Ravindher Reddy', 'Hyderabad Photographer',
  ],
  authors: [{ name: 'M. Naga Ravindher Reddy' }],
  openGraph: {
    type: 'website',
    title: 'M. Naga Ravindher Reddy — Photographer & Visual Storyteller',
    description: 'Capturing Stories Through Every Frame. Portraits · Events · Candid · Cinematic Imagery.',
    images: [{ url: '/og.svg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'M. Naga Ravindher Reddy — Photographer',
    description: 'Capturing Stories Through Every Frame.',
    images: ['/og.svg'],
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'M. Naga Ravindher Reddy',
  jobTitle: 'Photographer & Visual Storyteller',
  affiliation: [
    { '@type': 'Organization', name: 'SCOPE Club' },
    { '@type': 'CollegeOrUniversity', name: 'MLR Institute of Technology' },
  ],
  address: { '@type': 'PostalAddress', addressLocality: 'Hyderabad', addressCountry: 'India' },
  knowsAbout: ['Photography', 'Portrait Photography', 'Event Coverage', 'Visual Storytelling', 'Cinematic Photography'],
  sameAs: [
    'https://www.instagram.com/nani__1308/',
    'https://www.linkedin.com/in/naga-ravindher-reddy-muthukuru-a03487347/',
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${jetbrains.variable} ${GeistSans.variable}`}>
      <body style={{ ['--font-geist' as string]: 'var(--font-geist-sans)' }}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
