import React from 'react';
import { ThemeProvider } from '@emotion/react';
import theme from '../components/theme';
import GlobalStyles from '../components/GlobalStyles';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
    <GlobalStyles />
      <Story />
    </ThemeProvider>
  ),
];