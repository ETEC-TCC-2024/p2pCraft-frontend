import { SideBar } from "@/app/components/navigation/Sidebar";

const DownloadPage = ({ params }: { params: { serverName: string } }) => {
  return (
    <>
      <SideBar activeBar="download" serverName={params.serverName}></SideBar>
    </>
  );
};

export default DownloadPage;
