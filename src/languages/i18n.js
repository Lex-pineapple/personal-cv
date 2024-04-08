import { initReactI18next } from 'react-i18next';
import i18n from 'i18next';

i18n
  .use(initReactI18next)
  .init({
    lng: 'ru',
    fallbackLng: 'ru',
    resources: {
      en: {
        translation: {
          name: 'Anastasiya',
        }
      },
      ru: {
        translation: {
          name: 'Анастасия',
        }
      }
    }
  });

export default i18n;