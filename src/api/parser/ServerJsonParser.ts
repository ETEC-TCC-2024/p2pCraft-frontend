import UserServer from "../model/UserServer";
import UserServerRoles from "../model/UserServerRoles";

class ServerJsonParser {
  parse(jsonObject: any) {
    const { server, role }: { server: UserServer; role: UserServerRoles } = jsonObject;
    server.role = role;
    return server;
  }
}

export default new ServerJsonParser();
