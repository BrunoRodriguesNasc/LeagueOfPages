import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getChampionByName } from '../../api/apiService';
import { typeChampion } from '../../utils';
import Rating from '../rating/Rating';
import './infoChampion.scss';
// import '../../assets'
const InfoChampions = () => {
    const [championData, setChampionData] = useState(false);

    const { champion } = useParams();

    useEffect(() => {
        async function fetchData() {
            const data = await getChampionByName(champion);
            setChampionData(data[champion]);
        }
        fetchData();
    }, [champion]);
    if (championData) {
        console.log(championData);
    }

    const classContainer = {
        backgroundImage: `url(${'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/' + championData?.name + '_0.jpg'})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        position: 'absolute',
        objectFit: 'contain',
        height: '1000px',
        width: '100%'
    };

    return (
        !!championData &&
        <>
            <div className='screen'>
                <div className='screen__champion' style={classContainer}>
                    <div style={{ backgroundImage: `url(${'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/' + championData?.name + '_0.jpg'})` }} className='screen__champion__image' />
                    <div className='screen__champion__info'>
                        <span className='title'>{championData.title}</span>
                        <span className='name'><p>{championData.name}</p></span>
                    </div>
                    <div className='info__champion__container'>
                        <div className='info__champion__role'>
                            <div className='info__role'>
                                <div className="image__champion__type" style={{ backgroundImage: `url('${typeChampion[championData.tags[0]].image}')` }} />
                                <span style={{marginBottom:'10px'}}>Function</span>
                                <span style={{color:'#7a673e'}}>{championData.tags[0]}</span>
                            </div>
                            <div className='info__role'>
                                <Rating difficulty={championData.info.difficulty}/>
                                <span style={{marginBottom:'10px'}}>Difficulty</span>
                                <span style={{color:'#7a673e'}}>{championData.info.difficulty === 10 ? 'High' : championData.info.difficulty < 5 ? 'Low' : 'Moderate'}</span>
                            </div>
                        </div>
                        <span className='line'></span>
                        <div className='info__champion__lore'>
                            <span className='lore'>{championData.lore}</span>
                        </div>

                    </div>
                </div>
            </div>
            <div className='teste'></div>
        </>

    )
}

export default InfoChampions