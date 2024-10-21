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
            "bg-gradient-to-r to-dark-green-400 from-25% from-dark-green-700": active,
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
    <aside className="flex flex-col h-full w-fit bg-dark-green-900 ">
      <SideBarButton
        href={`/server/${serverName}`}
        icon="WhiteStart"
        active={activeBar == "server"}
      >
        Servidor
      </SideBarButton>

      <SideBarButton
        href={`/server/${serverName}/config`}
        icon="Gear"
        active={activeBar == "config"}
      >
        Configurações
      </SideBarButton>

      <SideBarButton
        href={`/server/${serverName}/whitelist`}
        icon="People"
        active={activeBar == "whitelist"}
      >
        Whitelist
      </SideBarButton>

      <SideBarButton
        href={`/server/${serverName}/access`}
        icon="Lock"
        active={activeBar == "access"}
      >
        Acesso
      </SideBarButton>

      <SideBarButton
        href={`/server/${serverName}/download`}
        icon="WhiteDownload"
        active={activeBar == "download"}
      >
        Mapa
      </SideBarButton>
      <div className="mt-auto">
        <SideBarButton active={false} icon="ArrowLeft" href="/client">
          Voltar
        </SideBarButton>
      </div>
    </aside>
  );
};
