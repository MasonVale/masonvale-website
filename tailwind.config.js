/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        'serif': ['Playfair Display', 'serif'],
        'sans': ['Inter', 'sans-serif'],
      },
      colors: {
        gold: {
          50: '#fefdf4',
          100: '#fef9e7',
          200: '#fdf3d1',
          300: '#fcebb3',
          400: '#fadf8b',
          500: '#f4c02c',
          600: '#d4a41f',
          700: '#b38a16',
          800: '#927015',
          900: '#7a5d14',
        },
        luxury: {
          50: '#f5f6f5',
          100: '#e8ebe9',
          200: '#d1d7d4',
          300: '#b3bdb8',
          400: '#8B9691',
          500: '#77817E',
          600: '#6A7470',
          700: '#5a6360',
          800: '#4a5250',
          900: '#3d4442',
        },
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out',
        'fade-in': 'fadeIn 1s ease-out',
        'slide-in-left': 'slideInLeft 0.8s ease-out',
        'slide-in-right': 'slideInRight 0.8s ease-out',
      },
      keyframes: {
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        fadeIn: {
          '0%': {
            opacity: '0',
          },
          '100%': {
            opacity: '1',
          },
        },
        slideInLeft: {
          '0%': {
            opacity: '0',
            transform: 'translateX(-30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        slideInRight: {
          '0%': {
            opacity: '0',
            transform: 'translateX(30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
      },
    },
  },
  plugins: [],
};