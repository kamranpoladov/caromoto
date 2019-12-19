import React from 'react';
import { connect } from 'react-redux';
import { NavLink, Link, useHistory } from 'react-router-dom';
import cookie from 'js-cookie';

import LanguageForm from './LanguageForm';
import Clock from './helpers/Clock';
import { userLogOut } from '../actions/user';

const Header = (props) => {
    const history = useHistory();
    const { user, translations } = props;

    const handleLogOut = () => {
        cookie.remove('Access token');
        cookie.remove('Refresh token');
        props.dispatch(userLogOut());
        localStorage.setItem('isLoggedIn', false);
        history.push('/login');
    };

    return (
        <header id='header' className='header'>
            <div className='header__top'>
                <LanguageForm />
                {
                    localStorage.getItem('isLoggedIn') === 'true'
                    ?
                    <div className='header__top--logout'>
                        <Link className='header-text header__top--logout-username' to='/me'>{user.username}</Link>
                        <a className='header-text header__top--logout-text' onClick={handleLogOut}>{translations.navbar_logout}</a>
                    </div>
                    :
                    <div className='header__top--signin'>
                        <Link className='header-text' to='/login'>{translations.navbar_sign_in}</Link>
                    </div>
                }
            </div>
            <div className='header__bottom'>
                <Link to='/'>
                    <img className='header__bottom--logo' src={'https://caromoto.com/img/logo.svg'} />
                </Link>
                <div className='header__bottom--right'>
                    <span className='header-text'>+1 (425) 9546058</span>
                    <a className='header-text'>
                        <span className='padding-small-right'>{translations.region_name_ww}</span>
                        <i className="fas fa-angle-down"></i>
                    </a>
                    <Clock />
                </div>
            </div>
            <div className='header__nav'>
                <NavLink className='header__nav--item' activeClassName='header__nav--item-a' to='/'>{translations.navbar_find_vehicles}</NavLink>
                <NavLink className='header__nav--item' activeClassName='header__nav--item-a' to='/'>{translations.navbar_calc}</NavLink>
                <NavLink className='header__nav--item' activeClassName='header__nav--item-a' to='/'>{translations.navbar_auctions}</NavLink>
                <NavLink className='header__nav--item' activeClassName='header__nav--item-a' to='/'>{translations.navbar_how_to_buy}</NavLink>
                <NavLink className='header__nav--item' activeClassName='header__nav--item-a' to='/'>{translations.navbar_wholesaler}</NavLink>
                <NavLink className='header__nav--item' activeClassName='header__nav--item-a' to='/'>{translations.navbar_help}</NavLink>
                <NavLink className='header__nav--item' activeClassName='header__nav--item-a' to='/'>{translations.navbar_contacts}</NavLink>
            </div>
        </header>
    );
};

const mapStateToProps = (state) => {
    return {
        user: {
            username: state.user.username || localStorage.getItem('username'),
            isLoggedIn: state.user.isLoggedIn
        },
        translations: state.language.translations
    }
}

export default connect(mapStateToProps)(Header);