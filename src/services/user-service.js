import axios from 'axios';

const API_BASE = 'http://localhost:4000';
const USER_API = `${API_BASE}/profile`;

export const findUser = async () => {
    const response = await axios.get(USER_API);
    return response.data;
}