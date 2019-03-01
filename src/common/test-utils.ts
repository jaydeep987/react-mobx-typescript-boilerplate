/* eslint-disable */
import { StyleRulesCallback, Theme } from '@material-ui/core';

/** Gives mocked event object initialized with given value  */
export function getMockChangeEventObj(value: string):
Partial<React.ChangeEvent<Partial<HTMLSelectElement>>> {
  return {
    target: {
      value,
      addEventListener: jest.fn,
      removeEventListener: jest.fn,
      dispatchEvent: () => false,
    },
  };
}

/** Gives classes only from given styles in form : {classname: classname} */
export function getClassNamesFromStyles(styles: StyleRulesCallback, muiTheme: Theme):
{ [key: string]: string } {
  return Object
    .keys(styles(muiTheme))
    .reduce((prev, curr) => ({ ...prev, [curr]: curr }), {});
}
