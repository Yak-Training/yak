import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from '../components/theme';
import Head from '../components/Head';

const MyApp = ({ Component, props }) => (
  <>
    <Head />
    <CssBaseline />
    <ThemeProvider theme={theme}>
      <Component {...props} />
    </ThemeProvider>
  </>
);

MyApp.propTypes = {
  Component: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
  props: PropTypes.shape({}),
};

MyApp.defaultProps = {
  props: null,
};

export default MyApp;
