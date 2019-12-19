const languageReducerDefaultState = {
    language: localStorage.getItem('defaultLanguage') || '',
    locales: [],
    translations: {}
};

export default (state = languageReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_LANGUAGE':
            return {
                ...state,
                language: action.language
            };
        case 'SET_LOCALES':
            return {
                ...state,
                locales: action.locales.slice(0)
            };
        case 'LOAD_TRANSLATIONS':
            return {
                ...state,
                translations: action.translations
            }
        default:
            return state;
    };
};