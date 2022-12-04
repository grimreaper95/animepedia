import axios from "axios";

const SEARCH_URL = 'https://api.jikan.moe/v4/anime?q=';

export const searchAnime = async (query) => {
    const response = await axios.get(`${SEARCH_URL}${query}`)
    console.log(response.data)
    return response.data.data;
}