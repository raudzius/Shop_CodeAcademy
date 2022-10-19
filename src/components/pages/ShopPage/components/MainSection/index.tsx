import React from 'react';
import { Box, Typography } from '@mui/material';
import ApiService, { Cup } from '../../../../../services/api-service';
import DrawerHeader from '../DrawerHeader';

const MainSection = () => {
  const [cups, setCups] = React.useState<Cup[]>([]);

  React.useEffect(() => {
    (async () => {
      const fetchedCups = await ApiService.fetchMany('cups');
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
