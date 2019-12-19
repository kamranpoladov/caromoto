import { createStore, combineReducers } from 'redux';
import userReducer from '../reducers/userReducer';
import languageReducer from '../reducers/languageReducer';

const store = createStore(
    combineReducers({
        user: userReducer,
        language: languageReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;