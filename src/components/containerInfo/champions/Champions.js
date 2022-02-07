import React from 'react';
import BoxChampions from './BoxChampions';
import { champions } from '../../../utils';
import './champions.scss'

const Champions = () => {
  return (
    <div className='champions'>
      <h1>Choose Your <span>Champion</span></h1>
      <div className='champions__container'>
       {champions.map(({name,image,detail}) => <BoxChampions image={image} name={name} detail={detail}/>)}
      </div>
    </div>
  );
}

export default Champions;
