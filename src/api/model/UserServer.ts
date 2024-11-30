import UserServerRoles from "./UserServerRoles";

class UserServer {
  uuid!: string;
  name!: string;
  staticIp!: string;
  open!: boolean;
  role!: UserServerRoles;
  mapConfigurations!: MapConfig;
  properties!: ServerProperties;
}
export class MapConfig {
  mapUrl!: string;
  seed!: string;
  version!: string;
}

export class ServerProperties {
  gameMode!: GameModes;
  difficulty!: Difficulties;
  pvpEnabled!: boolean;
  whitelist!: boolean;
  cracked!: boolean;
  playerSlots!: number;
}
export type GameModes = "SURVIVAL" | "HARDCORE" | "SPECTATOR" | "CREATIVE";
export type Difficulties = "PEACEFUL" | "EASY" | "NORMAL" | "HARD";

export default UserServer;
