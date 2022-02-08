import React from 'react';
import './headerChampions.scss';

const HeaderChampions = () => {
    return <div className='header__champions'>
        <h1 className='header__champions__header'>
            <p>ESCOLHA SEU</p>
            <span>CAMPEÃO</span>
            <p className='header__champions__header__message'>Com mais de 140 Campeões, você encontrará a combinação perfeita para seu estilo de jogo.
                Especialize-se em um estilo ou em todos.</p>
        </h1>
    </div>;
}

export default HeaderChampions;
