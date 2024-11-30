"use server";
import Icon from "../icon/Icon";
import ServerController from "@/api/controller/ServerController";
import ServerInfo from "./ServerInfo";

interface ServerDisplayProps {
  serverName: string;
}

const ServerDisplay: React.FC<ServerDisplayProps> = async ({ serverName }) => {
  const server = await ServerController.getServerByName(serverName);
  return (
    <div className="flex flex-row gap-8 p-7 h-72 justify-center items-center m-auto">
      <Icon.Default className="w-32 h-32 bg-[#2b2b2b]"></Icon.Default>
      <ServerInfo server={server!}></ServerInfo>
    </div>
  );
};



export default ServerDisplay;

