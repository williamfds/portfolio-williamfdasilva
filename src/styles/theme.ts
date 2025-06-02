import { extendTheme } from '@chakra-ui/theme-utils';
import type { ThemeConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false,
};

const colors = {
  brand: {
    50:  '#f5f7ff',
    100: '#e0e5ff',
    200: '#b3bcff',
    300: '#8092ff',
    400: '#4d69ff',
    500: '#3b50e6',
    600: '#2f3bbb',
    700: '#232c8f',
    800: '#171e63',
    900: '#0c0f37',
  },
};

const fonts = {
  heading: `'Inter', sans-serif`,
  body:    `'Inter', sans-serif`,
};

const theme = extendTheme({ config, colors, fonts });

export default theme;
