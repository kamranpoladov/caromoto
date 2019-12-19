import axios from 'axios';
import API from './api';
import { setLocales } from '../actions/language';

export default async (store) => {
    const response = await axios.get(`${API}/culture/getlist`);

    store.dispatch(setLocales(response.data));;
};