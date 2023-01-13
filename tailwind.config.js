// import defaultTheme from 'tailwindcss/defaultTheme'

module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      xxl: '1600px'
    },
    extend: {
      colors: {}
    }
  },
  plugins: []
}
