import axios from 'axios';

const getChampion = async (champion) => {

    const { REACT_APP_BASE_URL } = process.env;  
    const { data } = await axios.get(REACT_APP_BASE_URL, champion);
    return data;
}

export default getChampion;