/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-poppins)'],
      },
      fontWeight: {
        thin: 100,
        light: 300,
        regular: 400,
        semibold: 600,
        medium: 500,
        bold: 700,
      },
      colors: {
        charlestongreen: '#212B36',
        ornategrey: '#abbbc2',
        textgrey: '#7d7e81',
        lightgrey: '#c8c8c8',
        backgroundgrey: '#f3f3f3',
        ornateorange: '#f47920',
        lightornateorange:'#ffe9d9',
        darkgray: '#252733',
        backgroundorange: '#F479201A',
        bordergrey: '#dddfe5',
        slategray: '#2F4858',
        buttongrey: '#bbb',
        ornategreen: '#33C863',
        ornatelightgreen: '#33c8631a',
        ornatered: '#F9575B',
        ornatelightred: '#f7575b1a',
        gunmetal: '#2a333e',
      },
      backgroundImage: {
        'orange-shade':
          'linear-gradient(81.53deg, #F37920 17.22%, #FF9E5E 86.25%)',
      },
      borderWidth: {
        1: '1px',
      },
      spacing: {
        extrasmall: '7.5rem',
        small: '10rem',
        medium: '12.5rem',
        semimedium: '14rem',
        large: '20rem',
      },
      gridTemplateRows: {
        layout: 'repeat(36, minmax(0, 1fr))',
      },
      animation: {
        'spin-slow': 'spin 1.5s linear infinite',
      },
    },
  },
  plugins: [],
}
