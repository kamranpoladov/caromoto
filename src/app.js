import React from 'react';
import ReactDOM from 'react-dom';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import Axios from 'axios';

import '../public/css/style.css';

import AppRouter from './routers/AppRouter';

const app = (
    <I18nextProvider i18n={i18n}>
        <AppRouter />
    </I18nextProvider>
);

ReactDOM.render(app, document.getElementById('app'));