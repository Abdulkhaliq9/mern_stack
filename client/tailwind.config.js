/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue': '#d894ff',
        'purple': '#ab54db',
        'pink': '#ff49db',
        'orange': '#fe6b68',
        'gray': '#c0c0c0',
        'gray-light': '#dadfe3',
      },
    },
  },
  plugins: [],
}