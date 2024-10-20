import { ServerRegisterDto } from "@/dto/server/ServerRegisterDto";
import axiosInstance from "../AxiosConfig";

class ServerService {
  async register(registerDto: ServerRegisterDto) {
    const response = await axiosInstance.post("/server", registerDto);
    return response;
  }
}

export default new ServerService();
