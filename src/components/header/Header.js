import React from 'react';
import Image from '../Image/Image';
import './header.scss'
const Header = ({ logo, menu, blog }) => {
    return (
        <>
        <nav className='header'>
            <div>
                {logo}
            </div>
            <div>
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
