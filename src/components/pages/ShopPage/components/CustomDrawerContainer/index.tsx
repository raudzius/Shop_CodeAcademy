import { Box } from '@mui/material';
import React from 'react';
import CustomDrawer from './components/CustomDrawer';

type CustomDrawerContainerProps = {
  drawerWidth: number;
  mobileOpen: boolean;
  handleDrawerToggle: VoidFunction;
};

const CustomDrawerContainer: React.FC<CustomDrawerContainerProps> = ({
  drawerWidth,
  mobileOpen,
  handleDrawerToggle,
}) => (
  <Box
    component="nav"
    sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
    aria-label="mailbox folders"
  >
    {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
    <CustomDrawer
      variant="temporary"
      open={mobileOpen}
      onClose={handleDrawerToggle}
      ModalProps={{
        keepMounted: true, // Better open performance on mobile.
      }}
      sx={{
        display: { xs: 'block', sm: 'none' },
        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
      }}
    />
    <CustomDrawer
      variant="permanent"
      sx={{
        display: { xs: 'none', sm: 'block' },
        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
      }}
      open
    />
  </Box>
);

export default CustomDrawerContainer;
