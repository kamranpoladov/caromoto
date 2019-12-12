import React, { useState } from 'react';
import SigninForm from './SigninForm';
import RegisterForm from './RegisterForm';
import { useTranslation } from 'react-i18next';

const AuthenticationForm = () => {
    const [tab, setTab] = useState('signin');

    const { t } = useTranslation();

    return (
        <div className='authentication-form'>
            <ul className='authentication-form__tabs'>
                <li 
                    className={
                        tab === 'signin'
                        ? 'authentication-form__tabs--signin authentication-form__tabs--signin-a'
                        : 'authentication-form__tabs--signin'
                    }
                    onClick={() => setTab('signin')}
                    >
                    {t('Sign in')}
                    <div className={
                        tab === 'signin'
                        ? 'authentication-form__tabs--signin__border authentication-form__tabs--signin__border-a'
                        : 'authentication-form__tabs--signin__border'}
                    >
                    </div>
                </li>
                <li 
                    className={
                        tab === 'register'
                        ? 'authentication-form__tabs--register authentication-form__tabs--register-a'
                        : 'authentication-form__tabs--register'
                    }
                    onClick={() => setTab('register')}
                    >
                    {t('Register')}
                    <div className={
                        tab === 'register'
                        ? 'authentication-form__tabs--register__border authentication-form__tabs--register__border-a'
                        : 'authentication-form__tabs--register__border'}
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