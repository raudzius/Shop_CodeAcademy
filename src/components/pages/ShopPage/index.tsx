import * as React from 'react';
import { Box } from '@mui/material';

import ApplicationBar from './components/ApplicationBar';
import Sidebar from './components/Sidebar';
import MainSection from './components/MainSection';

const drawerWidth = 240;

const ShopPage = () => {
  const [open, setOpen] = React.useState(false);

  const drawerOpen = () => setOpen(true);
  const drawerClose = () => setOpen(false);

  return (
    <Box sx={{ display: 'flex' }}>
      <ApplicationBar
        ApplicationBarContainerProps={{ drawerWidth }}
        open={open}
        drawerOpen={drawerOpen}
      />
      <Sidebar SidebarContainerProps={{ drawerWidth }} open={open} drawerClose={drawerClose} />
      <MainSection />
    </Box>
  );
};

export default ShopPage;
