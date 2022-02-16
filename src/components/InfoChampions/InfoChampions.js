import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { getChampionByName } from '../../api/apiService';
import './infoChampion.scss';

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
        backgroundPosition:'center center',
        objectFit: 'contain',
        height: '100vh',
        width:'100%'
    };

    return (
        !!championData &&
        <div className='screen__champion' style={classContainer}>
            <div style={{backgroundImage:`url(${'http://ddragon.leagueoflegends.com/cdn/img/champion/splash/' + championData?.name + '_0.jpg'})`}} className='screen__champion__image'/>
            <div className='screen__champion__info'>
                <span className='title'>{championData.title}</span>
            </div>
        </div>
    )
}

export default InfoChampions