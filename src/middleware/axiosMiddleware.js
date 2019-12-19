import axios from 'axios';
import { Service } from 'axios-middleware';
import cookies from 'js-cookie';
import API from '../utilities/api';
import isAuthenticated from '../utilities/isAuthenticated';
import store from '../store/configureStore';
import { userLogOut } from '../actions/user';

const service = new Service(axios);

service.register({
    onRequest(config) {
        const token = cookies.get('Access token');
        cookies.set(store.getState().language.cookieName, store.getState().language.cookieValue);

        config.headers.Authorization = `Bearer ${token}`;

        isAuthenticated(localStorage.getItem('tokenIssueTime'))
        ? localStorage.setItem('isLoggedIn', true) 
        : localStorage.setItem('isLoggedIn', false);

        return config;
    },
    onResponseError(error) {
        const url = `${API}/user/refreshtoken`;

        let data = new FormData();
        data.set('access_token', cookies.get('Access token'));
        data.set('refresh_token', cookies.get('Refresh token'));
        
        axios.post(url, data)
            .then((response) => {
                switch (response.data.error) {
                    case 0:
                        console.log('401 resolved');
                        cookies.set('Access token', response.data.access_token);
                        cookies.set('Refresh token', response.data.refresh_token);
                        localStorage.setItem('tokenIssueTime', Date.now());
                        return response;
                    default:
                        localStorage.setItem('isLoggedIn', false);
                        store.dispatch(userLogOut());
                        window.location.href = '/login';
                }
            })
            .catch((error) => {
                window.location.href = '/login';
            })
    }
});