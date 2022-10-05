import {
 Box, Slider, Typography,
} from '@mui/material';
import * as React from 'react';
import { RangeInput, InputContainer } from './components';

const RangeField: React.FC = () => (
  <Box sx={{ width: 300 }}>
    <InputContainer>
      <RangeInput />
      <Typography>to</Typography>
      <RangeInput />
    </InputContainer>
    <Box sx={{ mx: 2 }}>
      <Slider value={[75, 120]} min={15} max={150} />
    </Box>
  </Box>
);

export default RangeField;
