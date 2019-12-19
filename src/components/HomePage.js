import React from 'react';
import axios from 'axios';
import API from '../utilities/api';

const HomePage = () => {

    const request = async () => {
        try {
            const response = await axios.get(`${API}/user/check`);
        } catch (error) {
            console.log(error);
        }
    }

    request();

    return (
        <main>
            
        </main>
    );
};

export default HomePage;