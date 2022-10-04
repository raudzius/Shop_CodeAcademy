import * as React from 'react';
import CustomCheckboxGroup from './components/form-controls/CustomCheckboxGroup';

const App: React.FC = () => (
  <CustomCheckboxGroup
    formLabel="Hobbies"
    name="hobby"
    options={[
      { value: '1', label: 'basketball' },
      { value: '2', label: 'football' },
      { value: '3', label: 'rugby' },
      { value: '4', label: 'tennis' },
    ]}
    value={[
      { value: '1', label: 'basketball' },
      { value: '2', label: 'football' },
    ]}
    onChange={(e, selectedOptions) => console.log(selectedOptions)}
  />
);

export default App;
