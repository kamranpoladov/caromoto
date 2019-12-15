import React, { useState } from 'react';
import CountrySelect from './helpers/CountrySelect';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import API from '../utilities/api';
import { validateEmail, validatePassword, validateConfirmPassword } from '../utilities/validation';

const RegisterForm = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');

    const isDisabled = (email && password && confirmPassword) ? (!!emailError || !!passwordError || !!confirmPasswordError) : true;
    const { t } = useTranslation();
    const url = `${API}/user/register`;

    const onEmailChange = ({ target }) => {
        const { value } = target;
        setEmailError(validateEmail(value));
        setEmail(value);
    };

    const onPasswordChange = ({ target }) => {
        const { value } = target;
        setPasswordError(validatePassword(value));
        setPassword(value);
    };

    const onConfirmPasswordChange = ({ target }) => {
        const { value } = target;
        setConfirmPasswordError(validateConfirmPassword(password, value));
        setConfirmPassword(value);
    };

    const register = async (e) => {
        e.preventDefault();

        let data = new FormData();
        data.set('first_name', firstName);
        data.set('last_name', lastName)
        data.set('email', email);
        data.set('password', password);

        const response = await axios.post(url, data);

        if (response.data.error === 0) {
            console.log('All good');
            props.redirect();
        } else if (response.data.error === 1) {
            console.log('Email error');
        } else if (response.data.error === 2) {
            console.log('Password error');
        } else if (response.data.error === 3) {
            console.log('Same email');
        } else if (response.data.error === 4 || response.data.error === 100) {
            console.log('Internal error');
        }
    };

    return (
        <form className='authentication__form' onSubmit={register}>
            <div className='authentication__form--group'>
                <label className='authentication__form--group-text' htmlFor='firstName'>{t('First name')}</label>
                <input 
                    className='authentication__form--group-input' 
                    type='text' 
                    name='firstName'
                    onChange={(e) => setFirstName(e.target.value)}
                />
            </div>
            <div className='authentication__form--group'>
                <label className='authentication__form--group-text' htmlFor='lastName'>{t('Last name')}</label>
                <input 
                    className='authentication__form--group-input' 
                    type='text' 
                    name='lastName'
                    onChange={(e) => setLastName(e.target.value)}
                />
            </div>
            <div className='authentication__form--group'>
                <label className='authentication__form--group-text' htmlFor='email'>{t('Email')}</label>
                <input 
                className={
                    !!emailError
                    ? 'authentication__form--group-input authentication__form--group-input_red' 
                    : 'authentication__form--group-input'
                }
                    type='email' 
                    name='email' 
                    onChange={onEmailChange}
                />
                <span className='authentication__form--error'>{emailError}</span>
            </div>
            <div className='authentication__form--group'>
                <CountrySelect />
            </div>
            <div className='authentication__form--group'>
                <label className='authentication__form--group-text' htmlFor='password'>{t('Password')}</label>
                <input 
                className={
                    !!passwordError 
                    ? 'authentication__form--group-input authentication__form--group-input_red' 
                    : 'authentication__form--group-input'
                }
                    type='password' 
                    name='password'
                    onChange={onPasswordChange}
                />
                <span className='authentication__form--error'>{passwordError}</span>
            </div>
            <div className='authentication__form--group'>
                <label className='authentication__form--group-text' htmlFor='confirmPassword'>{t('Confirm password')}</label>
                <input 
                    className={
                        !!confirmPasswordError 
                        ? 'authentication__form--group-input authentication__form--group-input_red' 
                        : 'authentication__form--group-input'
                    }
                    type='password' 
                    name='confirmPassword'
                    onChange={onConfirmPasswordChange}
                />
                <span className='authentication__form--error'>{confirmPasswordError}</span>
            </div>

            <div className='authentication__form--terms margin-top-medium'>
                    <span className='authentication__form--terms_text'>By signing up, I agree to CAROMOTO's </span>
                    <a className='authentication__form--terms_link'>Terms & Conditions</a>
                    <span className='authentication__form--terms_text'> and </span>
                    <a className='authentication__form--terms_link'>Privacy policy</a>
            </div>

            <button disabled={isDisabled} className='button button-blue margin-top-medium' type='submit'>{t('Sign up')}</button>
        </form>
    );
};

export default RegisterForm;