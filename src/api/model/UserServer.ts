import UserServerRoles from "./UserServerRoles";

class UserServer {
    uuid!: string;
    name!: string;
    staticIp!: string;
    mapURL!: string;
    online!: boolean;
    userRole!: UserServerRoles
    
}

export default UserServer;