import axios from 'axios';
import { Service } from 'axios-middleware';
import cookies from 'js-cookie';
import API from '../utilities/api';
import isAuthenticated from '../utilities/isAuthenticated';
import store from '../store/configureStore';
import { userLogOut } from '../actions/user';
import cookieNames from '../utilities/cookieNames';

const service = new Service(axios);

service.register({
    onRequest(config) {
        // Set culture cookies for server
        cookies.set(store.getState().language.cookieName, store.getState().language.cookieValue);

        const token = cookies.get(cookieNames.access);
        config.headers.Authorization = `Bearer ${token}`;

        isAuthenticated(localStorage.getItem('tokenIssueTime'))
        ? localStorage.setItem('isLoggedIn', true)
        : localStorage.setItem('isLoggedIn', false);

        return config;
    },
    onResponseError(error) {
        const url = `${API}/user/refreshtoken`;
        let data = new FormData();
        data.set('access_token', cookies.get(cookieNames.access));
        data.set('refresh_token', cookies.get(cookieNames.refresh));
        
        axios.post(url, data)
            .then((response) => {
                switch (response.data.error) {
                    case 0:
                        console.log('401 resolved');
                        cookies.set(cookieNames.access, response.data.access_token);
                        cookies.set(cookieNames.refresh, response.data.refresh_token);
                        localStorage.setItem('tokenIssueTime', Date.now());
                        return response;
                    default:
                        localStorage.setItem('isLoggedIn', false);
                        store.dispatch(userLogOut());
                        break;
                }
            })
            .catch((error) => {
                window.location.href = '/login';
            })
    }
});