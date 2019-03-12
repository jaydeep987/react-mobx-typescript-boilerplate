import { StyleRulesCallback, Theme } from '@material-ui/core';
import { CSSProperties } from '@material-ui/core/styles/withStyles';

export type Classes =
  'container' |
  'counterBody' |
  'decrementBtn' |
  'incrementBtn';

export const styles: StyleRulesCallback<Classes> =
(theme: Theme): Record<Classes, CSSProperties> => ({
  container: {
    padding: 0,
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
