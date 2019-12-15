import React from 'react';
import ReactDOM from 'react-dom';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import axios from 'axios';
import Cookies from 'js-cookie';

import '../public/css/style.css';

import AppRouter from './routers/AppRouter';

axios.defaults.headers.common['Authorization'] = `Bearer ${Cookies.get('access_token')}`;

const app = (
    <I18nextProvider i18n={i18n}>
        <AppRouter />
    </I18nextProvider>
);

ReactDOM.render(app, document.getElementById('app'));