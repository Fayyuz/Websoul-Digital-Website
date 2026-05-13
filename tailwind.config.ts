import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Premium monochrome palette only - NO accent colors
        'ink': '#0A0A0B',      // Primary text (near-black)
        'paper': '#FFFFFF',     // Background (pure white)
        'graphite': '#1A1A1C',  // Secondary elements (dark grey)
        'charcoal': '#2A2A2E',  // Borders/dividers (medium-dark)
        'slate': '#6B6B7A',     // Secondary text (medium grey)
        'silver': '#E8E8EC',    // Light backgrounds (off-white)
        'mist': '#F4F4F6',      // Hover states (light grey)
        'navy': '#1B2A4A',     // Deep trust accent - 5% of UI max
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['SF Pro Display', 'Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'hero': ['4.5rem', { lineHeight: '1.1', fontWeight: '600', letterSpacing: '-0.02em' }],
        'hero-mobile': ['2.75rem', { lineHeight: '1.2', fontWeight: '600', letterSpacing: '-0.02em' }],
        'h1': ['3rem', { lineHeight: '1.2', fontWeight: '600', letterSpacing: '-0.01em' }],
        'h2': ['2rem', { lineHeight: '1.3', fontWeight: '500' }],
        'h3': ['1.5rem', { lineHeight: '1.4', fontWeight: '500' }],
        'h4': ['1.25rem', { lineHeight: '1.4', fontWeight: '500' }],
        'body': ['1rem', { lineHeight: '1.6' }],
        'body-lg': ['1.125rem', { lineHeight: '1.6' }],
        'caption': ['0.875rem', { lineHeight: '1.5' }],
        'small': ['0.75rem', { lineHeight: '1.5' }],
      },
      spacing: {
        'section': '6rem',      // Major sections (96px)
        'subsection': '4rem',   // Within sections (64px)
        'component': '2rem',    // Component margins (32px)
        'element': '1rem',      // Element spacing (16px)
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'fade-up': 'fadeUp 0.6s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}

export default config
