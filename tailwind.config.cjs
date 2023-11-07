/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      backgroundImage: {
        'radial-gradient': 'radial-gradient(var(--tw-gradient-stops))',
      },
      animation: {
        typing6: 'typing 1s steps(6) 0.6s, blink 0.5s infinite step-end alternate',
        typing11: 'typing 1s steps(11) 0.6s, blink 0.5s infinite step-end alternate',
      },
      keyframes: {
        typing: {
          from: { width: 0 },
        },
        blink: {
          '50%': { 'border-color': 'transparent' },
        },
      },
    },
  },
  plugins: [require('tailwindcss-animated')],
}
