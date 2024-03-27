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
        light: '#D8DFE9',
        default: '#9BA7C0',
        dark: '#04151F'
      },
      transparent: 'transparent',
      white: {
        default: '#EDE6F2',
      }
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}

