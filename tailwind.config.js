/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        sm: ['14px', '20px'],
      },
      colors: {
        'green': '#119E09',
        'deep-green': '#119E09',
        'light-green': '#D5F2D4',
        'purple':'#563D8E',
        'blue': '#01A1CF',
        'shadow-green': '#D5F2D4',
        'color1':'#3FD494',
        'color2':'#0CE301'
      },
      backgroundImage: {
        'hero': "url('/assets/images/banner.png')"
      },
      spacing: {
        '0.25': "1px",
        '128': '32rem',
        '144': '36rem',
        '148': '38rem',
        '150': '40rem',
        '160': '45rem',
        '165': '50rem',
        '170': '60rem',
        '175': '70rem',
        '185': '80rem'
      },
      borderSpacing: {
        '1': "1px"
      },
      letterSpacing: {
        tightest: '-.075em',
        tighter: '-.05em',
        tight: '-.025em',
        normal: '0',
        wide: '.025em',
        wider: '.05em',
        widest: '.5em',
        widest: '1em',
      }
      
      
    },
  },
  plugins: [],
}