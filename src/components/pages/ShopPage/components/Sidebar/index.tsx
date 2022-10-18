import * as React from 'react';
import { List, Divider, IconButton } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

import SidebarContainer from './components/SidebarContainer';
import DrawerHeader from '../DrawerHeader';
import SidebarItem, { SidebarItemProps } from './components/SidebarItem';
import DrawerContext from '../../contexts/DrawerContext';

type MenuItemData = Pick<SidebarItemProps, 'text' | 'Icon'>;

const userMenuItemsData: MenuItemData[] = [
  { text: 'Inbox', Icon: InboxIcon },
  { text: 'Starred', Icon: MailIcon },
  { text: 'Send email', Icon: InboxIcon },
  { text: 'Drafts', Icon: MailIcon },
];

const adminMenuItemsData: MenuItemData[] = [
  { text: 'All mail', Icon: InboxIcon },
  { text: 'Trash', Icon: MailIcon },
  { text: 'Spam', Icon: InboxIcon },
];

const Sidebar: React.FC = () => {
  const { open, closeDrawer } = React.useContext(DrawerContext);

  return (
    <SidebarContainer variant="permanent" open={open}>
      <DrawerHeader>
        <IconButton onClick={closeDrawer}>
          <ChevronLeftIcon />
        </IconButton>
      </DrawerHeader>
      <Divider />
      <List>
        {userMenuItemsData.map((menuItemData) => (
          <SidebarItem key={menuItemData.text} {...menuItemData} />
        ))}
      </List>
      <Divider />
      <List>
        {adminMenuItemsData.map((menuItemData) => (
          <SidebarItem key={menuItemData.text} {...menuItemData} />
        ))}
      </List>
    </SidebarContainer>
  );
};

export default Sidebar;
