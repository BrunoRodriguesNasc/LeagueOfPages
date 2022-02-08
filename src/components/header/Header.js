import React from 'react';
import './header.scss'
import {
    Link
  } from "react-router-dom";

const Header = ({ menu, blog }) => {
    console.log(menu[0].props)
    return (
        <>
        <nav className='header'>
            <div className='header__logo'>
            </div>
            
            <div className='header__menu'>
            {menu.map(item => {
               return <Link to={`${item.props.children === 'Home' ? '/' : `/${item.props.children}`}`}>{item}</Link>
            })}
            </div>
            <div>
                {blog}
            </div>
        </nav>

        </>
        );
}

export default Header;
