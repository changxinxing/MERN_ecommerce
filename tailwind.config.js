module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      spacing:{
        cus1:'7vh',
        cus2:'93vh',
        sw:'250px',
        spt:'20px',
        tw:'12.5%'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
