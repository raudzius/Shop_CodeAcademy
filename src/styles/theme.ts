import { createTheme } from '@mui/material';

const baseTheme = createTheme({
  common: {
    drawerWidth: 297,
  },
});

const theme = createTheme(baseTheme, {
  zIndex: {
    drawer: 1100,
    drawerButton: 1150,
    appBar: 1200,
  },
});

export default theme;
