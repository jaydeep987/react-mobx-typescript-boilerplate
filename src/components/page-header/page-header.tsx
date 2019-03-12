import { Paper, Typography, withStyles } from '@material-ui/core';
import * as React from 'react';
import { StyledComponentProps } from '~types/styled';

import { Classes, styles } from './styles';

/**
 * Common style page header.
 */
const PageHeader: React.FunctionComponent<PageHeaderProps> = (props: PageHeaderProps): JSX.Element => {
  const { classes, headerTitle } = props;

  return (
    <Paper className={classes.container}>
      <Typography variant="h5" color="inherit" className="headerTitle">
        {headerTitle}
      </Typography>
    </Paper>
  );
};

interface PageHeaderProps extends StyledComponentProps<Classes> {
  /** Page header title */
  headerTitle: string;
}

const StyledPageHeader = withStyles(styles)(PageHeader);

export { StyledPageHeader as PageHeader };
