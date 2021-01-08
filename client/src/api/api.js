import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:5000/api',
})

export const addUser = payload => api.post(`/register`, payload, { withCredentials: true });

export const getAllUsers = () => api.get(`/users`, { withCredentials: true })

export const logOut = () => api.get(`/logout`, { withCredentials: true })

export const logIn = payload => api.post(`/login`, payload, { withCredentials: true })


const apis = {
    addUser,
    getAllUsers,
    logOut,
    logIn,
}

export default apis