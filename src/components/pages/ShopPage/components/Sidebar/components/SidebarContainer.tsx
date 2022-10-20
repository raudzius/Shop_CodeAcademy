import { Drawer, styled } from '@mui/material';

const SidebarContainer = styled(Drawer)(({ theme }) => ({
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    overflowX: 'hidden',
    '& .MuiDrawer-paper': {
      padding: theme.spacing(3, 2),
      width: theme.common.drawerWidth,
    },
  }));

export default SidebarContainer;
