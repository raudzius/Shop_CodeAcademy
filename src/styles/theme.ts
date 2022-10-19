import { createTheme } from '@mui/material';

const baseTheme = createTheme({
  common: {
    drawerWidth: 320,
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
});

export default theme;
