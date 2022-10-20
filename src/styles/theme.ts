import { createTheme } from '@mui/material';

const theme = createTheme({
  common: {
    drawerWidth: {
      xs: 297,
      sm: 320,
      md: 340,
      lg: 360,
      xl: 460,
    },
  },
  zIndex: {
    drawer: 1100,
    drawerButton: 1150,
    appBar: 1200,
  },
});

export default theme;
