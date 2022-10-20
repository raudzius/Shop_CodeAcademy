import React from 'react';
import { Box, Typography } from '@mui/material';
import DrawerHeader from '../DrawerHeader';
import ShopContext from '../../contexts/ShopContext';

type MainSectionProps = {
  isExtendedLayout: boolean;
};

const MainSection: React.FC<MainSectionProps> = ({ isExtendedLayout }) => {
  const { cups } = React.useContext(ShopContext);

  return (
    <Box
      component="main"
      sx={(theme) => ({
        flexGrow: 1,
        p: 3,
        ...(isExtendedLayout && { ml: `${theme.common.drawerWidth.md}px` }),
      })}
    >
      <DrawerHeader />
      <Typography sx={{ overflow: 'auto' }}>{JSON.stringify(cups, null, 4)}</Typography>
    </Box>
  );
};

export default MainSection;
