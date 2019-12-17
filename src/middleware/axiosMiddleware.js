import axios from 'axios';
import { Service } from 'axios-middleware';
import cookies from 'js-cookie';
import API from '../utilities/api';

const service = new Service(axios);

service.register({
    onRequest(config) {
        config.headers.Authorization = `Bearer ${cookies.get('Access token')}`;
        return config;
    },
    onResponse(response) {
        return response;
    },
    onResponseError(error) {
        console.log('Error1', error);
        const url = `${API}/user/refreshtoken`;
        let data = new FormData();
        data.set('access_token', cookies.get('Access token'));
        data.set('refresh_token', cookies.get('Refresh token'));
        axios.post(url, data)
            .then((response) => {
                if (response.data.error === 0) {
                    console.log('401 resolved');
                    return response;
                } else {
                    window.location.href = '/login';
                }
            })
            .catch((error) => {
                console.log('Error2', error);
            })
    }
});