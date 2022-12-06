import axios from "axios";

const RANDOM_ANIME_URL = 'https://api.jikan.moe/v4/anime';

export const randomAnime = async () => {
    const response = await axios.get(`${RANDOM_ANIME_URL}`)
    console.log(response.data)
    return response.data.data;
}