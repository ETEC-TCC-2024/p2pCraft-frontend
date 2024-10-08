import UserServerRoles from "./UserServerRoles";

class UserServer {
    uuid!: string;
    name!: string;
    staticIp!: string;
    online!: boolean;
    userRole!: UserServerRoles;
    mapConfig!: MapConfig;

}
export class MapConfig {
    mapUrl!: string;
    seed!: string;
    version!: string;
}

export default UserServer;