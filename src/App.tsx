import { Container } from '@mui/material';
import * as React from 'react';
import RangeField from './components/form-controls/RangeField';

const App: React.FC = () => (
  <Container sx={{ mt: 6 }}>
    <RangeField />
  </Container>
);

export default App;
