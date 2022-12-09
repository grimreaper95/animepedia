import axios from "axios";

const api = axios.create({withCredentials: true});

const API_BASE = 'http://localhost:4000';

export const adminLogin = async (admin) => {
    const response = await api.post(`${API_BASE}/admin/login`, admin);
    return response.data;
}

export const adminLogout = async () => {
    const response = await api.post(`${API_BASE}/admin/logout`)
    return response.data;
}

export const getReviewerList = async (adminId) => {
    const response = await api.post(`${API_BASE}/admin/list/${adminId}`, adminId)
    return response.data;

}

export const addReviewer = async (reviewerId) => {
    const response = await api.post(`${API_BASE}/admin/add-reviewer/${reviewerId}`, reviewerId)
    return response.data
}

export const getAdminDetails = async () => {
    const response = await api.get(`${API_BASE}/admin/details`)
    return response.data
}