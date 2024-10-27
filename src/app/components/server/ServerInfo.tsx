"use client";

import Button from "../button/Button";
import Icon from "../icon/Icon";
import { cn } from "@/lib/utils";
import UserServer from "@/api/model/UserServer";
import { useState, ReactNode } from "react";
import Conditional from "../conditional/Conditional";
import Text from "../text/TextComponent";
import { setServerOpen } from "@/app/actions/server";

const ServerInfo = ({ server }: { server: UserServer }) => {
  const [isOpen, setOpen] = useState(server.open);

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
      <Conditional showWhen={isOpen}>
        <StyledText>20 Players Online{/* TODO player count */}</StyledText>
      </Conditional>
      <Conditional showWhen={!isOpen}>
        <StyledText>Server Offline</StyledText>
      </Conditional>
      <StyledText>{server.mapConfigurations.version}</StyledText>
      <StyledText> {server.mapConfigurations.mapUrl}</StyledText>
      <form action={setServerOpen} className="w-full h-full">
        <input hidden value={server.name} name="serverName"></input>
        <input hidden value={isOpen + ""} name="open"></input>
        <TurnOnButton open={isOpen} onClick={() => setOpen(!isOpen)}></TurnOnButton>
      </form>
    </div>
  );
  function StyledText({ children }: { children: ReactNode }) {
    return <Text className="text-white">{children}</Text>;
  }
};

const TurnOnButton = ({ open, onClick }: { open: boolean; onClick: () => void }) => {
  const IconComponent = open ? <Icon.Stop /> : <Icon.Play />;

  return (
    <>
      <Button
        variant={"primary"}
        className={cn("m-0 p-0 w-full h-full", {
          "bg-red-300  hover:bg-red-200": open,
          "bg-green-400 hover:bg-green-300": !open,
        })}
        onClick={onClick}
        type="submit"
      >
        <div className="flex justify-center mx-auto">
          <div className="w-11 h-11">{IconComponent}</div>
        </div>
      </Button>
    </>
  );
};

export default ServerInfo;
