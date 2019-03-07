import { mount } from 'enzyme';
import { Provider } from 'mobx-react';
import * as React from 'react';
import { withTranslation } from 'react-i18next';
import { SettingStore } from '~stores/settings';

import { getClassNamesFromStyles, getMockChangeEventObj } from '../../common/test-utils';
import { en } from '../../i18n/en';
import { initI18Next } from '../../i18n/i18n';
import { jp } from '../../i18n/jp';
import { muiTheme } from '../../pages/app/mui-theme';

import { Appbar } from './appbar';
import { styles } from './styles';

describe('Test Component: AppBar', () => {
  let AppBarElement: JSX.Element;
  let settingStore: SettingStore;
  let classes: { [key: string]: string };

  beforeAll(() => {
    settingStore = new SettingStore();
    initI18Next();
    classes = getClassNamesFromStyles(styles, muiTheme);
    const Component = withTranslation()(Appbar);
    AppBarElement = (
      <Provider {...{settingStore}}>
        <Component classes={classes} />
      </Provider>
    );
  });

  it('should render appbar with toolbar and menu button', () => {
    const wrapper = mount(AppBarElement);

    expect(wrapper.find(`div.${classes.toolbar}`).length).toBe(1);
    expect(wrapper.find(`button.${classes.menuButton}`).length).toBe(1);
  });

  it('should change state of drawer when click on menubutton', () => {
    const wrapper = mount(AppBarElement);

    expect(settingStore.isDrawerOpen).toBeFalsy();
    wrapper.find(`button.${classes.menuButton}`).simulate('click');
    expect(settingStore.isDrawerOpen).toBeTruthy();
  });

  it('should have header title (in english)', () => {
    const wrapper = mount(AppBarElement);

    expect(wrapper.find(`span.${classes.headTitle}`).text()).toBe(en.translation.appTitle);
  });

  it('should have language select box and change language of title when change it', () => {
    const wrapper = mount(AppBarElement);

    // change to japanese
    wrapper.find(`Select.${classes.languageSelect}`).props().onChange!(getMockChangeEventObj('jp') as React.FormEvent);
    expect(wrapper.find(`span.${classes.headTitle}`).text()).toBe(jp.translation.appTitle);

    // change back to english
    wrapper.find(`Select.${classes.languageSelect}`).props().onChange!(getMockChangeEventObj('en') as React.FormEvent);
    expect(wrapper.find(`span.${classes.headTitle}`).text()).toBe(en.translation.appTitle);
    });
});
