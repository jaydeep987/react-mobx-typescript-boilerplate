import { mount, shallow } from 'enzyme';
import i18next from 'i18next';
import * as React from 'react';
import { I18nextProvider } from 'react-i18next';
import { CounterStore } from '~stores/counter';
import { SettingStore } from '~stores/settings';

import { getClassNamesFromStyles } from '../../common/test-utils';
import { initI18Next } from '../../i18n/i18n';
import { muiTheme } from '../app/mui-theme';

import { Counter } from './counter';
import { styles } from './styles';

describe('Test Page: Counter', () => {
  let CounterComponent: JSX.Element;
  let counterStore: CounterStore;
  let classes: { [key: string]: string };
  const settingStore = new SettingStore();

  beforeAll(() => {
    classes = getClassNamesFromStyles(styles, muiTheme);
    initI18Next();
  });

  beforeEach(() => {
    counterStore = new CounterStore();
    CounterComponent = (
      <I18nextProvider i18n={i18next}>
        <Counter classes={classes} counterStore={counterStore} settingStore={settingStore} />
      </I18nextProvider>
    );
  });

  it('should render', () => {
    const result = shallow(<Counter counterStore={counterStore} />);
    expect(result).toBeTruthy();
  });

  it('should increment/decrement counter in store on click of increment & decrement button', () => {
    counterStore.setCount(1);
    const result = mount(CounterComponent);

    // test increment
    result.find(`button.${classes.incrementBtn}`).at(0).simulate('click');
    expect(counterStore.count).toBe(2);

    // test decrement
    result.find(`button.${classes.decrementBtn}`).at(0).simulate('click');
    expect(counterStore.count).toBe(1);
  });
});
