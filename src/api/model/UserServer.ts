import UserServerRoles from "./UserServerRoles";

class UserServer {
  uuid!: string;
  name!: string;
  staticIp!: string;
  online!: boolean;
  role!: UserServerRoles;
  mapConfigurations!: MapConfig;
}
export class MapConfig {
  mapUrl!: string;
  seed!: string;
  version!: string;
}

export default UserServer;
