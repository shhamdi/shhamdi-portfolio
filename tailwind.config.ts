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
        nunito: 'var(--font-nunito)',
        crimsonPro: 'var(--font-crimson-pro)',
      },
      colors: {
        highlight: 'hsl(var(--color-highlight))',
      },
      textColor: {
        normal: 'hsl(var(--text-normal))',
        primary: 'hsl(var(--text-primary))',
        secondary: 'hsl(var(--text-secondary))',
        buttonPrimary: 'hsl(var(--text-button-primary))',
        buttonSecondary: 'hsl(var(--text-button-secondary))',
        buttonIcon: 'hsl(var(--text-button-icon))',
      },
      backgroundColor: {
        default: 'hsl(var(--background-default))',
        primary: 'hsl(var(--background-primary))',
        buttonPrimary: 'hsl(var(--button-background-primary))',
        buttonIcon: 'hsl(var(--button-icon-background))',
      },
      boxShadow: {
        buttonPrimary: '0 0.5rem 0 hsl(var(--button-shadow-primary))',
        buttonSecondary: '0 0.5rem 0 hsl(var(--button-shadow-secondary))',
        buttonIcon: '0 0.5rem 0 hsl(var(--button-shadow-icon))',
      },
      borderColor: {
        buttonSecondary: 'hsl(var(--button-border-secondary))',
      },
      divideColor: {
        postsDivide: 'hsl(var(--posts-divide-color))',
      },
    },
  },
  plugins: [require('tailwindcss-animate'), require('@tailwindcss/typography')],
} satisfies Config
