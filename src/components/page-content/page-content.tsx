import { Paper, withStyles } from '@material-ui/core';
import * as React from 'react';
import { StyledComponentProps } from '~types/styled';

import { Classes, styles } from './styles';

/**
 * Common wrapper container component for a page. To have common page style
 */
const PageContent: React.FunctionComponent<PageContentProps> = (props: PageContentProps): JSX.Element => {
  const { classes, children } = props;

  return (
    <Paper className={classes.pageContent}>
      {children}
    </Paper>
  );
};

interface PageContentProps extends StyledComponentProps<Classes> {
  /** React child component */
  children: React.ReactNode;
}

const StyledPageContent = withStyles(styles)(PageContent);

export { StyledPageContent as PageContent };
