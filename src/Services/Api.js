import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost/apimanoblack/'
});
export default api;