import React from 'react';

type UseRangeField = (props: {
  urlParamName?: string;
  fetchRange: () => Promise<NumberRange>;
}) => [NumberRange, (newRange: NumberRange) => void, NumberRange];

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const useRangeField: UseRangeField = ({ urlParamName, fetchRange }) => {
  const [bounds, setBounds] = React.useState<NumberRange>([0, 0]);
  const [range, setRange] = React.useState<NumberRange>([0, 0]);

  React.useEffect(() => {
    (async () => {
      const fetchedRange = await fetchRange();
      setRange(fetchedRange);
      setBounds(fetchedRange);
    })();
  }, []);

  return [range, setRange, bounds];
};

export default useRangeField;
