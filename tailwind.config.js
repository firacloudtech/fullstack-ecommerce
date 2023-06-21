/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        'hero' : ['Montserrat', 'sans-serif'],
      },
      maxWidth :{
        '8xl': '1440px'
      }
    },
  },
  plugins: [],
}

