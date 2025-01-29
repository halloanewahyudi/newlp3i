// tailwind config
module.exports = {
    theme: {
      extend: {
        container: {
          center: true,
          padding: {
            DEFAULT: '1rem',
            sm: '2rem',
            lg: '4rem',
            xl: '5rem',
            '2xl': '6rem'
          }
        },
        colors: {
          primary: {
            DEFAULT: '#004269',
            50: '#eef9ff',
            100: '#dcf3ff',
            200: '#b2e9ff',
            300: '#6dd8ff',
            400: '#20c5ff',
            500: '#00aeff',
            600: '#008bdf',
            700: '#006eb4',
            800: '#005d94',
            900: '#004269',
            950: '#003151'
          },
          secondary: '#009da5',
          tertiary: '#ff4e5d'
        }
      }
    },
    plugins: []
  }
  