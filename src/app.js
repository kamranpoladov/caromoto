import React from 'react';
import ReactDOM from 'react-dom';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import axios from 'axios';
import cookies from 'js-cookie';
import './middleware/axiosMiddleware';

import '../public/css/style.css';

import AppRouter from './routers/AppRouter';

const app = (
    <I18nextProvider i18n={i18n}>
        <AppRouter />
    </I18nextProvider>
);

ReactDOM.render(app, document.getElementById('app'));