import { ServerRegisterDto } from "@/dto/server/ServerRegisterDto";
import axiosInstance from "../AxiosConfig";
import P2PApi from "../P2PApi";
import UserServer from "../model/UserServer";

class ServerService {
  async register(registerDto: ServerRegisterDto) {
    const response = await axiosInstance.post("/server", registerDto);
    return response;
  }

  async getServerByName(name: string) {
    const response = await P2PApi.get(`/server/${name}`);
    return response;
  }

  async turnOn(server : UserServer){
    
  }
}

export default new ServerService();
