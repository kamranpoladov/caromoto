import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import LogOut from './LogOut';

const NavBar = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleSideMenu = () => {
        if (window.innerWidth < 900) {
            if (isOpen) {
                document.getElementById('nav').style.top = '-70rem';
                document.getElementById('toggle').style.right = '4vw';
                document.getElementById('close').style.top = '-5rem';
                setIsOpen(false);
            } else {
                document.getElementById('nav').style.top = '0';
                document.getElementById('toggle').style.right = '-10rem';
                document.getElementById('close').style.top = '0';
                setIsOpen(true);
            }
        }
    };

    return (
        <div className='nav'>
            <div id='toggle' className='nav__toggle-btn' onClick={handleSideMenu}>
                <span className='nav__toggle-btn--part'></span>
                <span className='nav__toggle-btn--part'></span>
                <span className='nav__toggle-btn--part'></span>
            </div>
            <div id='close' className='nav__close-btn' onClick={handleSideMenu}>
                <span>&times;</span>
            </div>
            <div id='nav' className='nav__list-wrap'>
                <ul className='nav__list'>
                    <li className='nav--item'>
                        <NavLink onClick={handleSideMenu} activeClassName='nav--item-a' to='/'>{props.translations.navbar_find_vehicles}</NavLink>
                    </li>
                    <li className='nav--item'>
                        <NavLink onClick={handleSideMenu} activeClassName='nav--item-a' to='/'>{props.translations.navbar_calc}</NavLink>
                    </li>
                    <li className='nav--item'>
                        <NavLink onClick={handleSideMenu} activeClassName='nav--item-a' to='/'>{props.translations.navbar_auctions}</NavLink>
                    </li>
                    <li className='nav--item'>
                        <NavLink onClick={handleSideMenu} activeClassName='nav--item-a' to='/'>{props.translations.navbar_how_to_buy}</NavLink>
                    </li>
                    <li className='nav--item'>
                        <NavLink onClick={handleSideMenu} activeClassName='nav--item-a' to='/'>{props.translations.navbar_wholesaler}</NavLink>
                    </li>
                    <li className='nav--item'>
                        <NavLink onClick={handleSideMenu} activeClassName='nav--item-a' to='/'>{props.translations.navbar_help}</NavLink>
                    </li>
                    <li className='nav--item nav--item-last'>
                        <NavLink onClick={handleSideMenu} activeClassName='nav--item-a' to='/'>{props.translations.navbar_contacts}</NavLink>
                    </li>
                    <li className='nav--item nav--item-last-small'>
                        <div className='nav--wrap-logout'>
                            <LogOut handleSideMenu={handleSideMenu} />
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default NavBar;