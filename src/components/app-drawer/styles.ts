import { StyleRulesCallback, Theme } from '@material-ui/core';
import { CSSProperties } from '@material-ui/core/styles/withStyles';

export type Classes =
  'container' |
  'toolbar' |
  'drawer' |
  'drawerOpen' |
  'drawerClose' |
  'drawerLinkIcon' |
  'mobileDrawer';

export const DRAWER_WIDTH = 200;
const SPACING_UNIT_NONSM = 7;
const SPACING_UNIT_SM = 7;

export const styles: StyleRulesCallback<Classes> = (theme: Theme): Record<Classes, CSSProperties> => ({
  container: {
    padding: 5,
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  drawer: {
    width: DRAWER_WIDTH,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: DRAWER_WIDTH,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    width: theme.spacing.unit * SPACING_UNIT_NONSM + 1,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing.unit * SPACING_UNIT_SM + 1,
    },
  },
  mobileDrawer: {
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  drawerLinkIcon: {
    fill: 'currentColor',
    width: '1em !important',
    height: '1em',
    display: 'inline-block',
    fontSize: 24,
    transition: 'fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
    userSelect: 'none',
    flexShrink: 0,
  },
});
