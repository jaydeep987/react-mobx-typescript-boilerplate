import { StyleRulesCallback, Theme } from '@material-ui/core';
import { CSSProperties } from '@material-ui/core/styles/withStyles';
import { styles as appDrawerStyles } from '~components/app-drawer/styles';

export type Classes =
  'container' |
  'mainContent' |
  'mainWrapper' |
  'toolbar' |
  'innerWrapper' |
  'pageLoading';

const MAIN_CONTENT_PADDING = 3;

export const styles: StyleRulesCallback<Classes> = (theme: Theme): Record<Classes, CSSProperties> => ({
  container: {
    display: 'flex',
  },
  mainContent: {
    flexGrow: 1,
    paddingTop: theme.spacing.unit + MAIN_CONTENT_PADDING,
    maxHeight: '100%',
    overflow: 'hidden',
  },
  mainWrapper: {
    width: '100%',
    height: '100%',
  },
  innerWrapper: {
    height: '100%',
    boxShadow: '3px 3px 6px #e0e0e0, -3px 3px 6px #e0e0e0',
  },
  toolbar: appDrawerStyles(theme).toolbar,
  pageLoading: {
    margin: 15,
  },
});
