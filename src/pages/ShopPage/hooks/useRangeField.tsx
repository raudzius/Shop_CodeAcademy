import React from 'react';
import { useSearchParams } from 'react-router-dom';

type UseRangeField = (props: {
  urlParamName?: string;
  fetchRange: () => Promise<NumberRange>;
}) => [NumberRange, (newRange: NumberRange) => void, NumberRange];

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const useRangeField: UseRangeField = ({ urlParamName, fetchRange }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [bounds, setBounds] = React.useState<NumberRange>([0, 0]);
  const [range, setRange] = React.useState<NumberRange>([0, 0]);

  React.useEffect(() => {
    (async () => {
      const fetchedRange = await fetchRange();
      setRange(fetchedRange);
      setBounds(fetchedRange);
    })();
  }, []);

  React.useEffect(() => {
    setSearchParams({
      price_gte: String(range[0]),
      price_lte: String(range[1]),
    });
  }, [range]);

  return [range, setRange, bounds];
};

export default useRangeField;
