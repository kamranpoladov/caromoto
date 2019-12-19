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

    const handleSignIn = async (e) => {
        e.preventDefault();

        let data = new FormData();
        data.set('email', email);
        data.set('password', password);

        try {
            const response = await axios.post(url, data);
            switch (response.data.error) {
                case 0:
                    cookie.set('Access token', response.data.access_token);
                    cookie.set('Refresh token', response.data.refresh_token);
                    localStorage.setItem('username', response.data.username);
                    localStorage.setItem('tokenIssueTime', Date.now());
                    localStorage.setItem('isLoggedIn', true);
                    props.dispatch(userLogIn(response.data.username));
                    history.push('/');
                    break;
                case 4:
                    setSignInError(translations.form_login_user_blocked);
                    break;
                case 100:
                    setSignInError(translations.form_login_failed_to_login);
                    break;
                default:
                    setSignInError(translations.form_login_failed_to_login);
                    break;
            }
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <form className='authentication__form' onSubmit={handleSignIn} method='post'>
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