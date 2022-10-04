import {
 Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel,
} from '@mui/material';
import React from 'react';

type CheckboxOption = {
  value: string;
  label: string;
  checked?: boolean;
};

type CheckboxGroupProps = {
  formLabel: string;
  name: string;
  options: CheckboxOption[];
  value?: CheckboxOption[];
  onChange?: (e: React.ChangeEvent<HTMLInputElement>, value: CheckboxOption[]) => void;
};

type MutateOptions = (currentValue: CheckboxOption[], checkboxValue: string) => CheckboxOption[];

const CustomCheckboxGroup: React.FC<CheckboxGroupProps> = ({
  formLabel,
  name,
  options,
  value,
  onChange,
}) => {
  const selectedValues = value && value.map((option) => option.value);

  const createAppendedValue: MutateOptions = (currentValue, checkboxValue) => {
    const copy = [...currentValue];
    const newOption = options.find((option) => option.value === checkboxValue);
    if (newOption) {
      copy.push(newOption);
    }
    return copy;
  };

  const createReducedValue: MutateOptions = (currentValue, checkboxValue) => currentValue
  .filter((option) => option.value !== checkboxValue);

  const handleRadioChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    checked: boolean,
    checkboxValue: string,
  ) => {
    const componentIsControlled = value && onChange;

    if (componentIsControlled) {
      const newValue: CheckboxOption[] = checked
        ? createAppendedValue(value, checkboxValue)
        : createReducedValue(value, checkboxValue);
      onChange(e, newValue);
    }
  };

  return (
    <FormControl sx={{ m: 3 }} component="fieldset" variant="standard">
      <FormLabel component="legend" sx={{ letterSpacing: '0.05em', mb: 1 }}>
        {formLabel}
      </FormLabel>
      <FormGroup sx={{ px: 2 }}>
        {options.map((option) => (
          <FormControlLabel
            key={option.value}
            control={(
              <Checkbox
                name={name}
                value={option.value}
                checked={selectedValues?.includes(option.value)}
                onChange={(e, newChecked) => handleRadioChange(e, newChecked, option.value)}
              />
            )}
            label={option.label}
          />
        ))}
      </FormGroup>
    </FormControl>
  );
};

export default CustomCheckboxGroup;
