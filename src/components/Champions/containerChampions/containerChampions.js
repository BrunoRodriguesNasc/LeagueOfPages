import React from 'react'
import './containerChampions.scss';

const ContainerChampions = ({ children }) => {
  return (
    <div className='container__champions'>
      <div className='container__champions__secundary'>{children}</div>
    </div>
  )
}

export default ContainerChampions;