import { on } from "events";
import P2PApi from "../P2PApi";
import User from "../model/User";
import UserServer from "../model/UserServer";
import UserServerRoles from "../model/UserServerRoles";
import { map } from "zod";

class UserService {
  async getCurrentClient() {
    const response = await P2PApi.get("/client");
    const newUser = new User();
    const json = await response.data;
    newUser.name = json["name"];
    newUser.email = json["email"];
    newUser.uuid = json["uuid"]

    const servers = getServers(json)
    newUser.servers = servers;

    return newUser;
  }

  async getServerById(uuid: string) {

  }

}

function getServers(json: any) {
  const serverAcesses = json["serverAccesses"]
  const servers: UserServer[] = []
  for (const access of serverAcesses) {
    const server = getServerAccess(access);


    servers.push(server)

  }
  return servers;
}

function getServerAccess(json: any) {
  const server = new UserServer();

  const role: UserServerRoles = UserServerRoles[json["role"]] as unknown as UserServerRoles
  const serverJson = json["server"]
  const uuid = serverJson["uuid"]
  const name = serverJson["name"]
  const online = serverJson["online"]
  const mapURL = serverJson["mapUrl"]
  const staticIp = serverJson["staticIp"]

  server.uuid = uuid;
  server.name = name;
  server.mapURL = mapURL
  server.staticIp = staticIp;
  server.online = online
  server.userRole = role;

  return server;

}
export default new UserService();
