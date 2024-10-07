import { API_URL } from "@/app/actions/config";
import axiosInstance from "./AxiosConfig";

class P2PApi {
  async post(path: string, body: Object) {
    return axiosInstance.post(
      path, {
      method: "POST",
      body: JSON.stringify(body),
    });
  }

  async get(path: string) {
    return axiosInstance.get(path, {
      method: "GET",
    });
  }

  async put(path: string, body: Object) {
    return axiosInstance.put(path, {
      method: "PUT",
      body: JSON.stringify(body),
    });
  }

  async delete(path: string) {
    return axiosInstance.delete(path, {
      method: "DELETE",
    });
  }

}
export default new P2PApi();
