import { HttpStatusCode } from "axios";
import ServerService from "../service/ServerService";
import UserServer from "../model/UserServer";
import User from "../model/User";
import ServerJsonParser from "../parser/ServerJsonParser";

class ServerController {
  async getServerByName(name: string) {
    const serviceResponse = await ServerService.getServerByName(name);
    if (serviceResponse.status != HttpStatusCode.Ok) {
      return null;
    }
    const responseData = serviceResponse.data;

    return ServerJsonParser.parse(responseData);
  }
  async turnOnServer(server : UserServer){
    
  }
}

export default new ServerController();
