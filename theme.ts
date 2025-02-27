'use client';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },
  },
  cssVariables: true,
  palette: {
    primary: {
      50: '#FCF3E9',
      100: '#F9E6D3',
      200: '#F3CEA7',
      300: '#EEB57C',
      400: '#E89D50',
      500: '#E28424',
      600: '#B56A1D',
      700: '#884F16',
      800: '#5A350E',
      900: '#2D1A07',
      A100: '#E28424',
      A200: '#E28424',
      A400: '#E28424',
      A700: '#E28424',
    },
    secondary: {
      50: '#F5F5F5',
      100: '#F0F0F0',
      200: '#D9D9D9',
      300: '#BFBFBF',
      400: '#8C8C8C',
      500: '#595959',
      600: '#434343',
      700: '#262626',
      800: '#1F1F1F',
      900: '#141414',
      A100: '#595959',
      A200: '#595959',
      A400: '#595959',
      A700: '#595959',
    },
  },
  typography: {
    fontFamily: 'var(--font-nunito-sans)',
  },
});

export default theme;
