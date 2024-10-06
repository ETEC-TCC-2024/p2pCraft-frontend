import { API_URL } from "@/app/actions/config";
import axios from "axios";
import { cookies } from "next/headers";

axios.interceptors.request.use(
  (config) => {
    const isApiRequest = config.baseURL == API_URL;
    const token = cookies().get("session")?.value;

    if (token) {
      if (isApiRequest) {
        console.log("sim mano")
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);
