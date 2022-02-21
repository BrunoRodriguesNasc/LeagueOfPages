import axios from 'axios';

const getChampion = async (champion) => {

    // const { REACT_APP_BASE_URL } = process.env;  
    const { data } = await axios.get('https://backendlolzin.herokuapp.com/champions/', {params:{champion}});
    return data;
}

const getChampionByName = async (name) => {
    const { data } = await axios.get(`https://backendlolzin.herokuapp.com/champions/${name}`);
    return data;
}
export { getChampion , getChampionByName};