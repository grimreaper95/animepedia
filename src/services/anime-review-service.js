import axios from "axios";

const api = axios.create({withCredentials: true});

const API_BASE = 'http://localhost:4000';

export const findAllReviewsForAnime = async (animeId) => {
    const response = await api.get(`${API_BASE}/review/anime/${animeId}`, animeId);
    return response;
}

export const findAllReviewsByUser = async (userId) => {
    const response = await api.get(`${API_BASE}/review/user/`, userId);
    return response;
}

export const createReview = async (review) => {
    const response = await api.post(`${API_BASE}/review`, review)
    return response;
}

export const removeReview = async (reviewId) => {
    const response = await api.delete(`${API_BASE}/remove-review/${reviewId}`)
    return response;
}