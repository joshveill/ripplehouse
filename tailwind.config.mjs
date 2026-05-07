/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Brand colors (from RippleHouse one-pager guide)
        ripple: {
          yellow: '#FFF77E',
          teal: '#0AEBDC',
          black: '#000000',
          white: '#FFFFFF',
        },
      },
      fontFamily: {
        // Display: Europa Bold (commercial, Adobe Fonts) with Manrope as fallback
        display: ['Europa', 'Manrope', 'system-ui', 'sans-serif'],
        // Mono: Coordinates Regular (commercial, Pangram Pangram) with JetBrains Mono as fallback
        mono: ['Coordinates', '"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        // Custom scale for big editorial headlines
        'display-xl': ['clamp(3rem, 8vw, 7.5rem)', { lineHeight: '0.95', letterSpacing: '-0.02em' }],
        'display-lg': ['clamp(2.5rem, 6vw, 5.5rem)', { lineHeight: '1.0', letterSpacing: '-0.02em' }],
        'display-md': ['clamp(2rem, 4.5vw, 4rem)', { lineHeight: '1.05', letterSpacing: '-0.015em' }],
        'display-sm': ['clamp(1.5rem, 3vw, 2.25rem)', { lineHeight: '1.15', letterSpacing: '-0.01em' }],
      },
      maxWidth: {
        'page': '1440px',
      },
      animation: {
        'fade-up': 'fadeUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) both',
        'fade-in': 'fadeIn 1s ease-out both',
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
      },
    },
  },
  plugins: [],
};
