import { StyleRulesCallback, Theme } from '@material-ui/core';
import { CSSProperties } from '@material-ui/core/styles/withStyles';
import { DRAWER_WIDTH } from '~components/app-drawer/styles';

export type Classes =
  'toolbar' |
  'toolbarRight' |
  'headTitle' |
  'languageSelect' |
  'toolbarLeft' |
  'setLanguageLabel' |
  'appBarShift' |
  'menuButton' |
  'hide' |
  'appBar';

export const styles: StyleRulesCallback<Classes> = (theme: Theme): Record<Classes, CSSProperties> => ({
  appBar: {
    boxShadow: 'none',
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'height'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  toolbar: {
    color: '#fff',
  },
  headTitle: {
    [theme.breakpoints.down('xs')]: {
      fontSize: 25,
    },
  },
  toolbarLeft: {
    flexGrow: 1,
  },
  toolbarRight: {
    margin: 5,
    padding: 5,
    display: 'flex',
    backgroundColor: 'inherit',
  },
  setLanguageLabel: {
    color: '#fff',
    padding: 5,
  },
  languageSelect: {
    color: '#fff',
  },
  appBarShift: {
    [theme.breakpoints.up('sm')]: {
      marginLeft: DRAWER_WIDTH,
      width: `calc(100% - ${DRAWER_WIDTH}px)`,
      transition: theme.transitions.create(['width', 'height'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
    },
  },
  menuButton: {
    marginLeft: 12,
    marginRight: theme.spacing.unit * 2,
  },
  hide: {
    display: 'none',
  },
});
