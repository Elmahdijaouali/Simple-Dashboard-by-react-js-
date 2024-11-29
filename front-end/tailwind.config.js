/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark:'#1a202c' ,
        light: '#fff', // Define custom light background color
        subDark :'#070F2B' ,
        subLight: '#3795BD' ,
       
      },
      screens: {
        'xs': '400px', // Custom breakpoint for screens under 400px
      },
    },
  },
  plugins: [],
}

