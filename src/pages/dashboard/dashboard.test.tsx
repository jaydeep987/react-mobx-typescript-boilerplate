import { mount } from 'enzyme';
import * as React from 'react';

import { initI18Next } from '../../i18n/i18n';

import { Dashboard } from './dashboard';

describe('Test Page: Dashboard', () => {
  let TrasnlatedComponent: React.ComponentType;
  beforeAll(() => {
    initI18Next();
    TrasnlatedComponent = Dashboard;
  });

  it('should render dashboard with pageheader', () => {
    const wrapper = mount(<TrasnlatedComponent />);

    expect(wrapper.find('h5.headerTitle').text()).toBe('Dashboard');
  });

  it('should have dashboard with text content', () => {
    const wrapper = mount(<TrasnlatedComponent />);

    expect(wrapper.find('h3.text').text()).toBe('This is dashboard');
  });

  it('should have dashboard with two images', () => {
    const wrapper = mount(<TrasnlatedComponent />);

    expect(wrapper.find('.photo1').length).toBe(1);
    expect(wrapper.find('.photo2').length).toBe(1);
  });
});
