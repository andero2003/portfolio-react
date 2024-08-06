/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-neutral': '#f5f5f5',
        'primary-dark': '#1a1a1a',
        'accent': '#0d6ca3',
        'accent-dark': '#0a3674',
        'accent-pastel': '#4688c2',
      },
      fontFamily: {
        'primary': ['Dosis', 'sans-serif'],
        'code': ['Fira Code', 'monospace'],
      },
    },
  },
  plugins: [],
}