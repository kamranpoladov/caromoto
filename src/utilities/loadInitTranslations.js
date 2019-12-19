import axios from 'axios';
import API from './api';
import { loadTranslations } from '../actions/language';

export default async (store) => {
    const currentLanguage = localStorage.getItem('defaultLanguage');
    const translations = await axios.get(`${API}/culture/getresource`, {
        params: {
            culture: currentLanguage
        }
    });
    store.dispatch(loadTranslations(translations.data));
}