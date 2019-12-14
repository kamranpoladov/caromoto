import React, { useState } from 'react';
import CountrySelect from './helpers/CountrySelect';
import { useTranslation } from 'react-i18next';
import validator from 'validator';
import axios from 'axios';
import API from '../utilities/api';

const RegisterForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [confirmPasswordError, setConfirmPasswordError] = useState('');

    const { t } = useTranslation();

    const url = `${API}/user/register`;

    const onEmailChange = ({ target }) => {
        const { value } = target;
        if (validator.isEmail(value)) {
            setEmailError('');
        } else if (!value) {
            setEmailError('Please enter your email address.');
        } else {
            setEmailError('Invalid email format.');
        }
        setEmail(value);
    };

    const onPasswordChange = ({ target }) => {
        const { value } = target;
        if (validator.isLength(value, {min: 6, max: undefined}))  {
            setPasswordError('');
        } else {
            setPasswordError('The password must be at least 6 characters long.');
        }
        setPassword(value);
    };

    const onConfirmPasswordChange = ({ target }) => {
        const { value } = target;
        if (validator.equals(password, value)) {
            setConfirmPasswordError('');
        } else {
            setConfirmPasswordError('The password and confirmation password do not match.');
        }
        setConfirmPassword(value);
    };

    const register = async (e) => {
        e.preventDefault();

        const data = {
            email,
            password,
            first_name: firstName,
            last_name: lastName
        };

        const jsonData = JSON.stringify(data);

        console.log(jsonData);

        const response = await axios.post(url, jsonData);
        console.log(response);
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

            <button className='button button-blue margin-top-medium' type='submit'>{t('Sign up')}</button>
        </form>
    );
};

export default RegisterForm;