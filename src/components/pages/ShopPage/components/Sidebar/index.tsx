import * as React from 'react';
import { Divider } from '@mui/material';
import SidebarContainer from './components/SidebarContainer';
import DrawerHeader from '../DrawerHeader';
import DrawerContext from '../../contexts/DrawerContext';
import ShopContext from '../../contexts/ShopContext';
import RangeField from '../../../../form-controls/RangeField';
import CustomCheckboxGroup from '../../../../form-controls/CustomCheckboxGroup';

const Sidebar: React.FC = () => {
  const { open } = React.useContext(DrawerContext);
  const {
    filters: {
      price: priceFilter,
      categories: categoriesFilter,
      materialTypes: materialTypesFilter,
    },
  } = React.useContext(ShopContext);

  return (
    <SidebarContainer variant="temporary" open={open}>
      <DrawerHeader />
      <RangeField
        min={priceFilter.bounds[0]}
        max={priceFilter.bounds[1]}
        value={priceFilter.currentRange}
        onChangeCommitted={(_, newRange) => priceFilter.onChangeCommitted(newRange)}
      />
      <Divider />
      <CustomCheckboxGroup
        formLabel="Categories"
        name="categories"
        options={categoriesFilter.options}
        value={categoriesFilter.selectedOptions}
        onChange={(_, newCategories) => categoriesFilter.onChange(newCategories)}
      />
      <Divider />
      <CustomCheckboxGroup
        formLabel="Material Types"
        name="materialTypes"
        options={materialTypesFilter.options}
        value={materialTypesFilter.selectedOptions}
        onChange={(_, newCategories) => materialTypesFilter.onChange(newCategories)}
      />
    </SidebarContainer>
  );
};

export default Sidebar;
