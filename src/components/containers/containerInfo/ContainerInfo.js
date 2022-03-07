import React from 'react';
import Champions from '../containerInfo/champions/Champions';
import './containerInfo.scss';
import Roles from './roles/Roles';

const ContainerInfo = () => {
  return (
  <div className='containerInfo'>
      <Champions/>
      <Roles/>
  </div>);
}

export default ContainerInfo;
