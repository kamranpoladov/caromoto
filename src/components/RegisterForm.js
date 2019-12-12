import React from 'react';
import CountrySelect from './helpers/CountrySelect';
import { useTranslation } from 'react-i18next';

const RegisterForm = () => {
    const { t } = useTranslation();

    return (
        <form method='post'>
            <label>{t('First name')}</label>
            <input type='text'></input>
            <label>{t('Last name')}</label>
            <input type='text'></input>
            <label>{t('Email')}</label>
            <input type='email'></input>
            <CountrySelect />
            <label>{t('Password')}</label>
            <input type='password'></input>
            <label>{t('Confirm password')}</label>
            <input type='password'></input>
            <button type='submit'>{t('Sign up')}</button>
        </form>
    );
};

export default RegisterForm;