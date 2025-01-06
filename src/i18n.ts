import { createI18n } from 'vue-i18n';
import { EN_LOCALE } from './locales/en';
import { RU_LOCALE } from './locales/ru';


export function createLocalization() {
    return createI18n({
        legacy: false,
        locale: 'en',
        fallbackLocale: 'ru',
        messages: {
          en: {
            message: EN_LOCALE,
          },
          ru: {
            message: RU_LOCALE,
          }
        }
      })
}