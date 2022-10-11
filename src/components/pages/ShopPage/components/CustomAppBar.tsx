import React from 'react';
import {
 AppBar, IconButton, Toolbar, Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

type CustomAppBarProps = {
  drawerWidth: number;
  handleDrawerToggle: VoidFunction;
};

const CustomAppBar: React.FC<CustomAppBarProps> = ({ drawerWidth, handleDrawerToggle }) => (
  <AppBar
    position="fixed"
    sx={{
      width: { sm: `calc(100% - ${drawerWidth}px)` },
      ml: { sm: `${drawerWidth}px` },
    }}
  >
    <Toolbar>
      <IconButton
        color="inherit"
        aria-label="open drawer"
        edge="start"
        onClick={handleDrawerToggle}
        sx={{ mr: 2, display: { sm: 'none' } }}
      >
        <MenuIcon />
      </IconButton>
      <Typography variant="h6" noWrap component="div">
        Responsive drawer
      </Typography>
    </Toolbar>
  </AppBar>
);

export default CustomAppBar;
