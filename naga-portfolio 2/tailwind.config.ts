import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        carbon: '#050505',
        'carbon-2': '#0a0908',
        graphite: '#161514',
        'graphite-2': '#211f1d',
        ember: '#F37512',
        'ember-soft': '#ff8a36',
        highlight: '#FBD5A5',
        bone: '#F2F2EC',
      },
      fontFamily: {
        serif: ['var(--font-fraunces)', 'Georgia', 'serif'],
        sans: ['var(--font-geist)', '-apple-system', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'monospace'],
      },
      keyframes: {
        spin405: { to: { transform: 'rotate(405deg)' } },
        pulse: { '0%': { transform: 'scale(1)', opacity: '0.7' }, '100%': { transform: 'scale(3.4)', opacity: '0' } },
        shimmer: { to: { transform: 'translateX(200%)' } },
        marq: { to: { transform: 'translateX(-50%)' } },
        grain: {
          '0%,100%': { transform: 'translate(0,0)' },
          '10%': { transform: 'translate(-4%,-4%)' },
          '30%': { transform: 'translate(-2%,4%)' },
          '50%': { transform: 'translate(-3%,1%)' },
          '70%': { transform: 'translate(-1%,2%)' },
          '90%': { transform: 'translate(-3%,-2%)' },
        },
      },
      animation: {
        spin405: 'spin405 4s linear infinite',
        pulse: 'pulse 2s ease-out infinite',
        shimmer: 'shimmer 2.4s infinite',
        marq: 'marq 30s linear infinite',
        grain: 'grain 8s steps(8) infinite',
      },
    },
  },
  plugins: [],
};
export default config;
