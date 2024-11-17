import axios from "axios";

export const MAINURL = "https://algbot-production.up.railway.app";

const axiosInstance = axios.create({
  baseURL: MAINURL,
});

export default axiosInstance;
