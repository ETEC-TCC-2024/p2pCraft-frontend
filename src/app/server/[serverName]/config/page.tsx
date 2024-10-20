import { SideBar } from "@/app/components/navigation/Sidebar";

const ConfigPage = ({ params }: { params: { serverName: string } }) => {
  return (
    <>
      <SideBar activeBar="config" serverName={params.serverName}></SideBar>
    </>
  );
};


export default ConfigPage;