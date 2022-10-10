import { Box, Slider, Typography } from '@mui/material';
import * as React from 'react';
import { RangeInput, InputContainer, RangeInputProps } from './components';

type Range = [number, number];

type RangeFieldProps = {
  min?: number;
  max?: number;
  value?: Range;
};

const orderRangeASC = (range: Range) => range.sort((a, b) => a - b);

const DEFAULT_MIN = 0;
const DEFAULT_MAX = 100;
const DEFAULT_RANGE: Range = [DEFAULT_MIN, DEFAULT_MAX];

const RangeField: React.FC<RangeFieldProps> = ({ min, max, value = DEFAULT_RANGE }) => {
  const [bounds, setBounds] = React.useState<Range>(DEFAULT_RANGE);
  const [privateValue, setPrivateValue] = React.useState<Range>(DEFAULT_RANGE);
  const [privateMin, privateMax] = privateValue;
  const [lowerBound, higherBound] = bounds;

  const valueInRange = (newValue: number) => newValue <= higherBound && newValue >= lowerBound;

  const handleMinValueChange: RangeInputProps['onBlur'] = (e, newMinValue) => {
    const newValue = orderRangeASC([newMinValue, privateMax]);
    setPrivateValue(newValue);
  };

  const handleMaxValueChange: RangeInputProps['onBlur'] = (e, newMaxValue) => {
    const newValue = orderRangeASC([privateMin, newMaxValue]);
    setPrivateValue(newValue);
  };

  const calcInitialBounds = (): Range => {
    const [minVal, maxVal] = orderRangeASC(value);
    const initialBounds: Range = [min || minVal, max || maxVal];
    return initialBounds;
  };

  React.useEffect(() => {
    const initialBounds = calcInitialBounds();
    const initialPrivateValue = orderRangeASC(value) || initialBounds;
    setBounds(initialBounds);
    setPrivateValue(initialPrivateValue);
  }, []);

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
        <Slider
          value={privateValue}
          min={lowerBound}
          max={higherBound}
          onChange={(_, newValue) => setPrivateValue(newValue as Range)}
          onChangeCommitted={(_, newValue) => console.log(newValue)}
        />
      </Box>
    </Box>
  );
};

export default RangeField;
