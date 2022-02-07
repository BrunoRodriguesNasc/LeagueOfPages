import React from 'react';

const BoxRoles = ({ image, detail, name }) => {

    const style = {
        backgroundImage: `url(${image})`,
        backgroundSize: 'contain',
        width: '25%',
        height: '50%',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        margin: 'auto',
        objectFit: 'cover',
        transition: '0.5s ease'
    };

    return (
        <div className='boxRoles'>
            <div style={style} className='boxRoles__image' />
            <div className='boxRoles__detail'>
                <span className='boxRoles__name'>{name}</span>
                <span className='boxRoles__information'>{detail}</span>
            </div>
        </div>
    );
}

export default BoxRoles;
