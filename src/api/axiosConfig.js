import axios from 'axios';

export default axios.create({
    baseURL:'https://movieserver-production-d9ad.up.railway.app/',
    headers: {"ngrok-skip-browser-warning": "true"}
})