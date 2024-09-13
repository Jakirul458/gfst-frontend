import axios from "axios";

const api = axios.create({
    baseURL : import.meta.env.VITE_API_URL,
    timeout : 3*60*1000
})

export default api;