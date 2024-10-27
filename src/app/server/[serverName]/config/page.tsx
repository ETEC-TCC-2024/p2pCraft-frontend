import { SideBar } from "@/app/components/navigation/Sidebar";
import Text from "@/app/components/text/TextComponent";
import { ConfigForm } from "./ConfigForm";
import ServerController from "@/api/controller/ServerController";

const ConfigPage = async ({ params }: { params: { serverName: string } }) => {
  const server = await ServerController.getServerByName(params.serverName);
  return (
    <>
      <SideBar activeBar="config" serverName={params.serverName}></SideBar>
      <div className="flex flex-col mx-auto my-auto justify-between h-[560px]">
        <div className="flex mx-auto h-fit ">
          <Text className="text-white text-5xl font-bold"> Configurações do Servidor</Text>
        </div>
        <ConfigForm initialProps={{ server: Object.assign({}, server) }}></ConfigForm>
      </div>
    </>
  );
};

export default ConfigPage;
