import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import API from '../utilities/api';

const SigninForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const { t } = useTranslation();

    const url = `${API}/user/login`;

    const signIn = async (e) => {
        e.preventDefault();

        const data = {
            email,
            password
        };

        const jsonData = JSON.stringify(data);

        const response = await axios.post(url, jsonData);

        console.log(response);
    }

    return (
        <form className='authentication__form' onSubmit={signIn} method='post'>
            <div className='authentication__form--group'>
                <label className='authentication__form--group-text' htmlFor='email'>{t('Email')}</label>
                <input 
                    className='authentication__form--group-input' 
                    type='email' 
                    name='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} 
                />
            </div>
            <div className='authentication__form--group'>
                <label className='authentication__form--group-text' htmlFor='password'>{t('Password')}</label>
                <input 
                    className='authentication__form--group-input' 
                    type='password' 
                    name='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} 
                />
            </div>
            <div className='authentication__form__signin--controls'>
                <a className='authentication__form__signin--controls-forgot'>Forgot password?</a>
                <div className='authentication__form__signin--controls-remember'>
                    <label className='authentication__form__signin--controls-remember_text' htmlFor='remember'>Remember me</label>
                    <label className="authentication__form__signin--controls-remember_switch">
                        <input type="checkbox" />
                        <span className="authentication__form__signin--controls-remember_switch-slider"></span>
                    </label>
                </div>
            </div>
            <button type='submit' className='button button-blue'>Sign in</button>
        </form>
    );
}

export default SigninForm;