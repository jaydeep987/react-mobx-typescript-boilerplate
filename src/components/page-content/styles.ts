import { StyleRulesCallback } from '@material-ui/core';
import { CSSProperties } from '@material-ui/core/styles/withStyles';
import { PAGE_HEADER_HEIGHT } from '~components/page-header/styles';

export type Classes =
  'pageContent';

export const styles: StyleRulesCallback<Classes> = (): Record<Classes, CSSProperties> => ({
  pageContent: {
    padding: 5,
    height: `calc(100% - ${PAGE_HEADER_HEIGHT}px)`,
    overflowY: 'auto',
  },
});
