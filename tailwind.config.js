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
          400: '#6b7280', // Changed from #9aa5b1
          500: '#4b5563', // Changed from #7b8794
          600: '#374151', // Changed from #616e7c
          700: '#1f2937', // Changed from #4a5568
          800: '#111827', // Changed from #323f4b
          900: '#030712', // Changed from #1f2933
        },
      },
      fontSize: {
        'fluid-sm': 'clamp(0.875rem, 2vw, 1rem)',
        'fluid-base': 'clamp(1rem, 2.5vw, 1.125rem)',
        'fluid-lg': 'clamp(1.125rem, 3vw, 1.25rem)',
        'fluid-xl': 'clamp(1.25rem, 3.5vw, 1.5rem)',
        'fluid-2xl': 'clamp(1.5rem, 4vw, 2rem)',
        'fluid-3xl': 'clamp(2rem, 5vw, 3rem)',
        'fluid-4xl': 'clamp(2.5rem, 6vw, 3.75rem)',
        'fluid-5xl': 'clamp(3rem, 7vw, 4.5rem)',
      },
      screens: {
        'xs': '475px',
        '3xl': '1920px',
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