import * as React from 'react';
import { Box } from '@mui/material';

import ApplicationBar from './components/ApplicationBar';
import Sidebar from './components/Sidebar';
import MainSection from './components/MainSection';
import DrawerContext from './contexts/DrawerContext';

const ShopPage = () => {
  const [open, setOpen] = React.useState(false);

  const drawerContextValue = React.useMemo(
    () => ({
      open,
      openDrawer: () => setOpen(true),
      closeDrawer: () => setOpen(false),
    }),
    [open],
  );

  return (
    <DrawerContext.Provider value={drawerContextValue}>
      <Box sx={{ display: 'flex' }}>
        <ApplicationBar />
        <Sidebar />
        <MainSection />
      </Box>
    </DrawerContext.Provider>
  );
};

export default ShopPage;
