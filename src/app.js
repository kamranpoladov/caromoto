import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';
import store from './store/configureStore';
import getLocales from './utilities/getLocales';
import loadInitTranslations from './utilities/loadInitTranslations';

import './middleware/axiosMiddleware';
import '../public/css/style.css';

getLocales(store);
loadInitTranslations(store);

const app = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);

ReactDOM.render(app, document.getElementById('app'));