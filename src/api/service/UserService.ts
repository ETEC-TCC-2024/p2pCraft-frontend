import P2PApi from "../P2PApi";
import User from "../model/User";

class UserService {
  async getCurrentClient() {
    const resposne = await P2PApi.get("/client");
    const newUser = new User();

    const json = await resposne.json();
    newUser.name = json["name"];
    newUser.email = json["email"];

    return newUser;
  }
}

export default new UserService();
