import Link from "next/link";
import React from "react";
import Button from "../button/Button";
import Icon, { iconKeys } from "../icon/Icon";
import { cn } from "@/lib/utils";

interface SideBarProps {
  activeBar: "server" | "config" | "whitelist" | "access" | "download";
  serverName: string;
}

export const SideBar: React.FC<SideBarProps> = ({ activeBar, serverName }) => {
  interface SideBarButtonProps {
    children: React.ReactNode;
    href: string;
    icon: iconKeys;
    active: boolean;
  }
  const SideBarButton: React.FC<SideBarButtonProps> = ({ children, href, icon, active }) => {
    const IconComponent = Icon[icon];
    return (
      <Link href={href}>
        <Button
          className={cn("w-64 flex flex-row items-center rounded-none m-0 p-4", {
            "bg-gradient-to-l to-dark-green-600 from-25% from-dark-green-700": active,
          })}
          variant={"dark"}
        >
          <IconComponent className="max-w-12 max-h-12 h-12 w-12" />
          {children}
        </Button>
      </Link>
    );
  };

  return (
    <div className="flex flex-col h-[86vh] w-fit relative bg-dark-green-900 overflow-hidden">
      <SideBarButton href={`${serverName}`} icon="WhiteStart" active={activeBar == "server"}>
        Servidor
      </SideBarButton>

      <SideBarButton href={`${serverName}/config`} icon="Gear" active={activeBar == "config"}>
        Configurações
      </SideBarButton>

      <SideBarButton
        href={`${serverName}/whitelist`}
        icon="People"
        active={activeBar == "whitelist"}
      >
        Whitelist
      </SideBarButton>

      <SideBarButton href={`${serverName}/access`} icon="Lock" active={activeBar == "access"}>
        Acesso
      </SideBarButton>

      <SideBarButton
        href={`${serverName}/map`}
        icon="WhiteDownload"
        active={activeBar == "download"}
      >
        Mapa
      </SideBarButton>
      <div className="mt-auto">
        <SideBarButton active={false} icon="ArrowLeft" href="">
          Voltar
        </SideBarButton>
      </div>
    </div>
  );
};
