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

type CheckboxFilter = {
  options: CheckboxOption[];
  selectedOptions: CheckboxOption[];
  urlParamName: string;
  onChange: (newSelectedOptions: CheckboxOption[]) => void;
};

type Filters = {
  price: RangeFilter;
  materialTypes: CheckboxFilter;
};

type ShopContextValue = {
  cups: Cup[];
  filters: Filters & {
    categories: {
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

const ShopContext = React.createContext({} as ShopContextValue);

export const ShopContextProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cups, setCups] = React.useState<Cup[]>([]);
  const [selectedCategories, setSelectedCategories, categoriesOptions] = useCheckboxFilter({
    urlParamName: 'categories',
    fetchOptions: fetchCategoryOptions,
  });
  const [filters, setFilters] = React.useState<Filters>({
    price: {
      bounds: [0, 0],
      currentRange: [0, 0],
      urlParamName: 'price',
      onChangeCommitted: (newCurrentRange) => {
        setFilters((currentFilters) => ({
          ...currentFilters,
          price: {
            ...currentFilters.price,
            currentRange: newCurrentRange,
          },
        }));
      },
    },
    materialTypes: {
      options: [],
      selectedOptions: [],
      urlParamName: 'materialTypes',
      onChange: (newSelectedOptions: CheckboxOption[]) => {
        setFilters((currentFilters) => ({
          ...currentFilters,
          materialTypes: {
            ...currentFilters.materialTypes,
            selectedOptions: newSelectedOptions,
          },
        }));
      },
    },
  });

  const shopContextValue: ShopContextValue = React.useMemo(
    () => ({
      cups,
      filters: {
        ...filters,
        categories: {
          options: categoriesOptions,
          selectedOptions: selectedCategories,
          onChange: setSelectedCategories,
        },
      },
    }),
    [cups, filters, selectedCategories],
  );

  React.useEffect(() => {
    (async () => {
      const [fetchedCups, fetchedMaterialTypes] = await Promise.all([
        ApiService.fetchMany('cups'),
        ApiService.fetchMany('materialTypes'),
      ]);

      const priceArray = fetchedCups.map((cup) => cup.price).sort((a, b) => a - b);
      const priceRange: NumberRange = [priceArray[0], priceArray[priceArray.length - 1]];

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
