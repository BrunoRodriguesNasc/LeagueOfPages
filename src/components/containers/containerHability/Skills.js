import React, { useState } from 'react'
import parse from 'html-react-parser';
import './skills.scss'

function Skills({ champion }) {

    const [indexSkill, setIndexSkill ] = useState(0);

    const percentToCircle = {
        0 : '9.5%',
        1 : '29.3%',
        2 : '49.3%',
        3 : '69.3%',
        4 : '89.3%',
    }

    return (
        <section className="container__skill">
            <div className="container__button">
                <button className="button__skill" onClick={() => setIndexSkill(0)}>
                    <span className="image__span">
                        <span>
                            <span className="border__image" style={{opacity : `${indexSkill === 0 ? 1 : 0}` }}> </span>
                            <img className="skill__image"
                                src={`https://ddragon.leagueoflegends.com/cdn/12.4.1/img/passive/${champion?.passive?.image?.full}`} alt='skill' />
                        </span>
                    </span>
                    <span className="line__top" style={{transform : `scaleY(${indexSkill === 0 ? 1 : 0})` }}></span>
                    <span className="line__hability">
                        <span className="inside__line">
                        </span>
                    </span>
             </button>
                {champion.spells.map((value, index) => {
                    return (
                        <button className={`button__skill`} key={index} onClick={() => setIndexSkill(index + 1)}>
                            <span className="image__span">
                                <span>
                                    <span className="border__image" style={{opacity : `${indexSkill === (index + 1) ? 1 : 0}`}}> </span>
                                    <img className="skill__image"
                                        src={`https://ddragon.leagueoflegends.com/cdn/12.4.1/img/spell/${value.id}.png`} alt='skill' />
                                </span>
                            </span>
                            <span className="line__top" style={{transform : `scaleY(${indexSkill === (index + 1) ? 1 : 0})` }}></span>
                            <span className="line__hability">
                                <span className="inside__line">
                                </span>
                            </span>
                        </button>
                    )
                })}

                <span className="circle" style={{left:percentToCircle[indexSkill]}}>
                    <span className="inside__circle"></span>
                </span>
            </div>
            <div style={{height:'200px'}}>
                <div className={`hability`}>
                    <h2 className="title__hability">
                        {indexSkill === 0 ? champion.passive.name : champion.spells[indexSkill - 1].name}
                    </h2>
                    <span className={`info__hability opacity-${indexSkill - 1}`}>
                    {indexSkill === 0 ? parse(champion.passive.description) : parse(champion.spells[indexSkill - 1].description)}
                    </span>
                </div>
            </div>
        </section>
    )
}

export default Skills