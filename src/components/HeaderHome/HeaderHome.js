import React from 'react';
import Button from '../button/Button';
import './image.scss';

function HeaderHome() {
  return (
    <>
      <div className='image__header'>
      </div>
      <div className='image__header__message'>
        <span className='image__header__message__play'>Play</span>
        <span className='image__header__message__game'>League of Legends</span>
        <span className='image__header__message__line'></span>
        <Button
          color={'#ececef'}
          width={'150px'}
          height={'50px'}
          bgColor={'rgb(15 52 54)'}
          label={'Play now'}
        ></Button>
      </div>
    </>
  );
}

export default HeaderHome;
