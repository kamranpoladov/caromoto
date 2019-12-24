import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import LogOut from './LogOut';

const NavBar = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleSideMenu = () => {
        if (isOpen) {
            document.getElementById('nav').style.right = '-50rem';
            document.getElementById('toggle').style.right = '4vw';
            setIsOpen(false);
        } else {
            document.getElementById('nav').style.right = '-1rem';
            document.getElementById('toggle').style.right = '18rem';
            setIsOpen(true);
        }
    };

    const navItems = document.getElementsByClassName('nav--item');
    for (let i = 0; i < navItems.length; i++) {
        navItems[i].addEventListener('click', handleSideMenu);
    }

    return (
        <div className='nav'>
            <div id='toggle' className='nav__toggle-btn' onClick={handleSideMenu}>
                <span className='nav__toggle-btn--part'></span>
                <span className='nav__toggle-btn--part'></span>
                <span className='nav__toggle-btn--part'></span>
            </div>
            <div id='nav' className='nav__list-wrap'>
                <ul className='nav__list'>
                    <li className='nav--item'>
                        <NavLink activeClassName='nav--item-a' to='/'>{props.translations.navbar_find_vehicles}</NavLink>
                    </li>
                    <li className='nav--item'>
                        <NavLink activeClassName='nav--item-a' to='/'>{props.translations.navbar_calc}</NavLink>
                    </li>
                    <li className='nav--item'>
                        <NavLink activeClassName='nav--item-a' to='/'>{props.translations.navbar_auctions}</NavLink>
                    </li>
                    <li className='nav--item'>
                        <NavLink activeClassName='nav--item-a' to='/'>{props.translations.navbar_how_to_buy}</NavLink>
                    </li>
                    <li className='nav--item'>
                        <NavLink activeClassName='nav--item-a' to='/'>{props.translations.navbar_wholesaler}</NavLink>
                    </li>
                    <li className='nav--item'>
                        <NavLink activeClassName='nav--item-a' to='/'>{props.translations.navbar_help}</NavLink>
                    </li>
                    <li className='nav--item nav--item-last'>
                        <NavLink activeClassName='nav--item-a' to='/'>{props.translations.navbar_contacts}</NavLink>
                    </li>
                    <li className='nav--item'>
                        <div className='nav--wrap-logout'>
                            <LogOut />
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default NavBar;