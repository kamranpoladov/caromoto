import React from 'react';
import { NavLink, Link } from 'react-router-dom';

import LanguageForm from './LanguageForm';
import Clock from './helpers/Clock';
import { useTranslation } from 'react-i18next';

const Header = () => {
    const { t } = useTranslation();

    return (
        <header id='header' className='header'>
            <div className='header__top'>
                <LanguageForm />
                <div className='header__top--signin'>
                    <Link className='header-text' to='/login'>{t('Sign in')}</Link>
                </div>
            </div>
            <div className='header__bottom'>
                <Link to='/'>
                    <img className='header__bottom--logo' src={'https://caromoto.com/img/logo.svg'} />
                </Link>
                <div className='header__bottom--right'>
                    <span className='header-text'>+1 (425) 9546058</span>
                    <a className='header-text'>
                        <span className='padding-small-right'>{t('Other')}</span>
                        <i className="fas fa-angle-down"></i>
                    </a>
                    <Clock />
                </div>
            </div>
            <div className='header__nav'>
                <NavLink className='header__nav--item' activeClassName='header__nav--item-a' to='/'>Find vehicle</NavLink>
                <NavLink className='header__nav--item' activeClassName='header__nav--item-a' to='/'>Calculator</NavLink>
                <NavLink className='header__nav--item' activeClassName='header__nav--item-a' to='/'>Auctions</NavLink>
                <NavLink className='header__nav--item' activeClassName='header__nav--item-a' to='/'>How to buy</NavLink>
                <NavLink className='header__nav--item' activeClassName='header__nav--item-a' to='/'>For wholesalers</NavLink>
                <NavLink className='header__nav--item' activeClassName='header__nav--item-a' to='/'>Help</NavLink>
                <NavLink className='header__nav--item' activeClassName='header__nav--item-a' to='/'>Contacts</NavLink>
            </div>
        </header>
    );
};

export default Header;