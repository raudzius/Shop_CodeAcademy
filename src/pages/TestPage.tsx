import { Box, Container } from '@mui/material';
import React from 'react';
import RangeField from '../components/form-controls/RangeField';

const TestPage: React.FC = () => {
  const [priceRange, setPriceRange] = React.useState<NumberRange>([175, 280]);

  return (
    <Container sx={{ mt: 6 }}>
      <Box component="pre">{JSON.stringify(priceRange, null, 4)}</Box>
      <RangeField
        value={priceRange}
        onChangeCommitted={(_, newPriceRange) => setPriceRange(newPriceRange)}
      />
    </Container>
  );
};

export default TestPage;
