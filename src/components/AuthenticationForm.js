import React, { useState } from 'react';
import { connect } from 'react-redux';
import SigninForm from './SigninForm';
import RegisterForm from './RegisterForm';
import { useTranslation } from 'react-i18next';

const AuthenticationForm = (props) => {
    const [tab, setTab] = useState('signin');

    const { translations } = props;

    const { t } = useTranslation();

    const redirect = () => {
        setTab('signin');
    }

    return (
        <div className='authentication margin-top-huge'>
            <ul className='authentication__tabs'>
                <li 
                    className={
                        tab === 'signin'
                        ? 'authentication__tabs--signin authentication__tabs--signin-a'
                        : 'authentication__tabs--signin'
                    }
                    onClick={() => setTab('signin')}
                    >
                    {translations.form_login_tab_signin}
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
                    {translations.form_login_tab_register}
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
            {tab === 'register' && <RegisterForm redirect={redirect} />}
        </div>
    );
};

const mapStateToProps = (state) => ({
    translations: state.language.translations
});

export default connect(mapStateToProps)(AuthenticationForm);