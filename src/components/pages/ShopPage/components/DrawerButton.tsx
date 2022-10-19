import { IconButton } from '@mui/material';
import React from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import DrawerContext from '../contexts/DrawerContext';

const DrawerButton: React.FC = () => {
  const { openDrawer } = React.useContext(DrawerContext);

  return (
    <IconButton
      color="inherit"
      aria-label="open drawer"
      onClick={openDrawer}
      sx={{
        position: 'fixed',
        bottom: 20,
        right: 20,
        bgcolor: 'primary.main',
        borderRadius: 1,
        ':hover': {
          color: 'common.white',
          bgcolor: 'primary.dark',
        },
      }}
    >
      <MenuIcon />
    </IconButton>
  );
};

export default DrawerButton;
