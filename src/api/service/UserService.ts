import P2PApi from "../P2PApi";
import User from "../model/User";
import UserServer, { MapConfig } from "../model/UserServer";
import UserServerRoles from "../model/UserServerRoles";
import { ClientLoginDto } from "@/dto/client/ClientLoginDto";
import { ClientRegisterDto } from "@/dto/client/ClientRegisterDto";

class UserService {
  async getCurrentClient() {
    const response = await P2PApi.get("/client");
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

  async getServerById(uuid: string) {}
}

function getServers(json: any) {
  const serverAcesses = json["serverAccesses"];
  const servers: UserServer[] = [];
  for (const access of serverAcesses) {
    const server = getServerAccess(access);
    servers.push(server);
  }
  return servers;
}

function getServerAccess(json: any) {
  const server = new UserServer();
  const mapConfig = new MapConfig();

  const role: UserServerRoles = UserServerRoles[json["role"]] as unknown as UserServerRoles;
  const serverJson = json["server"];
  const uuid = serverJson["uuid"];
  const name = serverJson["name"];
  const online = serverJson["online"];
  const staticIp = serverJson["staticIp"];

  const mapConfigJson = serverJson["mapConfigurations"];

  const mapURL = mapConfigJson["mapUrl"];
  const version = mapConfigJson["version"];
  const seed = mapConfigJson["seed"];

  mapConfig.mapUrl = mapURL;
  mapConfig.seed = seed;
  mapConfig.version = version;

  server.uuid = uuid;
  server.name = name;
  server.staticIp = staticIp;
  server.online = online;
  server.userRole = role;
  server.mapConfig = mapConfig;

  return server;
}
export default new UserService();
