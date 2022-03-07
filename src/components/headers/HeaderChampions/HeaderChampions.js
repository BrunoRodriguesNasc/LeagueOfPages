import React from 'react';
import './headerChampions.scss';

const HeaderChampions = () => {
    return <div className='header__champions'>
        <h1 className='header__champions__header'>
            <p>CHOOSE YOURS</p>
            <span>CHAMPION</span>
            <p className='header__champions__header__message'>With over 140 champions, you'll find the perfect match for your playstyle. Specialize in one style or all.</p>
        </h1>
    </div>;
}

export default HeaderChampions;
