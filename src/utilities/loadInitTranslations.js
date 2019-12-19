import axios from 'axios';
import API from './api';
import { loadTranslations, setCookie } from '../actions/language';
import cookie from 'js-cookie';

export default async (store) => {
    const currentLanguage = localStorage.getItem('defaultLanguage');
    // let data = new FormData();
    // data.set('culture', currentLanguage);
    // const demandedCookies = await axios.post(`${API}/culture/setcurrent`, data);
    // store.dispatch(setCookie(demandedCookies.data.cookie_name, demandedCookies.data.cookie_value));
    
    const translations = await axios.get(`${API}/culture/getresource`, {
        params: {
            culture: currentLanguage
        }
    });
    store.dispatch(loadTranslations(translations.data));
};