import * as React from 'react';
import { Toolbar, Typography } from '@mui/material';
import ApplicationBarContainer from './ApplicationBarContainer';
import DrawerContext from '../../contexts/DrawerContext';

const ApplicationBar: React.FC = () => {
  const { open } = React.useContext(DrawerContext);

  return (
    <ApplicationBarContainer position="fixed" open={open}>
      <Toolbar>
        <Typography variant="h6" noWrap component="div">
          Mini variant drawer
        </Typography>
      </Toolbar>
    </ApplicationBarContainer>
  );
};

export default ApplicationBar;
