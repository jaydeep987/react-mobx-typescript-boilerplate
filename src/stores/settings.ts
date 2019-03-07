import { action, observable } from 'mobx';
import { LanguageKeys } from '~common/constants';

/**
 * Store to hold settings
 */
export class SettingStore {
  /** Holds current locale string */
  @observable locale = LanguageKeys.en;

  /** Hold status of side drawer */
  @observable isDrawerOpen = false;

  /** set local in store */
  @action setLocale(locale: string): void {
    this.locale = locale;
  }

  /** Opens drawer */
  @action openDrawer(): void {
    this.isDrawerOpen = true;
  }

  /** Closes drawer */
  @action closeDrawer(): void {
    this.isDrawerOpen = false;
  }
}

export const settingStore = new SettingStore();
