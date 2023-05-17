/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      spacing :{
        '112' : '28rem',
        '128': '32rem', // following the standard of 128 / 4 = 32
        '144' : '36rem',
        '160' : '40rem',
        '176' : '44rem',
        '192' : '48rem',
        '208' : '52rem',
        '224' : '56rem',
        '240' : '60rem',
        '256' : '64rem',
        '272' : '68rem',
        '288' : '72rem',
        '304':'76rem',
 '320': '80rem',
 '336' : '84rem',
 '352' : '88rem',
 '368' : '92rem',
 '384' : '96rem',
'400' : '100rem',
'416' : '104rem',
'432' : '108rem',
'448' : '112rem',
      },
    },
  },
  plugins: [],
}
