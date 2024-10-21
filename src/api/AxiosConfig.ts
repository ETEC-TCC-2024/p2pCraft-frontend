import { API_URL } from "@/app/actions/config";
import axios from "axios";
import { cookies } from "next/headers";

const axiosInstance = axios.create({
  baseURL: API_URL,
  timeout: 5000,
  headers: { "Content-Type": "application/json" },
});
axiosInstance.interceptors.request.use(
  (config) => {
    const isApiRequest = config.baseURL == API_URL;
    const token = cookies().get("session")?.value;

    if (token) {
      if (isApiRequest) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export default axiosInstance;
