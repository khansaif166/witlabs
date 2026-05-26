/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,ts}'],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: '#F6F3EE',
          dark: '#EDE9E2',
        },
        ink: {
          DEFAULT: '#1C1917',
          light: '#44403C',
          lighter: '#78716C',
        },
        muted: '#78716C',
        green: {
          DEFAULT: '#2D6A4F',
          light: '#EEF4F1',
          mid: '#52A67A',
          bright: '#4ADE80',
          dark: '#1F4A37',
        },
        border: 'rgba(28, 25, 23, 0.08)',
      },
      fontFamily: {
        sans: ['DM Sans', 'system-ui', 'sans-serif'],
        serif: ['"DM Serif Display"', 'Georgia', 'serif'],
        mono: ['"DM Mono"', 'monospace'],
      },
      fontSize: {
        'display-xl': ['clamp(2.45rem, 4.8vw, 4.4rem)', { lineHeight: '1.02', letterSpacing: '0', fontWeight: '600' }],
        'display-lg': ['clamp(2.05rem, 3.6vw, 3.25rem)', { lineHeight: '1.06', letterSpacing: '0', fontWeight: '600' }],
        'display-md': ['clamp(1.75rem, 2.8vw, 2.55rem)', { lineHeight: '1.12', letterSpacing: '0', fontWeight: '600' }],
        'heading-xl': ['clamp(1.45rem, 2.1vw, 2rem)', { lineHeight: '1.18', letterSpacing: '0' }],
        'heading-lg': ['clamp(1.3rem, 1.8vw, 1.75rem)', { lineHeight: '1.22', letterSpacing: '0' }],
        'heading-md': ['clamp(1.1rem, 1.45vw, 1.35rem)', { lineHeight: '1.28', letterSpacing: '0' }],
        'body-lg': ['1.03rem', { lineHeight: '1.65' }],
        'body-md': ['0.95rem', { lineHeight: '1.6' }],
        'body-sm': ['0.83rem', { lineHeight: '1.55' }],
        label: ['0.6875rem', { lineHeight: '1', letterSpacing: '0.1em', fontWeight: '600' }],
        caption: ['0.75rem', { lineHeight: '1.5' }],
      },
      spacing: {
        section: 'clamp(4rem, 8vw, 8rem)',
        'section-sm': 'clamp(3rem, 6vw, 6rem)',
      },
      maxWidth: {
        site: '1280px',
        prose: '680px',
        narrow: '480px',
      },
      animation: {
        marquee: 'marquee 30s linear infinite',
        'fade-up': 'fadeUp 0.6s ease forwards',
        'fade-in': 'fadeIn 0.4s ease forwards',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
    },
  },
};
