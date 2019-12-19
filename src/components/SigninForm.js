import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import API from '../utilities/api';
import Switch from 'react-switch';
import cookie from 'js-cookie';
import { userLogIn } from '../actions/user';

const SigninForm = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [signInError, setSignInError] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    const { translations } = props;
    const url = `${API}/user/login`;
    const history = useHistory();

    const signIn = async (e) => {
        e.preventDefault();

        let data = new FormData();
        data.set('email', email);
        data.set('password', password);

        const response = await axios.post(url, data);

        if (response.data.error === 0) {
            cookie.set('Access token', response.data.access_token);
            cookie.set('Refresh token', response.data.refresh_token);
            localStorage.setItem('username', response.data.username);
            sessionStorage.setItem('tokenIssueTime', Date.now());
            props.dispatch(userLogIn(response.data.username));
            history.push('/');
        } else if (response.data.error === 1) {
            console.log('Email error');
        } else if (response.data.error === 2) {
            console.log('Password error');
        } else if (response.data.error === 3) {
            console.log('User not found');
        } else if (response.data.error === 4) {
            console.log('User is blocked');
        } else if (response.data.error === 5) {
            setSignInError('Failed to login. Wrong email or password.');
        } else {
            console.log('Internal server error');
        }
    }

    return (
        <form className='authentication__form' onSubmit={signIn} method='post'>
            <div className='authentication__form--group'>
                <label className='authentication__form--group-text' htmlFor='email'>{translations.form_login_email}</label>
                <input 
                    className='authentication__form--group-input' 
                    type='email' 
                    name='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className='authentication__form--group'>
                <label className='authentication__form--group-text' htmlFor='password'>{translations.form_login_password}</label>
                <input 
                    className='authentication__form--group-input' 
                    type='password' 
                    name='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <div className='authentication__form--controls'>
                <a className='authentication__form--controls-forgot'>{translations.form_login_forgot_password}</a>
                <div className='authentication__form--controls-remember'>
                    <label className='authentication__form--controls-remember_text' htmlFor='remember'>{translations.form_login_remember_me}</label>
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
                        width={25} 
                    />
                </div>
            </div>
            <div className='authentication__form--errors'>
                <span>{signInError}</span>
            </div>
            <button type='submit' className='button button-blue margin-top-small'>{translations.form_login_btn_login}</button>
        </form>
    );
};

const mapStateToProps = (state) => {
    return {
        user: state.user,
        translations: state.language.translations
    }
}

export default connect(mapStateToProps)(SigninForm);