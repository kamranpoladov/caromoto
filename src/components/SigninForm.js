import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import API from '../utilities/api';
import Switch from 'react-switch';

const SigninForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

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
            <div className='authentication__form--controls'>
                <a className='authentication__form--controls-forgot'>Forgot password?</a>
                <div className='authentication__form--controls-remember'>
                    <label className='authentication__form--controls-remember_text' htmlFor='remember'>Remember me</label>
                    <Switch
                        id='remember'
                        className='authentication__form--controls-remember_switch'
                        onChange={() => setRememberMe(!rememberMe)} 
                        checked={rememberMe} 
                        uncheckedIcon={false} 
                        checkedIcon={false} 
                        offColor='#CBCBCB'
                        onColor='#86d3ff'
                        onHandleColor='#3497FD'
                        offHandleColor='#868686'
                        handleDiameter={15}
                        height={10}
                        width={25} />
                </div>
            </div>
            <button type='submit' className='button button-blue margin-top-medium'>Sign in</button>
        </form>
    );
}

export default SigninForm;