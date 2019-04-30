import { mount, shallow } from 'enzyme';
import { Provider } from 'mobx-react';
import * as React from 'react';
import { HashRouter } from 'react-router-dom';
import { AppDrawer } from '~components/app-drawer/app-drawer';
import { Appbar } from '~components/appbar/appbar';
import { Dashboard } from '~pages/dashboard/dashboard';

import { getClassNamesFromStyles } from '../../common/test-utils';
import { initI18Next } from '../../i18n/i18n';
import { styles as homeStyles } from '../../pages/home/styles';
import { SettingStore } from '../../stores/settings';
import { muiTheme } from '../app/mui-theme';

import { Home } from './home';

describe('Test Page: Home', () => {
  let settingStore: SettingStore;
  let HomeComponent: JSX.Element;
  let classes: { [key: string]: string };

  beforeAll(() => {
    settingStore = new SettingStore();
    classes = {
       ...getClassNamesFromStyles(homeStyles, muiTheme),
    };
    initI18Next();
    HomeComponent = (
      <Provider {...{settingStore}}>
        <HashRouter>
          <React.Suspense fallback={<div>Loading ....</div>}>
            <Home classes={classes} />
          </React.Suspense>
        </HashRouter>
      </Provider>
    );
  });

  it('should render home component without problem', () => {
    const compo = shallow(HomeComponent);

    expect(compo).toHaveLength(1);
  });

  it('should render home component with appbar', () => {
    const wrapper = mount(HomeComponent);

    expect(wrapper.find(Appbar).instance()).toBeInstanceOf(Appbar);
  });

  it('should render home component with app-drawer', () => {
    const wrapper = mount(HomeComponent);

    expect(wrapper.find(AppDrawer).instance()).toBeInstanceOf(AppDrawer);
  });

  it('should render home component which renders dashboard by default', () => {
    const wrapper = mount(HomeComponent);

    expect(wrapper.find(Dashboard).exists()).toBeTruthy();
  });
});
