import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';

import { en } from './en';
import { jp } from './jp';

const resources = {
  en,
  jp,
};

/**
 * Initializes i18next with resources and other settings
 */
export function initI18Next(): Promise<i18next.TFunction> {
  return i18next
    .use(initReactI18next)
    .init({
      resources,
      lng: 'en',
      interpolation: {
        escapeValue: false, // React already safe from xss
      },
    });
}
