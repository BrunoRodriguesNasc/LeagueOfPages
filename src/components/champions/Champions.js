import React from 'react';
import BoxChampions from './BoxChampions';
import { champions } from '../../utils';
import './champions.scss'

const Champions = () => {
  return (
    <div className='champions'>
      <h1>Choose Your <span>Champion</span></h1>
      <div>
        <BoxChampions />
        <BoxChampions />
        <BoxChampions />
        <BoxChampions />
      </div>
    </div>
  );
}

export default Champions;
