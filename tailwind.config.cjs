/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      spacing: {
        '76': '19rem',
        '20': '5rem',
      },
    },
  },
  plugins: [],
}
