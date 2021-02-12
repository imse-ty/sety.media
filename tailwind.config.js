module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: ['Poppins']
    },
    extend: {
      colors: {
        frameworkGray: '#1D1D26',
        outlineWhite: '#F5F5F5',
        wireframeRed: '#DD1444'
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
};
