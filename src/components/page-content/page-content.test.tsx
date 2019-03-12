import { mount } from 'enzyme';
import * as React from 'react';

import { getClassNamesFromStyles } from '../../common/test-utils';
import { muiTheme } from '../../pages/app/mui-theme';

import { PageContent } from './page-content';
import { styles } from './styles';

describe('Test Component: PageContent', () => {
  let classes: { [key: string]: string };

  beforeAll(() => {
    classes = getClassNamesFromStyles(styles, muiTheme);
  });

  it('should render page content with given text', () => {
    const wrapper = mount(
      <PageContent classes={classes}>
        something
      </PageContent>,
    );

    expect(wrapper.find(`div.${classes.pageContent}`).text()).toBe('something');
  });

  it('should render page component with given component', () => {
    const h3 = (<h3>
      header
    </h3>);
    const wrapper = mount(
      <PageContent classes={classes}>
        {h3}
      </PageContent>,
    );

    expect(wrapper.find(`div.${classes.pageContent}`).children().containsMatchingElement(h3)).toBe(true);
  });
});
