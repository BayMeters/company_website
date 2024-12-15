module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'green':{
          '50':"#2ECC71",
          '950':"#f0fdf4"
        },
        'navy':{
          '800':"#1B3139"
        },
        'light':{
          '100':'#f9f7f4'
        },
        'yellow':{
          '100':'#ffc83a'
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

