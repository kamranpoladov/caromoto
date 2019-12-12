import React from 'react';
import { useTranslation } from 'react-i18next';

const SigninForm = () => {
    const { t } = useTranslation();
    return (
        <form className='authentication-form__signin' method='post'>
            <label>{t('Email')}</label>
            <input type='email'></input>
            <label>{t('Password')}</label>
            <input type='password'></input>
        </form>
    );
}

export default SigninForm;