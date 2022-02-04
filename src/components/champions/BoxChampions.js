import React from 'react';

function BoxChampions({ image, detail, name }) {

  const style = {
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    width: '100%',
    height: '250px',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    margin: 'auto',
    objectFit:'cover',
    transition: '0.5s ease'

  }

  return (
    <div className='boxChampions'>
      <div style={style} className='boxChampions__image'></div>
      <div className='boxChampions__detail'>{detail}</div>
      <div className='boxChampions__infomartion'>Detailed information</div>
    </div>
  );
}

export default BoxChampions;
