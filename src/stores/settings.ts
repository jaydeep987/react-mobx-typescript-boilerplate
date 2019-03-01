import { action, observable } from 'mobx';
import { LanguageKeys } from '~common/constants';

/**
 * Store to hold settings
 */
export class SettingStore {
  /** Holds current locale string */
  @observable locale = LanguageKeys.en;

  /** set local in store */
  @action setLocale(locale: string): void {
    this.locale = locale;
  }
}

export const settingStore = new SettingStore();
