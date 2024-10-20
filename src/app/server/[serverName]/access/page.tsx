import { SideBar } from "@/app/components/navigation/Sidebar";

const AcessPage = ({ params }: { params: { serverName: string } }) => {
  return (
    <>
      <SideBar activeBar="access" serverName={params.serverName}></SideBar>
    </>
  );
};

export default AcessPage;
