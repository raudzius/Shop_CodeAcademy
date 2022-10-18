import * as React from 'react';
import { ListItem, ListItemButton, ListItemText } from '@mui/material';

import ListItemIcon from '@mui/material/ListItemIcon';
import DrawerContext from '../../../contexts/DrawerContext';

export type SidebarItemProps = {
  Icon: MuiIconComponent;
  text: string;
};

const SidebarItem: React.FC<SidebarItemProps> = ({ text, Icon }) => {
  const { open } = React.useContext(DrawerContext);

  return (
    <ListItem disablePadding sx={{ display: 'block' }}>
      <ListItemButton
        sx={{
          minHeight: 48,
          justifyContent: open ? 'initial' : 'center',
          px: 2.5,
        }}
      >
        <ListItemIcon
          sx={{
            minWidth: 0,
            mr: open ? 3 : 'auto',
            justifyContent: 'center',
          }}
        >
          <Icon />
        </ListItemIcon>
        <ListItemText primary={text} sx={{ opacity: open ? 1 : 0 }} />
      </ListItemButton>
    </ListItem>
  );
};

export default SidebarItem;
