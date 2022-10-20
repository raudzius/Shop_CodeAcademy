import { createTheme } from '@mui/material';

const baseTheme = createTheme({
  common: {
    drawerWidth: 297,
  },
});

const {
  transitions,
  common,
} = baseTheme;

const theme = createTheme(baseTheme, {
  mixins: {
    drawer: {
      openedMixin: {
        width: common.drawerWidth,
        transition: transitions.create('width', {
          easing: transitions.easing.sharp,
          duration: transitions.duration.enteringScreen,
        }),
        overflowX: 'hidden',
      },

      closedMixin: {
        transition: transitions.create('width', {
          easing: transitions.easing.sharp,
          duration: transitions.duration.leavingScreen,
        }),
        overflowX: 'hidden',
        width: 0,
      },
    },
  },
  zIndex: {
    drawer: 1100,
    drawerButton: 1150,
    appBar: 1200,
  },
});

export default theme;
