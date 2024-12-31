/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#00897B',
          50: '#E0F2F1',
          100: '#B2DFDB', 
          200: '#80CBC4',
          300: '#4DB6AC',
          400: '#26A69A',
          500: '#00897B',
          600: '#00796B',
          700: '#00695C',
          800: '#004D40',
          900: '#00251A',
        },
        secondary: {
          DEFAULT: '#C5A572',
          50: '#FAF6F0',
          100: '#F5EDE1',
          200: '#EBDBC3',
          300: '#DCC297',
          400: '#C5A572',
          500: '#B08A4C',
          600: '#8E6F3D',
          700: '#6C542F',
          800: '#4A3920',
          900: '#281F12',
        }
      },
    },
  },
  plugins: [],
};