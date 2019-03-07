import { Typography } from '@material-ui/core';
import { mount } from 'enzyme';
import * as React from 'react';

import { PageHeader } from './page-header';

describe('Test Component: PageHeader', () => {
  it('should have component typography with variant h5', () => {
    const title = 'This is title';
    const wrapper = mount(<PageHeader headerTitle={title} />);

    expect(wrapper.find(Typography).prop('variant')).toBe('h5');
  });

  it('should render component with given header title', () => {
    const title = 'This is title';
    const wrapper = mount(<PageHeader headerTitle={title} />);

    expect(wrapper.find('h5.headerTitle').text()).toBe(title);
  });
});
