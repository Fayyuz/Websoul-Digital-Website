import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './src/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          ink: '#0A0B0D',
          slate: '#1E2029',
          muted: '#5A5E73',
          silver: '#EDEEF2',
          pure: '#FFFFFF',
        },
        accent: {
          teal: '#006B6F',
          tealLight: '#E6F4F4',
          ochre: '#C87A2A',
          ochreLight: '#FDF6F0',
        },
        signal: {
          success: '#10B981',
          warning: '#F59E0B',
          error: '#EF4444',
        },
      },
      fontFamily: {
        sans: ['var(--font-geist-sans)', 'Inter', 'system-ui', 'sans-serif'],
        display: ['var(--font-geist-mono)', 'SF Mono', 'monospace'],
        mono: ['var(--font-geist-mono)', 'SF Mono', 'monospace'],
      },
      fontSize: {
        'display-1': ['4.5rem', { lineHeight: '1.1', letterSpacing: '-0.03em' }],
        'display-2': ['3.75rem', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
        'heading-1': ['3rem', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
        'heading-2': ['2.25rem', { lineHeight: '1.3', letterSpacing: '-0.01em' }],
        'heading-3': ['1.5rem', { lineHeight: '1.4' }],
        'body-lg': ['1.125rem', { lineHeight: '1.6' }],
        'body': ['1rem', { lineHeight: '1.6' }],
        'caption': ['0.875rem', { lineHeight: '1.5' }],
      },
      spacing: {
        '18': '4.5rem',
        '30': '7.5rem',
        '42': '10.5rem',
      },
      animation: {
        'fade-up': 'fadeUp 0.6s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'fade-in': 'fadeIn 0.4s ease-out forwards',
        'scale-in': 'scaleIn 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'glow-pulse': 'glowPulse 2s ease-in-out infinite',
        'marquee': 'marquee 25s linear infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.96)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(0, 107, 111, 0.4)' },
          '50%': { boxShadow: '0 0 0 8px rgba(0, 107, 111, 0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'noise': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
}

export default config
