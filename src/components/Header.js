import React from 'react';
import { connect } from 'react-redux';

import NavBar from './NavBar';
import LanguageForm from './LanguageForm';
import Clock from './helpers/Clock';
import LogOut from './LogOut';

const Header = (props) => {
    const { translations } = props;

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
    translations: state.language.translations
});

export default connect(mapStateToProps)(Header);