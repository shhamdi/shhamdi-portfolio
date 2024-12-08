import type { Config } from 'tailwindcss'

export default {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      fontFamily: {
        domine: 'var(--font-domine)',
      },
      textColor: {
        normal: 'hsl(var(--text-normal))',
        primary: 'hsl(var(--text-primary))',
        secondary: 'hsl(var(--text-secondary))',
        highlight: 'hsl(var(--text-highlight))',
        buttonPrimary: 'hsl(var(--text-button-primary))',
      },
      backgroundColor: {
        default: 'hsl(var(--background-default))',
        primary: 'hsl(var(--background-primary))',
        buttonPrimary: 'hsl(var(--button-background-primary))',
      },
    },
  },
  plugins: [require('tailwindcss-animate'), require('@tailwindcss/typography')],
} satisfies Config
