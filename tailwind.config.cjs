/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      boxShadow: {
        'card-inner': 'inset -12px -77px 116px -51px rgba(0,0,0,0.7)',
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography'),
  ]
}