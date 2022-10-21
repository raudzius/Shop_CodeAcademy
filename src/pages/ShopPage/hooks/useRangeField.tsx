import React from 'react';

type UseRangeField = () => [NumberRange, (newRange: NumberRange) => void, NumberRange];

const useRangeField: UseRangeField = () => {
  const [range, setRange] = React.useState<NumberRange>([17, 50]);

  return [range, setRange, [0, 100]];
};

export default useRangeField;
