import axios from "axios";

const api = axios.create({withCredentials: true});

const API_BASE = 'http://localhost:4000';

export const login = async (admin) => {
    console.log("admin" + admin.username + admin.password)
    const response = await api.post(`${API_BASE}/admin/login`, admin);
    return response.data;
}