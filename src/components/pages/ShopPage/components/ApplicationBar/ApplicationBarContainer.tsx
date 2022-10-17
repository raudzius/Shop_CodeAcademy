import { AppBar, AppBarProps, styled } from '@mui/material';

export type ApplicationBarContainerProps = AppBarProps & {
  open?: boolean;
};

const propsForStyling = ['open', 'drawerWidth'];
const shouldForwardProp = (propName: string) => !propsForStyling.includes(propName);

const ApplicationBarContainer = styled(AppBar, { shouldForwardProp })<ApplicationBarContainerProps>(
  ({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      marginLeft: theme.common.drawerWidth,
      width: `calc(100% - ${theme.common.drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  }),
);

export default ApplicationBarContainer;
