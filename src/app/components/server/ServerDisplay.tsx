"use server";
import UserServer from "@/api/model/UserServer";
import Icon from "../icon/Icon";
import ServerController from "@/api/controller/ServerController";
import Text from "../text/TextComponent";
import { ReactNode, useState } from "react";
import Button from "../button/Button";
import Conditional from "../conditional/Conditional";

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

const ServerInfo = ({ server }: { server: UserServer }) => {
  return (
    <div className="flex flex-col h-full justify-center gap-6">
      <div className="flex flex-row">
        <Text weight={"bold"} className="text-white text-xl">
          {server.staticIp}
        </Text>
        <div className="ml-auto">
          <Icon.ClipboardOutline1 className="w-6 h-6"></Icon.ClipboardOutline1>
        </div>
      </div>
      <Conditional showWhen={server.online}>
        <StyledText>20 Players Online{/* TODO player count */}</StyledText>
      </Conditional>
      <Conditional showWhen={!server.online}>
        <StyledText>Server Offline</StyledText>
      </Conditional>
      <StyledText>{server.mapConfigurations.version}</StyledText>
      <StyledText> {server.mapConfigurations.mapUrl}</StyledText>
      <TurnOnButton server={server}></TurnOnButton>
    </div>
  );
  function StyledText({ children }: { children: ReactNode }) {
    return <Text className="text-white">{children}</Text>;
  }
};

const TurnOnButton = ({ server }: { server: UserServer }) => {
  "use client";
  console.log(server);
  return (
    <>
      <Conditional showWhen={server.online}>
        <Button variant={"primary"} className="bg-red-300 m-0 p-0 hover:bg-red-200">
          <div className="flex justify-center mx-auto">
            <Icon.Stop className="w-11 h-11"></Icon.Stop>
          </div>
        </Button>{" "}
      </Conditional>

      <Conditional showWhen={!server.online}>
        <Button variant={"primary"} className="bg-green-400 m-0 p-0 hover:bg-green-300">
          <div className="flex justify-center mx-auto">
            <Icon.Play className="w-11 h-11"></Icon.Play>
          </div>
        </Button>
      </Conditional>
    </>
  );
};

export default ServerDisplay;
