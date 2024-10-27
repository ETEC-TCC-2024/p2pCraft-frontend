import ServerController from "@/api/controller/ServerController";
import { SideBar } from "@/app/components/navigation/Sidebar";
import ServerDownload from "@/app/components/server/ServerDownload";

const DownloadPage = async ({ params }: { params: { serverName: string } }) => {
  const server = await ServerController.getServerByName(params.serverName);
  return (
    <>
      <SideBar activeBar="download" serverName={params.serverName}></SideBar>
      <div className="flex m-auto">
        <ServerDownload server={server!} />
      </div>
    </>
  );
};

export default DownloadPage;
