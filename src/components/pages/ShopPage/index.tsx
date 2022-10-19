import * as React from 'react';
import { Box } from '@mui/material';

import ApplicationBar from './components/ApplicationBar';
import Sidebar from './components/Sidebar';
import MainSection from './components/MainSection';
import { DrawerProvider } from './contexts/DrawerContext';
import { ShopContextProvider } from './contexts/ShopContext';

const ShopPage = () => (
  <ShopContextProvider>
    <DrawerProvider>
      <Box sx={{ display: 'flex' }}>
        <ApplicationBar />
        <Sidebar />
        <MainSection />
      </Box>
    </DrawerProvider>
  </ShopContextProvider>
);

export default ShopPage;
