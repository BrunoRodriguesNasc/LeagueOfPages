import React from 'react';
import { arrayChampionsCenter } from '../../utils';
import './cardChampions.scss';

const CardChampions = ({ image, name }) => {

  const styleImage = {
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    width: '100%',
    height: '100%',
    display:'flex',
    alignItems:'flex-end',
    backgroundPosition: arrayChampionsCenter.includes(name) ? '50%' : '100% 50%'
  }
  console.log(name);
  return (
    <div className='card__champions'>
      <div className='card__champions__image' style={styleImage}>
      </div>
      <div className='card__champions__name'>{name}</div>
    </div>
  )
}

export default CardChampions