import * as React from 'react';
import { FilledInput, FilledInputProps } from '@mui/material';

type RangeInputProps = Omit<FilledInputProps, 'size'>;

const RangeInput: React.FC<RangeInputProps> = ({ sx = [], ...props }) => (
  <FilledInput
    size="small"
    sx={[
      {
        flexGrow: 1,
        input: { pt: 1 },
      },
      ...(sx instanceof Array ? sx : [sx]),
    ]}
    {...props}
  />
);

export default RangeInput;
