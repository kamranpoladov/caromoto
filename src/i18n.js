import i18n from 'i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import XHR from 'i18next-xhr-backend';

import en from './locales/en/translation.json';
import ru from './locales/ru/translation.json';
import es from './locales/es/translation.json';

i18n
    .use(XHR)
    .use(LanguageDetector)
    .init({
        fallbackLng: 'en',
        debug: false,

        keySeparator: false,
        
        partialBundledLanguages: true,

        interpolation: {
            escapeValue: false,
            formatSeparator: ','
        },
            
        resources: {
            en: {
                translations: en
            },
            ru: {
                translations: ru
            },
            es: {
                translations: es
            }
        },

        ns: ['translations'],
        defaultNS: 'translations',
        
        react: {
            useSuspense: false
        }
});

export default i18n;