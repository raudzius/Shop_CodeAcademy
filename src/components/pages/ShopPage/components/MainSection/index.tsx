import React from 'react';
import { Box, Typography } from '@mui/material';
import DrawerHeader from '../DrawerHeader';
import ShopContext from '../../contexts/ShopContext';

const MainSection = () => {
  const { cups } = React.useContext(ShopContext);

  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <DrawerHeader />
      <Typography sx={{ overflow: 'auto' }}>{JSON.stringify(cups, null, 4)}</Typography>
    </Box>
  );
};

export default MainSection;
