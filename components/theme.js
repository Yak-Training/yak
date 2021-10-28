import { createTheme } from '@mui/material/styles';

const typeFaces = {
  secondary: 'Inter, sans-serif',
  primary: 'Open Sans, sans-serif',
};

const colors = {
  primary: {
    main: '#1F7358',
    background: '#F4FAF8',
  },
  common: {
    black: '#18191A',
    white: '#ffffff',
  },
  secondary: {
    main: '#D5573B',
  },
};

const { primary, common, secondary } = colors;

const theme = createTheme({
  typography: {
    fontFamily: 'Inter, sans-serif',
    h1: {
      fontFamily: typeFaces.secondary,
      fontWeight: 900,
      letterSpacing: '-1px',
    },
    h2: {
      fontFamily: typeFaces.secondary,
      fontWeight: 900,
      letterSpacing: '-1px',
    },
    h3: {
      fontFamily: typeFaces.secondary,
      fontWeight: 900,
      letterSpacing: '-1px',
    },
    h4: {
      fontFamily: typeFaces.secondary,
      fontWeight: 900,
      letterSpacing: '-1px',
    },
    h5: {
      fontFamily: typeFaces.secondary,
      fontWeight: 900,
      letterSpacing: '-1px',
    },
    h6: {
      fontFamily: typeFaces.secondary,
      fontWeight: 900,
    },
    subtitle1: {
      fontFamily: typeFaces.secondary,
      fontWeight: 900,
    },
    subtitle2: {
      fontFamily: typeFaces.secondary,
      fontWeight: 900,
    },
    body1: {
      fontFamily: typeFaces.primary,
    },
    body2: {
      fontFamily: typeFaces.primary,
    },
    button: {
      fontFamily: typeFaces.secondary,
      fontWeight: 900,
    },
    caption: {
      fontFamily: typeFaces.secondary,
      fontWeight: 900,
    },
    overline: {
      fontFamily: typeFaces.secondary,
      fontWeight: 900,
    },
  },
  palette: {
    primary: {
      main: primary.main,
      background: primary.background,
    },
    common: {
      black: common.black,
      white: common.white,
    },
    secondary: {
      main: secondary.main,
    },
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: common.white,
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          padding: '24px',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '30px',
          padding: '8px 24px',
          '&:hover': {
            boxShadow: 'none',
          },
          boxShadow: 'none',
        },
      },
    },
  },
});

export default theme;
