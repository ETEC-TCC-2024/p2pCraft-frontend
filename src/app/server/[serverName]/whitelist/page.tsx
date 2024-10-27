import ServerController from "@/api/controller/ServerController";
import { SideBar } from "@/app/components/navigation/Sidebar";
import WhiteList from "@/app/components/server/whitelist/ServerWhiteList";
import Text from "@/app/components/text/TextComponent";

const WhitelistPage = async ({ params }: { params: { serverName: string } }) => {
  const whitelistPlayers = await ServerController.getWhitelist(params.serverName);
  return (
    <>
      <SideBar activeBar="whitelist" serverName={params.serverName}></SideBar>
      <div className="flex flex-col m-auto gap-32 justify-center items-center">
        <Text className="text-white text-5xl font-bold mt-24">Whitelist</Text>
        <div className="mb-60">
          <WhiteList serverName={params.serverName} whitelistPlayers={whitelistPlayers} />
        </div>
      </div>
    </>
  );
};

export default WhitelistPage;
