/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: [
      {
        hierbas: {
          "primary": "#2d5016",
          "secondary": "#8b6f47",
          "accent": "#4a7c23",
          "neutral": "#3d2817",
          "base-100": "#ffffff",
          "base-200": "#f5f5dc",
          "base-300": "#e8e4d9",
          "info": "#3abff8",
          "success": "#36d399",
          "warning": "#fbbd23",
          "error": "#f87272",
        },
      },
    ],
  },
}