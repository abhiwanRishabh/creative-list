import axios from 'axios';

export const Axios = axios.create({
    baseURL: 'https://random-flat-colors.vercel.app/api/random',
});