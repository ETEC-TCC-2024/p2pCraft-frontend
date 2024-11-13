import { ClientAccessDto } from "@/dto/client/ClientAccessDto";

class ClientAccessJsonParser {
  parseMany(jsonObject: any) {
    const accessDto: ClientAccessDto[] = jsonObject;
    return accessDto;
  }
}
export default new ClientAccessJsonParser();
