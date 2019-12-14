import React, { useState } from 'react';
import SigninForm from './SigninForm';
import RegisterForm from './RegisterForm';
import { useTranslation } from 'react-i18next';
import { Button } from 'antd';

const AuthenticationForm = () => {
    const [tab, setTab] = useState('signin');

    const { t } = useTranslation();

    return (
        <div className='authentication'>
            <ul className='authentication__tabs'>
                <li 
                    className={
                        tab === 'signin'
                        ? 'authentication__tabs--signin authentication__tabs--signin-a'
                        : 'authentication__tabs--signin'
                    }
                    onClick={() => setTab('signin')}
                    >
                    {t('Sign in')}
                    <div className={
                        tab === 'signin'
                        ? 'authentication__tabs--signin__border authentication__tabs--signin__border-a'
                        : 'authentication__tabs--signin__border'}
                    >
                    </div>
                </li>
                <li 
                    className={
                        tab === 'register'
                        ? 'authentication__tabs--register authentication__tabs--register-a'
                        : 'authentication__tabs--register'
                    }
                    onClick={() => setTab('register')}
                    >
                    {t('Register')}
                    <div className={
                        tab === 'register'
                        ? 'authentication__tabs--register__border authentication__tabs--register__border-a'
                        : 'authentication__tabs--register__border'}
                    >
                    </div>
                </li>
            </ul>
            <hr/>
            {tab === 'signin' && <SigninForm />}
            {tab === 'register' && <RegisterForm />}
        </div>
    );
};

export default AuthenticationForm;