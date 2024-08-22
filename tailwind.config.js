module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'green':{
          '50':"#2ECC71",
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