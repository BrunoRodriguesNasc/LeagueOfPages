import React, { useEffect, useState } from 'react';
import { getChampion } from '../api/apiService';
import CardChampions from '../components/Champions/cardChampions/CardChampions';
import HeaderChampions from '../components/Champions/HeaderChampions/HeaderChampions';
import ContainerChampions from '../components/Champions/containerChampions/containerChampions';

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
            return <CardChampions key={champion.name} id={champion.id} name={champion.name} image={champion.splash}/>;
        })}
    </ContainerChampions>
  </>
  );
}

export default ChampionsPage;
