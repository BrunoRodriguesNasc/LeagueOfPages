import axios from 'axios';

const getChampion = async (champion) => {

    const { REACT_APP_BASE_URL } = process.env;  
    const { data } = await axios.get(REACT_APP_BASE_URL, {params:{champion}});
    return data;
}

const getChampionByName = async (name) => {
    const { REACT_APP_BASE_URL } = process.env;  
    const { data } = await axios.get(`${REACT_APP_BASE_URL}${name}`);
    return data;
}
export { getChampion , getChampionByName};