import { shallow } from 'enzyme';
import * as React from 'react';

import { App } from './app';

describe('Test Component: App', () => {
  it('renders the app', () => {
    const result = shallow(<App />);
    expect(result).toBeTruthy();
  });
});
