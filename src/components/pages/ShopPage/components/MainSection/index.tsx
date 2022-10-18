import { Box, Typography } from '@mui/material';
import React from 'react';
import cupService from '../../../../../services/cup-service';
import DrawerHeader from '../DrawerHeader';

const MainSection = () => {
  const [cups, setCups] = React.useState([]);

  React.useEffect(() => {
    (async () => {
      const fetchedCups = await cupService.fetchMany();
      setCups(fetchedCups);
    })();
  }, []);

  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
      <DrawerHeader />
      <Typography component="pre">{JSON.stringify(cups, null, 4)}</Typography>
    </Box>
  );
};

export default MainSection;
