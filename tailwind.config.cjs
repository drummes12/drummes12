/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        'dm-mono': ['DM Mono', 'monospace'],
      },
      backgroundColor: {
        'neon1': '#00ff00',
        'neon2': '#ff00ff',
        'neon3': '#00FFff'
      },
      boxShadow: {
        'neon1': '0 0 240px 60px #00ff00',
        'neon1-border': '0 0 20px 10px #00ff00',
        'neon2': '0 0 240px 60px #ff00FF',
        'neon2-border': '0 0 20px 10px #ff00FF',
        'neon3': '0 0 240px 60px #00FFFF',
        'neon3-border': '0 0 20px 10px #00FFFF'
      },
      backgroundImage: {
        'radial-gradient': 'radial-gradient(var(--tw-gradient-stops))',
      },
      animation: {
        typing: 'typing 15s steps(12) 0.6s infinite',
        flicker1: 'flicker1 3.5s infinite',
        flicker2: 'flicker2 4s infinite',
        'marquee-left': 'marquee-left 100s linear infinite',
        'marquee-right': 'marquee-right 100s linear infinite',
      },
      keyframes: {
        typing: {
          '0%, 100%': { width: 0 },
          '5%, 95%': { width: '12.1ch' },
        },
        blink: {
          '50%': { 'border-color': 'transparent' },
        },
        flicker1: {
          '0%, 19.999%, 22%, 62.999%, 64%, 64.999%, 70%, 100%': { opacity: 1 },
          '20%, 21.999%, 63%, 63.999%, 65%, 69.999%': { opacity: 0 },
        },
        flicker2: {
          '0%, 15.999%, 24%, 60.999%, 70%, 72.999%, 85%, 100%': { opacity: 1 },
          '16%, 23.999%, 61%, 69.999%, 73%, 84.999%': { opacity: 0 },
        },
        'marquee-left': {
          from: { transform: 'translateX(-2%)' },
          to: { transform: 'translateX(-102%)' },
        },
        'marquee-right': {
          from: { transform: 'translateX(-102%)' },
          to: { transform: 'translateX(-2%)' },
        }
      },
    },
  },
  plugins: [require('tailwindcss-animated')],
}
