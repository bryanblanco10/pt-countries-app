import axios from "axios";
axios.defaults.headers.common["Accept"] = "application/json";

axios.interceptors.request.use((config) => {
  return config;
});

export default axios;
