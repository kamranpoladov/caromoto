import axios from 'axios';
import API from './api';
import { loadTranslations, setCookie } from '../actions/language';

export default async (store) => {
    const currentLanguage = localStorage.getItem('defaultLanguage') || (await axios.get(`${API}/culture/detect`)).data;
    try {
        const translations = await axios.get(`${API}/culture/getresource`, {
            params: {
                culture: currentLanguage
            }
        });
        store.dispatch(loadTranslations(translations.data));
    } catch (error) {
        console.log(error);
    };
};