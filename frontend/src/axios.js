import axios from "axios";

window.axios = axios;
axios.defaults.withCredentials = false;
let backendUrl = "https://restaurant-ordering-system-c28u.onrender.com/api";
axios.defaults.baseURL =
  "https://restaurant-ordering-system-c28u.onrender.com/api";
