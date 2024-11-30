import { HttpStatusCode } from "axios";
import ServerService from "../service/ServerService";
import UserServer, { ServerProperties } from "../model/UserServer";
import User from "../model/User";
import ServerJsonParser from "../parser/ServerJsonParser";
import { PlayerDto } from "@/dto/client/PlayerDto";
import PlayerJsonParser from "../parser/PlayerJsonParser";
import ClientAccessJsonParser from "../parser/ClientAccessJsonParser";

class ServerController {
  async getServerByName(name: string) {
    const serviceResponse = await ServerService.getServerByName(name);
    if (serviceResponse.status != HttpStatusCode.Ok) {
      return null;
    }
    const responseData = serviceResponse.data;
    return ServerJsonParser.parse(responseData);
  }
  async getServerPropertiesByName(name: string) {
    const serviceResponse = await ServerService.getServerPropertiesByName(name);
    if (serviceResponse.status != HttpStatusCode.Ok) {
      return null;
    }
    const responseData = serviceResponse.data;
    return ServerJsonParser.parse(responseData);
  }

  async updateProperties(properties: ServerProperties, serverName: string) {
    await ServerService.updateProperties(properties, serverName);
  }
  async turnOnServer(open: boolean, serverName: string) {
    await ServerService.updateServer({ open: open }, serverName);
  }
  async getWhitelist(serverName: string): Promise<PlayerDto[]> {
    const response = await ServerService.getWhitelist(serverName);
    return PlayerJsonParser.parseMany(response.data);
  }
  async addToWhiteList(serverName: string, playerName: string) {
    const response = await ServerService.addPlayerToWhitelist(serverName, playerName);
    return PlayerJsonParser.parseMany(response.data);
  }
  async removeFromWhiteList(serverName: string, playerName: string) {
    const response = await ServerService.removePlayerFromWhitelist(serverName, playerName);
    return PlayerJsonParser.parseMany(response.data);
  }

  async addClientAccess(serverName: string, clientName: string, accessType: string) {
    await ServerService.addClientAccess(serverName, clientName, accessType);
  }
  async updateClientAccess(serverName: string, clientName: string, accessType: string) {
    await ServerService.updateClientAccess(serverName, clientName, accessType);
  }
  async removeClientAccess(serverName: string, clientName: string) {
    await ServerService.removeClientAccess(serverName, clientName);
  }

  async getServerAccesses(serverName: string) {
    const response = await ServerService.getServerAccesses(serverName);
    return ClientAccessJsonParser.parseMany(response.data);
  }

  async deleteServer(serverName : string){
    return await ServerService.deleteServer(serverName);

  }
}

export default new ServerController();
