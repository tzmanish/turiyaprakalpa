/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#3d31fb',
          light: '#5a4fff',
          dark: '#2a21d6',
        },
        secondary: {
          DEFAULT: '#d129a4',
          light: '#e33eb7',
          dark: '#b01e88',
        },
        success: {
          DEFAULT: '#00C853',
          light: '#4caf50',
          dark: '#388e3c',
        },
        warning: {
          DEFAULT: '#ff9800',
          light: '#ffb74d',
          dark: '#f57c00',
        },
        error: {
          DEFAULT: '#f44336',
          light: '#ef5350',
          dark: '#d32f2f',
        },
        gray: {
          100: '#f5f7fa',
          200: '#e4e7eb',
          300: '#cbd2d9',
          400: '#9aa5b1',
          500: '#7b8794',
          600: '#616e7c',
          700: '#4a5568',
          800: '#323f4b',
          900: '#1f2933',
        },
      },
      fontFamily: {
        heading: ['Poppins', 'sans-serif'],
        body: ['Open Sans', 'sans-serif'],
      },
      boxShadow: {
        card: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'card-hover': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
      },
      backgroundImage: {
        'hero-pattern': "linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5)), url('/src/assets/hero-bg.jpg')",
        'gradient-primary': 'linear-gradient(135deg, #3d31fb 0%, #d129a4 100%)',
      },
    },
  },
  plugins: [],
};