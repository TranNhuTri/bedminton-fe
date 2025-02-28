'use client';
import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          textTransform: 'none',
        },
        sizeMedium: {
          fontSize: 16,
          minHeight: 40,
          padding: '4px 12px',
        },
        containedPrimary: {
          backgroundColor: 'var(--color-primary-500)',
          color: 'var(--color-white)',
        },
        containedSecondary: {
          backgroundColor: 'var(--color-gray-500)',
          color: 'var(--color-white)',
        },
        outlinedPrimary: {
          backgroundColor: 'var(--color-primary-50)',
          color: 'var(--color-primary-500)',
          outline: 'none',
          border: 'none',
        },
        outlinedSecondary: {
          backgroundColor: 'var(--color-gray-50)',
          color: 'var(--color-gray-500)',
          outline: 'none',
          border: 'none',
        },
        textPrimary: {
          backgroundColor: 'var(--color-white)',
          color: 'var(--color-primary-500)',
        },
        textSecondary: {
          backgroundColor: 'var(--color-white)',
          color: 'var(--color-gray-500)',
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          backgroundColor: 'var(--color-white)',
          borderRadius: 12,
          color: 'var(--color-gray-500)',
          height: 40,
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: 'var(--color-gray-200)',
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: 'var(--color-primary-500)',
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: 'var(--color-primary-500)',
          },
        },
        input: {
          padding: '4px 12px',
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
