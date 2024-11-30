import User from "@/api/model/User"
import Conditional from "../conditional/Conditional"
import TextComponent from "../text/TextComponent"
import ServerStatus from "./ServerStatus"
import { logout } from "@/app/actions/auth"

interface ServerListProps {
    user: User | null
}

const ServerList: React.FC<ServerListProps> = ({ user }) => {
    if (user === null) {
        logout();
        return;
    }
    const servers = user?.servers!;
    return <>
        <Conditional showWhen={servers.length > 0}>
            <div className="flex flex-wrap justify-center gap-8 ">
                {servers.map((server) => (
                    <ServerStatus server={server} key={server.staticIp}></ServerStatus>
                ))}
            </div>
        </Conditional>

        <Conditional showWhen={servers.length == 0}>
            <div className="flex flex-col items-center gap-y-3">
                <TextComponent size={"extra_large_x3"} weight={"normal"}>
                    Você não possui nenhum servidor registrado.
                </TextComponent>
                <TextComponent size={"extra_large_x3"} weight={"normal"}>
                    Registre seu primeiro servidor clicando no botão abaixo.
                </TextComponent>
            </div>
        </Conditional>
    </>
}

export default ServerList