import React from 'react';
import Image from '../Image/Image';
import './header.scss'

const Header = ({ menu, blog }) => {
    return (
        <>
        <nav className='header'>
            <div className='header__logo'>
            </div>
            <div className='header__menu'>
                {menu}
            </div>
            <div>
                {blog}
            </div>
        </nav>
        <Image/>
        </>
        );
}

export default Header;
