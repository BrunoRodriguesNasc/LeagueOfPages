import React, { useState } from 'react';
import './skins.scss';

function Skins({ name, id, skins }) {

  const [numberSkins, setNumberSkin] = useState(0);


  const styleImage = (number) => {
    return {
      backgroundImage: `url(http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${id}_${number}.jpg)`,
      width: '100px',
      height: '100px',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      margin: '10px',
      position: 'relative',
      transform: `${number === numberSkins ? 'scale(1.1)' : 'scale(0.8)'}`,
      opacity: `${number === numberSkins ? '1' : '0.5'}`,
      transition: '0.5s ease',
    }
  }

  return (
    <section className='container__skins'>
      <div className='skins' style={{ backgroundImage: `url(http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${id}_${numberSkins}.jpg)` }}>
        <div className='skins__list'>
          <h3 className='skins__title'>available skins</h3>
          <div className='skins__selects'>
            <ul className='list_champion' >
              {
                skins.map((skin, index) => {
                  return (

                    <li className='item' key={skin.num} onClick={() => setNumberSkin(skin.num)}>
                        <div classame='list__image' style={styleImage(skin.num)} />
                        <div className='list__name'>{index === 0 ? name : skin.name}</div>
                     
                    </li>

                  )
                })

              }
            </ul>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Skins