import axios from "axios";
const api = axios.create({
    // baseURL : import.meta.env.VITE_API_URL,
    baseURL: 'https://gfst-backend.onrender.com',
    timeout : 3*60*1000,
    //headers : { "Content-Type": "application/json" }
})

export default api;