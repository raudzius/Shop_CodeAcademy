import { CSSObject } from '@mui/material';

declare module '@mui/material/styles/createTheme' {
  interface ThemeOptions {
    common?: {
      drawerWidth: number;
    };
  }

  interface Theme {
    common: {
      drawerWidth: number;
    };
  }
}
declare module '@mui/material/styles/createMixins' {
  interface MixinsOptions {
    drawer: {
      openedMixin: CSSObject,
      closedMixin: CSSObject,
    };
  }

  interface Mixins {
    drawer: {
      openedMixin: CSSObject,
      closedMixin: CSSObject,
    };
  }
}
declare module '@mui/material/styles/zIndex' {
  export interface ZIndex {
    drawerButton: number;
  }
}

export { };
