import React from 'react';
import ApiService from '../../../services/api-service';
import { CheckboxOption } from '../../../components/form-controls/CustomCheckboxGroup';

type RangeFilter = {
  bounds: NumberRange;
  currentRange: NumberRange;
  urlParamName: string;
  onChangeCommitted: (newRange: NumberRange) => void;
};

type CheckboxFilter = {
  options: CheckboxOption[];
  selectedOptions: CheckboxOption[];
  urlParamName: string;
  onChange: (newSelectedOptions: CheckboxOption[]) => void;
};

type Filters = {
  price: RangeFilter;
  categories: CheckboxFilter;
  materialTypes: CheckboxFilter;
};

type ShopContextValue = {
  cups: Cup[];
  filters: Filters;
};

const ShopContext = React.createContext({} as ShopContextValue);

export const ShopContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cups, setCups] = React.useState<Cup[]>([]);
  const [filters, setFilters] = React.useState<Filters>({
    price: {
      bounds: [0, 0],
      currentRange: [0, 0],
      urlParamName: 'price',
      onChangeCommitted: (newCurrentRange) => {
        console.log(newCurrentRange);
      },
    },
    categories: {
      options: [],
      selectedOptions: [],
      urlParamName: 'categories',
      onChange: (newSelectedOptions: CheckboxOption[]) => {
        console.log('categories', newSelectedOptions);
      },
    },
    materialTypes: {
      options: [],
      selectedOptions: [],
      urlParamName: 'materialTypes',
      onChange: (newSelectedOptions: CheckboxOption[]) => {
        console.log('materialTypes', newSelectedOptions);
      },
    },
  });

  const shopContextValue = React.useMemo(
    () => ({
      cups,
      filters,
    }),
    [cups, filters],
  );

  React.useEffect(() => {
    (async () => {
      const [fetchedCups, fetchedCategories, fetchedMaterialTypes] = await Promise.all([
        ApiService.fetchMany('cups'),
        ApiService.fetchMany('categories'),
        ApiService.fetchMany('materialTypes'),
      ]);

      const priceArray = fetchedCups.map((cup) => cup.price).sort((a, b) => a - b);
      const priceRange: NumberRange = [priceArray[0], priceArray[priceArray.length - 1]];

      const categoriesOptions = fetchedCategories.map(({ id, title }) => ({
        value: id,
        label: title,
      }));

      const materialTypesOptions = fetchedMaterialTypes.map(({ id, title }) => ({
        value: id,
        label: title,
      }));

      setCups(fetchedCups);
      setFilters({
        price: {
          ...filters.price,
          bounds: priceRange,
          currentRange: priceRange,
        },
        categories: {
          ...filters.categories,
          options: categoriesOptions,
        },
        materialTypes: {
          ...filters.materialTypes,
          options: materialTypesOptions,
        },
      });
    })();
  }, []);

  return <ShopContext.Provider value={shopContextValue}>{children}</ShopContext.Provider>;
};

export default ShopContext;
