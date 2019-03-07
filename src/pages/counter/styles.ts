import { StyleRulesCallback, Theme } from '@material-ui/core';
import { CSSProperties } from '@material-ui/core/styles/withStyles';

export type Classes =
  'container' |
  'toolbar' |
  'toolbarRight' |
  'headIcon' |
  'headTitle' |
  'languageSelect' |
  'toolbarLeft' |
  'counterBody' |
  'decrementBtn' |
  'incrementBtn' |
  'setLanguageLabel';

export const styles: StyleRulesCallback<Classes> =
(theme: Theme): Record<Classes, CSSProperties> => ({
  container: {
    padding: 0,
  },
  toolbar: {
    color: '#fff',
  },
  headIcon: {
    fontSize: 36,
    paddingRight: 10,
  },
  headTitle: {},
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
  counterBody: {
    display: 'flex',
    padding: 5,
  },
  incrementBtn: {
    color: theme.palette.text.secondary,
    marginLeft: 10,
    marginRight: 10,
  },
  decrementBtn: {
    color: theme.palette.text.secondary,
    marginLeft: 10,
    marginRight: 10,
  },
});
