import * as React from 'react';
import { Box } from '@mui/material';

import ApplicationBar from './components/ApplicationBar';
import Sidebar from './components/Sidebar';
import MainSection from './components/MainSection';

const ShopPage = () => {
  const [open, setOpen] = React.useState(false);

  const drawerOpen = () => setOpen(true);
  const drawerClose = () => setOpen(false);

  return (
    <Box sx={{ display: 'flex' }}>
      <ApplicationBar open={open} drawerOpen={drawerOpen} />
      <Sidebar open={open} drawerClose={drawerClose} />
      <MainSection />
    </Box>
  );
};

export default ShopPage;
