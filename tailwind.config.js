/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      'sm': '300px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        'regal-blue': '#243c5a',
        'bg-lite': '#FAFAFA',
        'bg-white': '#FFF',
        'bg-dark': '#202D36',
        'bg-card': '#2B3743',
        'tx-lite': '#0D0D0D',
        'tx-dark': '#FFF'
      },
      fontSize: {
        logo: ['24px', {
          letterSpacing: '-0.01em',
          lineHeight: '33px',
        }],
        mode: ['16px', '22px'],
        select: ['14px', '19px'],
        titleCard: ['18px', '25px'],
        titleDetail: ['31px', '42px'],
      },
      gridTemplateColumns: {
        '4': 'repeat(4, minmax(0, 264px))',
        '3': 'repeat(3, minmax(0, 264px))',
        '2': 'repeat(2, minmax(0, 264px))',
        '1': 'repeat(1, minmax(0, 264px))',
      }
    },
  }
}