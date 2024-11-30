import { PlayerDto } from "@/dto/client/PlayerDto";

class PlayerJsonParser {
  parse(jsonObject: any) {
    const player: PlayerDto = jsonObject;
    return player;
  }
  parseMany(jsonObject: any) {
    const players: PlayerDto[] = jsonObject;
    return players;
  }
}

export default new PlayerJsonParser();
