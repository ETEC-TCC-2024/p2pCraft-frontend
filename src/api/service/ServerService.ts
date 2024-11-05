import { ServerRegisterDto } from "@/dto/server/ServerRegisterDto";
import P2PApi from "../P2PApi";
import UserServer, { ServerProperties } from "../model/UserServer";

class ServerService {
  async register(registerDto: ServerRegisterDto) {
    const response = await P2PApi.post("/server", registerDto);
    return response;
  }

  async getServerByName(name: string) {
    const response = await P2PApi.get(`/server/${name}`);
    return response;
  }

  async getServerPropertiesByName(name: string) {
    const response = await P2PApi.get(`/server/${name}/properties`);
    return response;
  }

  async updateProperties(properties: ServerProperties, serverName: string) {
    return this.updateServer({ properties: properties }, serverName);
  }

  async updateServer(newServer: Object, serverName: string) {
    const response = await P2PApi.put(`/server/${serverName}`, newServer);
    return response;
  }

  async getWhitelist(serverName: string) {
    const response = await P2PApi.get(`/server/${serverName}/whitelist`);
    return response;
  }

  async addPlayerToWhitelist(serverName: string, playerName: string) {
    const response = await P2PApi.post(`/server/${serverName}/whitelist`, {
      playerName: playerName,
    });
    return response;
  }

  async removePlayerFromWhitelist(serverName: string, playerName: string) {
    const response = await P2PApi.delete(`/server/${serverName}/whitelist/${playerName}`);
    return response;
  }
}

export default new ServerService();
