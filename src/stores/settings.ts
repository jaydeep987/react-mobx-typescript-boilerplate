import { action, observable } from 'mobx';

/**
 * Store to hold settings
 */
export class SettingStore {
  /** Holds current locale string */
  @observable locale = 'en';

  /** set local in store */
  @action setLocale(locale: string): void {
    this.locale = locale;
  }
}

export const settingStore = new SettingStore();
