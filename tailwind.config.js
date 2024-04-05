/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      green: {
        default: '#16A34A',
        dark: '#15803D',
      },
      gray: {
        light: '#EAEBEA',
        default: '#727372',
        dark: '#191919'
      },
      transparent: 'transparent',
      white: {
        default: '#F4F5F4',
      }
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
    },
    extend: {
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      }
    },
  },
  plugins: [],
  darkMode: 'class',
}

