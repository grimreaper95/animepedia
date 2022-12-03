import axios from 'axios';
const api = axios.create({withCredentials: true});

const API_BASE = 'http://localhost:4000';
const USER_API = `${API_BASE}/profile`;

export const findUser = async () => {
    const response = await api.get(USER_API);
    return response.data;
}

export const register = async (user) => {
    const response = await api.post(`${API_BASE}/register`, user);
    return response.data;
}

export const login = async (user) => {
    const response = await api.post(`${API_BASE}/login`, user);
    console.log(response.data)
    return response.data;
}

export const logout = async () => {
    const response = await api.post(`${API_BASE}/logout`)
    return response.data
}

export const profile = async () => {
    const response = await api.get(`${API_BASE}/profile`);
    return response.data
}

export const updateProfile = async (user) =>{
    const response = await api.put(`${API_BASE}/profile/${user._id}`, user)
    return user;
}

// export const getLoggedInUserDetails = () => {
//     try {
//         const userDetails = localStorage.getItem("user");
//         return JSON.parse(userDetails);
//     } catch {
//         return undefined;
//     }
// }