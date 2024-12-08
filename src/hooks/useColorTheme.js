import { createTheme } from '@mui/material/styles';
import { useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { themeSelectors, themeSlice } from '../redux';

const colors = {
  deepCerulean: {
    DEFAULT: '#087EA4',
    50: '#6CD6F8',
    100: '#58D0F7',
    200: '#31C5F5',
    300: '#0CBAF2',
    400: '#0A9CCB',
    500: '#087EA4',
    600: '#05556F',
    700: '#032C39',
    800: '#000304',
    900: '#000000',
  },
  white: {
    DEFAULT: '#fff',
  },
  black: {
    DEFAULT: 'rgba(0, 0, 0, 0.87)',
  },
  torchRed: {
    DEFAULT: '#FF1744',
    50: '#FFCFD8',
    100: '#FFBAC8',
    200: '#FF91A7',
    300: '#FF6986',
    400: '#FF4065',
    500: '#FF1744',
    600: '#DE002B',
    700: '#A60020',
    800: '#6E0015',
    900: '#36000A',
    950: '#1A0005',
  },
  contrastText: '#fff',
  dark: '#032C39',
  light: '#0CBAF2',
  main: '#087EA4',
};

const breakpointsTokens = {
  xs: 0,
  sm: 576,
  md: 768,
  lg: 1024,
  xl: 1440,
};

const themeSettings = mode => {
  return {
    breakpoints: {
      values: breakpointsTokens,
    },
    palette: {
      mode: mode,
      ...(mode !== 'dark'
        ? {
            primary: {
              contrastText: colors.white.DEFAULT,
              dark: colors.deepCerulean[600],
              light: colors.deepCerulean[300],
              main: colors.deepCerulean.DEFAULT,
            },
            error: {
              main: colors.torchRed[600],
            },
          }
        : {
            primary: {
              contrastText: colors.black.DEFAULT,
              dark: colors.deepCerulean.DEFAULT,
              light: colors.deepCerulean[200],
              main: colors.deepCerulean[300],
            },
            error: {
              main: colors.torchRed.DEFAULT,
            },
          }),
    },
  };
};

export const useColorTheme = () => {
  const mode = useSelector(themeSelectors.selectThemeMode);
  const dispatch = useDispatch();

  const setMode = useMemo(
    () => ({
      toggleThemeMode: () =>
        dispatch(
          themeSlice.changeThemeMode(mode !== 'dark' ? 'dark' : 'light')
        ),
    }),
    [dispatch, mode]
  );
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);

  return { theme, mode, setMode };
};
