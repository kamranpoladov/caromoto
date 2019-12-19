export const setLanguage = (language) => ({
    type: 'SET_LANGUAGE',
    language
});

export const setLocales = (locales = []) => ({
    type: 'SET_LOCALES',
    locales
});

export const loadTranslations = (translations) => ({
    type: 'LOAD_TRANSLATIONS',
    translations
})