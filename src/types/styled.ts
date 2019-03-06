import { Theme } from '@material-ui/core';
import { ClassNameMap } from '@material-ui/core/styles/withStyles';

export interface StyledComponentProps<ClassName extends string> {
  /** classes provided from material styles */
  classes: ClassNameMap<ClassName>;
  /** Material theme */
  theme?: Theme;
}
