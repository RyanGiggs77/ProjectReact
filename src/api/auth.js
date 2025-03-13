import axios from 'axios';

const API = axios.create({
    baseURL: 'http://localhost:5000',
    withCredentials: true,
});

export const register = async (email, password) => {
    const response = await API.post('/auth/register', { email, password });
    return response.data;
};

export const login = async (email, password) => {
    const response = await API.post('/auth/login', { email, password });
    return response.data;
};

export const refreshToken = async () => {
    const response = await API.post('/auth/refresh');
    return response.data;
};

export const logout = async () => {
    const response = await API.post('/auth/logout');
    return response.data;
};