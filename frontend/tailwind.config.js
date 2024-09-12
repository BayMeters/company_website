module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'green':{
          '50':"#2ECC71",
          // '50':"#003D2D",
          '100':"#1C7E61",
        }
      },
      fontFamily: {
        'anek': ['"Anek Odia"', 'sans-serif'],
      },
      flex: {
        '2': '2 2 0%'
      }
    },
  },
  plugins: [],
}