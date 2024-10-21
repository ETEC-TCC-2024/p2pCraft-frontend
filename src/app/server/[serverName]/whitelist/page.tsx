import { SideBar } from "@/app/components/navigation/Sidebar";
import { ServerWhiteList } from "@/app/components/server/ServerWhiteList";
import Text from "@/app/components/text/TextComponent";

const WhitelistPage = ({ params }: { params: { serverName: string } }) => {
  return (
    <>
      <SideBar activeBar="whitelist" serverName={params.serverName}></SideBar>
      <div className="flex flex-col m-auto gap-32 justify-center items-center">
        <Text className="text-white text-5xl font-bold mt-24">Whitelist</Text>
        <div className="mb-60">
          <ServerWhiteList></ServerWhiteList>
        </div>
      </div>
    </>
  );
};

export default WhitelistPage;
