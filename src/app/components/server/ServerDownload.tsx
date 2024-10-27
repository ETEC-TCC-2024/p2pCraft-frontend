import UserServer from "@/api/model/UserServer";
import React from "react";
import Icon, { iconKeys } from "../icon/Icon";
import Text from "../text/TextComponent";
import GithubController from "@/api/controller/GithubController";
import IconBackground from "../icon/IconBackground";
import Link from "next/link";

const ServerDownload = async ({ server }: { server: UserServer }) => {
  const serverSize = await GithubController.getServerSizeInMegabytes(
    server.mapConfigurations.mapUrl
  );

  const CustomLink = ({ iconName, href }: { iconName: iconKeys; href: string }) => {
    return (
      <Link href={href}>
        <IconBackground
          iconName={iconName}
          theme={"default"}
          variant={"rounded"}
          className="w-14 h-14"
        ></IconBackground>
      </Link>
    );
  };
  return (
    <div className="flex flex-row gap-3">
      <Icon.Default className="w-32 h-32 bg-[#2b2b2b]"></Icon.Default>
      <div className="flex flex-col h-full justify-between">
        <Text className="text-white font-bold text-2xl">{server.staticIp}</Text>
        <Text className="text-white text-xl ">{serverSize} Mb/5Gb</Text>
        <div className="flex flex-row gap-6">
          <CustomLink
            iconName={"Download"}
            href={`${server.mapConfigurations.mapUrl.slice(0, -4)}/archive/refs/heads/main.zip`}
          ></CustomLink>
          <CustomLink iconName="DarkGear" href={`/server/${server.name}/config`}></CustomLink>
          <CustomLink iconName="Start" href={`/server/${server.name}`}></CustomLink>
         
        </div>
      </div>
    </div>
  );
};

export default ServerDownload;
