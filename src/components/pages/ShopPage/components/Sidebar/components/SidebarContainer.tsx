import { Drawer, styled } from '@mui/material';

const SidebarContainer = styled(Drawer)(({ theme, open }) => {
  const drawerMixin = theme.mixins.drawer[open ? 'openedMixin' : 'closedMixin'];

  return {
    width: theme.common.drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...drawerMixin,
    '& .MuiDrawer-paper': {
      padding: theme.spacing(3, 2),
      drawerMixin,
    },
  };
});

export default SidebarContainer;
