import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import localesEn from './lang/en/locales.json'
import localesRu from './lang/ru/locales.json'
import localesAr from './lang/ar/locales.json'

i18n
  .use(initReactI18next)
  .init({
    fallbackLng: 'ru',
    debug: true,
    resources: {
      en: {
        mainForm: localesEn,
      },
      ru: {
        mainForm: localesRu,
      },
      ar: {
        mainForm: localesAr,
      },
    },
    interpolation: {
      escapeValue: false,
    },
  })
  .then(() => {})

export default i18n
