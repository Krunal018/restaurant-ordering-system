import axios from "axios";

window.axios = axios;
axios.defaults.withCredentials = false;
axios.defaults.baseURL =
  "https://restaurant-ordering-system-c28u.onrender.com/api";
