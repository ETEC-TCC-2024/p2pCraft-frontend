import UserServer from "./UserServer";

class User {
  name!: string;
  email!: string;
  uuid!: string;
  servers!: UserServer[]
}
export default User;