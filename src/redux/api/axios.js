import axios from "axios";

export const MAINURL = "https://jsonplaceholder.typicode.com";

const axiosInstance = axios.create({
  baseURL: MAINURL,
});

export default axiosInstance;
