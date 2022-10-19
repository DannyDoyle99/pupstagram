import axios from 'axios';

const BASE_URL = 'https://dog.ceo/api/breed/'

export const fetchDogs = async (query) => {
    const { data } = await axios.get(`${BASE_URL}${query}/images/random/50`);
    return data;
}