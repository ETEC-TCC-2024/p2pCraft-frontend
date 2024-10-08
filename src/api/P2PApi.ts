import axiosInstance from "./AxiosConfig";

class P2PApi {
  
  async post(path: string, body: Object) {
    const req = axiosInstance.post(path, body, {
      validateStatus: () => true
    });
    return req
  }

  async get(path: string) {
    return axiosInstance.get(path);
  }

  async put(path: string, body: Object) {
    return axiosInstance.put(path, body);
  }

  async delete(path: string) {
    return axiosInstance.delete(path);
  }

}
export default new P2PApi();
