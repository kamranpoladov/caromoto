import React from 'react';
import { connect } from 'react-redux';
import { NavLink, Link } from 'react-router-dom';
import cookie from 'js-cookie';
import cookieNames from '../utilities/cookieNames';

import NavBar from './NavBar';
import LanguageForm from './LanguageForm';
import Clock from './helpers/Clock';
import { userLogOut } from '../actions/user';
import LogOut from './LogOut';

const Header = (props) => {
    const { user, translations } = props;

    const handleLogOut = () => {
        cookie.remove(cookieNames.access);
        cookie.remove(cookieNames.refresh);
        props.dispatch(userLogOut());
        localStorage.setItem('isLoggedIn', false);
    };

    return (
        <header id='header' className='header'>
            <div className='header__top'>
                <LanguageForm />
                <div className='header__top--wrap-logout'>
                    <LogOut />
                </div>
            </div>
            <div className='header__bottom'>
                <img className='header__bottom--logo' src={'https://caromoto.com/img/logo.svg'} />
                <div className='header__bottom--right'>
                    <span className='header-text header__bottom--right_number'>+1 (425) 9546058</span>
                    <a className='header-text header__bottom--right_country'>
                        <span className='padding-small-right'>{translations.region_name_ww}</span>
                        <i className="fas fa-angle-down"></i>
                    </a>
                    <Clock />
                </div>
            </div>
            <NavBar translations={translations} />
        </header>
    );
};

const mapStateToProps = (state) => ({
    user: {
        username: state.user.username || localStorage.getItem('username')
    },
    translations: state.language.translations
});

export default connect(mapStateToProps)(Header);