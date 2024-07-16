/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./node_modules/tw-elements/js/**/*.js",
    //  "./src/**/*.{html,js}", "./node_modules/tw-elements/js/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        'title': '#3B3B3B',
        'text': '#26282D',
        'accent': '#D4E7EC',
        'card-title': '#323738',
        'card-text': '#727574',
        'red': '#ED4848',
        'cta': '#FE7235',
        'cta-hover': '#f54c01',
        'link': '#344A9A'
      },
      
    },
    fontFamily: {
      'inter': ['Inter', 'sans-serif'],
      'lato': ['Lato', 'sans-serif'],
    },
    screens: {
      'sm': '768px',
      'md': '992px',
      'lg': '1024px',  // Default lg value
      'xl': '1280px',  // Default xl value
      '2xl': '1536px', // Default 2xl value
    },
    container: {
      center: true, // Optional: This centers the container by default
      padding: '1rem', // Optional: This adds padding to the container by default
      screens: {
        'sm': '100%',
        'md': '940px',
      },
    },
  },

  plugins: [require("tw-elements/plugin.cjs")],
  darkMode: "class",

}