import DropDown, { DropDownOption } from "@/app/components/form/dropbox/Dropbox";
import { SideBar } from "@/app/components/navigation/Sidebar";
import Text from "@/app/components/text/TextComponent";
import ServerController from "@/api/controller/ServerController";
import AccessList from "@/app/components/server/access/AccessList";

const AcessPage = async ({ params }: { params: { serverName: string } }) => {
  const accessClients = await ServerController.getServerAccesses(params.serverName);
  return (
    <>
      <SideBar activeBar="access" serverName={params.serverName} />
      <div className="flex flex-col m-auto gap-y-32 items-center">
        <Text className="text-white text-5xl font-bold">Acesso</Text>
        <AccessList clients={accessClients} serverName={params.serverName} />
      </div>
    </>
  );
};

export default AcessPage;
