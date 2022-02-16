import React from 'react';
import { roles } from '../../../utils'
import BoxRoles from './BoxRoles';
import './role.scss';

const Roles = () => {
  return <div className='roles'>
    <div className='roles__background'></div>
    <div className='roles__information'>
    <h1>Choose Your <span>Role</span></h1>
    <div className='role__container'>
      {roles.map(({name, detail, image }) =>  <BoxRoles key={name} image={image} detail={detail} name={name}/>)}
    </div>
    </div>
  </div>;
}

export default Roles;
