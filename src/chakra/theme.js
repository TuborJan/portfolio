import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  styles: {
    global: {
      body: {
        margin: 0,
      },
    },
  },
  breakpoints: {
    sm: '320px',
    md: '769px',
    lg: '960px',
    xl: '1200px',
    '2xl': '1440px',
  },
  colors: {
    text: {
      100: '#595959',
      200: '#404040',
      300: '#e7eaef',
      400: '#7898e2',
    },
    background: {
      100: '#F2F2F2',
      200: '#E2E2E2',
      300: '#1A202C',
      400: '#2F3750',
    },
  },
  fonts: {
    body: `Roboto, sans-serif`,
    heading: `Roboto, sans-serif`,
  },
});

export default theme;
