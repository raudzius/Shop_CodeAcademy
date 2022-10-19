import * as React from 'react';
import { Box, IconButton } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import SidebarContainer from './components/SidebarContainer';
import DrawerHeader from '../DrawerHeader';
import DrawerContext from '../../contexts/DrawerContext';
import ShopContext from '../../contexts/ShopContext';

const Sidebar: React.FC = () => {
  const { open, closeDrawer } = React.useContext(DrawerContext);
  const { filters } = React.useContext(ShopContext);

  return (
    <SidebarContainer variant="permanent" open={open}>
      <DrawerHeader>
        <IconButton onClick={closeDrawer}>
          <ChevronLeftIcon />
        </IconButton>
      </DrawerHeader>
      <Box component="pre">{JSON.stringify(filters, null, 4)}</Box>
    </SidebarContainer>
  );
};

export default Sidebar;
