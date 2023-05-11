/** @type {import('tailwindcss').Config} */
const { withTV } = require('tailwind-variants/transformer')

module.exports = withTV({
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/styles/**/*.{js,ts,jsx,tsx}',
    './content/**/*.mdx',
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ['var(--font-inter)', 'sans-serif'],
        secondary: ['var(--font-lato)', 'sans-serif'],
        mono: ['var(--font-source-code-pro)', 'monospace'],
      },
      typography: {
        quoteless: {
          css: {
            'blockquote p:first-of-type::before': { content: 'none' },
            'blockquote p:first-of-type::after': { content: 'none' },
          },
        },
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [require('@tailwindcss/typography')],
})