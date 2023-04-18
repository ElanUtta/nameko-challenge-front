module.exports = {
  content: ['./src/**/*.html', './src/**/*.svelte'],
  theme: {
    fontSize: {
      sm: ['14px', '20px'],
      base: ['16px', '24px'],
      xl: ['24px', '32px'],
      lg: ['1.125rem', {
        lineHeight: '1.5rem',
        letterSpacing: '-0.02em',
        fontWeight: '400',
      }],
      '4xl': ['35px', {
        lineHeight: '35px',
        letterSpacing: '-0.02em',
        fontWeight: '400',
      }]
    },
    extend: {
      colors: {
        'ghostWhite': '#FDFDFE',
        'ghostWhite-50': '#FCFCFD',
        'ghostWhite-100': '#F3F1FE',
        'purpleHeart-600':'#3F25C8',
        'lavendergrey-500':'#C3C1D7',
        'MediumSlateBlue-500':'#745CF1',
        'cornFlowerBlue-500':'#474374',
      },
      boxShadow: {
        'button': '0px 4px 4px rgba(0, 0, 0, 0.25)',
        'unitInfo': '0px 4px 16px rgba(0, 0, 0, 0.1)'
      },
      fontFamily: {
        amplitudeWide: ['AmplitudeWide', 'sans-serif'],
        amplitudeWideBook: ['AmplitudeWideBook', 'sans-serif'],
        amplitudeWideMedium: ['AmplitudeWideMedium', 'sans-serif']
      },
      width: {
        '35':  '140px',
        '46': '181px',
        '102': '410px',
        '108': '30rem',
         
      },
      height: {
        '18': '4.5rem'
      },
      maxWidth: {
        'base': '844px'
      }
    },
  },
  plugins: [],
}
