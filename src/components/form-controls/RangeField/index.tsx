import { Box, Slider, Typography } from '@mui/material';
import * as React from 'react';
import { RangeInput, InputContainer, RangeInputProps } from './components';

type RangeFieldProps = {
  min?: number;
  max?: number;
};

type RangeInputBlurHandler = RangeInputProps['onBlur'];

const RangeField: React.FC<RangeFieldProps> = ({ min = 0, max = 100 }) => {
  const [privateValue, setPrivateValue] = React.useState<[number, number]>([min, max]);
  const [privateMin, privateMax] = privateValue;

  const valueInRange = (newValue: number) => newValue <= max && newValue >= min;

  const handleMinValueChange: RangeInputBlurHandler = (e, newMinValue) => {
    setPrivateValue([newMinValue, privateMax]);
  };

  const handleMaxValueChange: RangeInputBlurHandler = (e, newMaxValue) => {
    setPrivateValue([privateMin, newMaxValue]);
  };

  return (
    <Box sx={{ width: 300 }}>
      <InputContainer>
        <RangeInput
          value={privateMin}
          onBlur={handleMinValueChange}
          newValueIsValid={valueInRange}
        />
        <Typography>to</Typography>
        <RangeInput
          value={privateMax}
          onBlur={handleMaxValueChange}
          newValueIsValid={valueInRange}
        />
      </InputContainer>
      <Box sx={{ mx: 3 }}>
        <Slider value={privateValue} min={min} max={max} />
      </Box>
    </Box>
  );
};

export default RangeField;
