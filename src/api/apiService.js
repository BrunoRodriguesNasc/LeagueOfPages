import axios from 'axios';

const getChampion = async (champion) => {

    const { REACT_APP_BASE_URL } = process.env;  
    const { data } = await axios.get('https://backendlolzin.herokuapp.com/champions/', champion);
    return data;
}

export default getChampion;