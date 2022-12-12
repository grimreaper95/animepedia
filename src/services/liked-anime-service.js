import axios from 'axios';
import APP_URL from "../constants";

const api = axios.create({withCredentials: true});
const API_BASE = APP_URL.node_server;

export const findAllLikedAnime = async (userId) => {
    const response = await api.get(`${API_BASE}/like/${userId}`, userId);
    return response.data
}

export const findOtherAllLikedAnime = async (userId) => {
    const response = await api.get(`${API_BASE}/like/${userId}`, userId);
    return response.data
}

export const addLikedAnime = async (userLikedAnime) => {
    console.log(userLikedAnime)
    const response = await api.post(`${API_BASE}/like`, userLikedAnime);
    return response.data
}

export const removeLikedAnime = async (userDislikedAnime) => {
    console.log(userDislikedAnime)
    const response = await api.post(`${API_BASE}/dislike`, userDislikedAnime);
    return response.data
}



export const getLikesCount = async (animeId) => {
    const response = await api.get(`${API_BASE}/likescount/${animeId}`, animeId);
    return response.data.length
}

export const getUserLikesAnime = async (useranime) => {
    const response = await api.get(`${API_BASE}/userlikesanime/${useranime.userId}/${useranime.animeId}`, useranime);
    return response.data
}
