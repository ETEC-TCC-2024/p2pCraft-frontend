"use client";

import Button from "../button/Button";
import Icon from "../icon/Icon";
import { cn, copyToClipboard } from "@/lib/utils";
import UserServer from "@/api/model/UserServer";
import { useState, ReactNode } from "react";
import Conditional from "../conditional/Conditional";
import Text from "../text/TextComponent";
import { setServerOpen } from "@/app/actions/server";

const ServerInfo = ({ server }: { server: UserServer }) => {
  const [serverClosed, setServerClosed] = useState(!server.open);
  const handleSubmit = () => {
    setServerClosed(!serverClosed);
  };
  const [copyAnimationRunning, setCopyAnimationRunning] = useState(false);

  return (
    <div className="flex flex-col h-full justify-center gap-6 min-w-[550px] max-h-[200px]">
      <div className="flex flex-row">
        <Text weight={"bold"} className="text-white text-xl">
          {server.staticIp}
        </Text>

        <button className="ml-auto" onClick={() => copyToClipboard(server.staticIp)}>
          <div
            className={cn(
              "flex items-center justify-center relative w-8 h-8 rounded-full bg-dark-green-500",
              {
                "animate-pop": copyAnimationRunning,
              }
            )}
            onClick={() => setCopyAnimationRunning(true)}
            onAnimationEnd={() => setCopyAnimationRunning(false)}>
            <Icon.ClipboardOutline1 className="w-6 h-6"></Icon.ClipboardOutline1>
          </div>
        </button>
      </div>
      <div className="flex flex-col justify-between h-full">
        <Conditional showWhen={!serverClosed}>
          <StyledText>Servidor Online {/* TODO player count */}</StyledText>
        </Conditional>
        <Conditional showWhen={serverClosed}>
          <StyledText>Servidor Offline</StyledText>
        </Conditional>
        <StyledText>Versão: {server.mapConfigurations.version}</StyledText>
        <form action={setServerOpen} className="w-full" onSubmit={handleSubmit}>
          <input hidden defaultValue={server.name} name="serverName"></input>
          <input hidden defaultValue={serverClosed + ""} name="open"></input>
          <TurnOnButton open={!serverClosed}></TurnOnButton>
        </form>
      </div>
    </div>
  );
  function StyledText({ children }: { children: ReactNode }) {
    return <Text className="text-white">{children}</Text>;
  }
};

const TurnOnButton = ({ open }: { open: boolean }) => {
  const IconComponent = open ? <Icon.Stop /> : <Icon.Play />;

  return (
    <Button
      variant={"primary"}
      className={cn("m-0 p-0 w-full h-full", {
        "bg-red-300  hover:bg-red-200": open,
        "bg-green-400 hover:bg-green-300": !open,
      })}
      type="submit">
      <div className="flex justify-center mx-auto">
        <div className="w-11 h-11">{IconComponent}</div>
      </div>
    </Button>
  );
};

export default ServerInfo;
