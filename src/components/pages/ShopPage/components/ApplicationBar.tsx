import { AppBar, AppBarProps, styled } from '@mui/material';

type ApplicationBarProps = AppBarProps & {
  open?: boolean;
  drawerWidth: number;
};

const propsForStyling = ['open', 'drawerWidth'];
const shouldForwardProp = (propName: string) => !propsForStyling.includes(propName);

const ApplicationBar = styled(AppBar, { shouldForwardProp })<ApplicationBarProps>(
  ({ theme, open, drawerWidth }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  }),
);

export default ApplicationBar;
