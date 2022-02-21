import React from 'react';
import './rating.scss';

const Rating = ({ difficulty }) => {
    return (
        <div className="container">
            <span className='loading'></span>
            <span className={difficulty > 3 ? 'loading' : 'loading-low-opacity'}></span>
            <span className={difficulty > 8 ? 'loading' : 'loading-low-opacity'}></span>
        </div>
    )
}

export default Rating