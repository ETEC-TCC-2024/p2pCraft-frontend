import P2PApi from "../P2PApi";
import User from "../model/User";
import UserServer, { MapConfig } from "../model/UserServer";
import { ClientLoginDto } from "@/dto/client/ClientLoginDto";
import { ClientRegisterDto } from "@/dto/client/ClientRegisterDto";
import ServerJsonParser from "../parser/ServerJsonParser";
import { UpdateClientDto } from "@/dto/client/UpdateClientDto";

class UserService {
  async getCurrentClient() {
    const response = await P2PApi.get("/client");
    if(response.status != 200) return null;
    const newUser = new User();
    const json = await response.data;
    newUser.name = json["name"];
    newUser.email = json["email"];
    newUser.uuid = json["uuid"];
    const servers = getServers(json);
    newUser.servers = servers;
    return newUser;
  }

  async login(loginDto: ClientLoginDto) {
    const response = await P2PApi.post("/login", loginDto);
    return response;
  }

  async register(registerDto: ClientRegisterDto) {
    const response = await P2PApi.post("/signup", registerDto);
    return response;
  }

  async getServerById(uuid: string) { }

  async updateClient(updateClientDto: UpdateClientDto) {
    return await P2PApi.put("/client", updateClientDto)
  }

  async deleteClient() {
    return await P2PApi.delete("/client")
  }
}

function getServers(json: any) {
  const serverAcesses = json["serverAccesses"];

  const servers: UserServer[] = [];
  for (const access of serverAcesses) {
    const server = ServerJsonParser.parse(access);
    servers.push(server);
  }
  return servers;
}



export default new UserService();
