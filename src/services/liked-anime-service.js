import axios from 'axios';

const api = axios.create({withCredentials: true});
const API_BASE = 'http://localhost:4000';

export const findAllLikedAnime = async (userId) => {
    const response = await api.get(`${API_BASE}/like/${userId}`, userId);
    return response.data
}

export const addLikedAnime = async (userLikedAnime) => {
    console.log(userLikedAnime)
    const response = await api.post(`${API_BASE}/like`, userLikedAnime);
    return response.data
}

export const getLikesCount = async (animeId) => {
    const response = await api.get(`${API_BASE}/likescount/${animeId}`, animeId);
    return response.data.length
}

export const getUserLikesAnime = async (useranime) => {
    console.log('checking for: ' + useranime.userId +  ' ' + useranime.animeId);
    const response = await api.get(`${API_BASE}/userlikesanime/${useranime.userId}/${useranime.animeId}`, useranime);
    console.log('user likes anime result ' + response.data);
    return response.data
}
