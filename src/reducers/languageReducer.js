const languageReducerDefaultState = {
    language: localStorage.getItem('defaultLanguage') || '',
    locales: [],
    translations: {},
    cookieName: '',
    cookieValue: ''
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
            };
        case 'SET_COOKIE':
            return {
                ...state,
                cookieName: action.name,
                cookieValue: action.value
            }
        default:
            return state;
    };
};