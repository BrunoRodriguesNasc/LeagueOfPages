import React, { useEffect, useState } from 'react';
import { getChampion } from '../api/apiService';
import CardChampions from '../components/cardChampions/CardChampions';
import HeaderChampions from '../components/HeaderChampions/HeaderChampions';
import ContainerChampions from '../components/containerChampions/containerChampions';

const ChampionsPage = () => {
  const [champions, setChampions ] = useState([]);

  useEffect( () => {
    async function fetchData() {
     const data =  await getChampion();
     setChampions(data);
    } 
    fetchData();
  },[])

  return (
  <>
    <HeaderChampions/>
    <ContainerChampions>
      {champions && champions.map((champion) => {
            return <CardChampions key={champion.name} name={champion.name} image={champion.splash}/>;
        })}
    </ContainerChampions>
  </>
  );
}

export default ChampionsPage;
