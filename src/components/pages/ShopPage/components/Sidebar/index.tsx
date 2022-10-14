import * as React from 'react';
import { List, Divider, IconButton } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

import SidebarContainer, { type SidebarContainerProps } from './components/SidebarContainer';
import DrawerHeader from '../DrawerHeader';
import SidebarItem, { SidebarItemProps } from './components/SidebarItem';

type MenuItemData = Pick<SidebarItemProps, 'text' | 'Icon'>;

type SidebarProps = {
  SidebarContainerProps: Omit<SidebarContainerProps, 'open' | 'variant'>;
  open: boolean;
  drawerClose: VoidFunction;
};

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

const Sidebar: React.FC<SidebarProps> = ({ SidebarContainerProps, open, drawerClose }) => (
  <SidebarContainer variant="permanent" open={open} {...SidebarContainerProps}>
    <DrawerHeader>
      <IconButton onClick={drawerClose}>
        <ChevronLeftIcon />
      </IconButton>
    </DrawerHeader>
    <Divider />
    <List>
      {userMenuItemsData.map((menuItemData) => (
        <SidebarItem {...menuItemData} open={open} />
      ))}
    </List>
    <Divider />
    <List>
      {adminMenuItemsData.map((menuItemData) => (
        <SidebarItem {...menuItemData} open={open} />
      ))}
    </List>
  </SidebarContainer>
);

export default Sidebar;
