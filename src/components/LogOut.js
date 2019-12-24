import React from 'react';
import { connect } from 'react-redux';
import cookie from 'js-cookie';
import { Link } from 'react-router-dom';
import cookieNames from '../utilities/cookieNames';
import { userLogOut } from '../actions/user';

const LogOut = (props) => {
    const { user, translations } = props;

    const handleLogOut = () => {
        cookie.remove(cookieNames.access);
        cookie.remove(cookieNames.refresh);
        props.dispatch(userLogOut());
        localStorage.setItem('isLoggedIn', false);
    };

    return (
        <div>
            {
                localStorage.getItem('isLoggedIn') === 'true'
                ?
                <div className='header__top--logout'>
                    <Link className='header-text header__top--logout-username' to='/me'>{user.username}</Link>
                    <Link className='header-text header__top--logout-text' to='/login' onClick={handleLogOut}>{translations.navbar_logout}</Link>
                </div>
                :
                <div className='header__top--signin'>
                    <Link className='header-text' to='/login'>{translations.navbar_sign_in}</Link>
                </div>
            }
        </div>
    )
};

const mapStateToProps = (state) => ({
    user: {
        username: state.user.username || localStorage.getItem('username')
    },
    translations: state.language.translations
});

export default connect(mapStateToProps)(LogOut);