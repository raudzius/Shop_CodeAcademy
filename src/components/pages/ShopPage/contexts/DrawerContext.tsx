import React from 'react';

type DrawerContextType = {
  open: boolean;
  openDrawer: VoidFunction;
  closeDrawer: VoidFunction;
};

const DrawerContext = React.createContext<DrawerContextType>({} as DrawerContextType);

export default DrawerContext;
