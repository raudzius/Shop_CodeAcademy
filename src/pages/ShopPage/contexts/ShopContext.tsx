import React from 'react';
import ApiService from '../../../services/api-service';
import { CheckboxOption } from '../../../components/form-controls/CustomCheckboxGroup';
import useCheckboxFilter from '../hooks/useCheckboxFilter';

type RangeFilter = {
  bounds: NumberRange;
  currentRange: NumberRange;
  urlParamName: string;
  onChangeCommitted: (newRange: NumberRange) => void;
};

type ShopContextValue = {
  cups: Cup[];
  filters: {
    price: RangeFilter;
    categories: {
      options: CheckboxOption[];
      selectedOptions: CheckboxOption[];
      onChange: (newSelectedOptions: CheckboxOption[]) => void;
    };
    materialTypes: {
      options: CheckboxOption[];
      selectedOptions: CheckboxOption[];
      onChange: (newSelectedOptions: CheckboxOption[]) => void;
    };
  };
};

const fetchCategoryOptions = async () => {
  const fetchedCategories = await ApiService.fetchMany('categories');

  return fetchedCategories.map(({ id, title }) => ({
    value: id,
    label: title,
  }));
};

const fetchMaterialTypeOptions = async () => {
  const fetchedCategories = await ApiService.fetchMany('materialTypes');

  return fetchedCategories.map(({ id, title }) => ({
    value: id,
    label: title,
  }));
};

const ShopContext = React.createContext({} as ShopContextValue);

export const ShopContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cups, setCups] = React.useState<Cup[]>([]);

  const [categories, setCategories, categoriesOptions] = useCheckboxFilter({
    urlParamName: 'categories',
    fetchOptions: fetchCategoryOptions,
  });

  const [materialTypes, setMaterialTypes, materialTypesOptions] = useCheckboxFilter(
    {
      urlParamName: 'materialTypes',
      fetchOptions: fetchMaterialTypeOptions,
    },
  );

  const [priceFilter, setPriceFilter] = React.useState<RangeFilter>({
    bounds: [0, 0],
    currentRange: [0, 0],
    urlParamName: 'price',
    onChangeCommitted: (newCurrentRange) => {
      setPriceFilter((currentPriceFilter) => ({
        ...currentPriceFilter,
        currentRange: newCurrentRange,
      }));
    },
  });

  const shopContextValue: ShopContextValue = React.useMemo(
    () => ({
      cups,
      filters: {
        price: priceFilter,
        categories: {
          options: categoriesOptions,
          selectedOptions: categories,
          onChange: setCategories,
        },
        materialTypes: {
          options: materialTypesOptions,
          selectedOptions: materialTypes,
          onChange: setMaterialTypes,
        },
      },
    }),
    [cups, priceFilter, categories, materialTypes],
  );

  React.useEffect(() => {
    (async () => {
      const fetchedCups = await ApiService.fetchMany('cups');

      const priceArray = fetchedCups.map((cup) => cup.price).sort((a, b) => a - b);
      const priceRange: NumberRange = [priceArray[0], priceArray[priceArray.length - 1]];

      setCups(fetchedCups);
      setPriceFilter({
        ...priceFilter,
        bounds: priceRange,
        currentRange: priceRange,
      });
    })();
  }, []);

  return <ShopContext.Provider value={shopContextValue}>{children}</ShopContext.Provider>;
};

export default ShopContext;
