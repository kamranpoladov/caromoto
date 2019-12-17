import React from 'react';
import axios from 'axios';
import API from '../utilities/api';
import cookies from 'js-cookie';

const HomePage = () => {

    const request = async () => {
        const response = await axios.get(`${API}/user/check`);
    }

    request();

    return (
        <main>
            
        </main>
    );
};

export default HomePage;