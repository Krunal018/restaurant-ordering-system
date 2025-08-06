import axios from "axios";

window.axios = axios;
axios.defaults.withCredentials = false;
// axios.defaults.baseURL = "http://localhost:8000/api"
let backendUrl = "https://restaurant-ordering-system-c28u.onrender.com/api";
axios.defaults.baseURL = backendUrl;
