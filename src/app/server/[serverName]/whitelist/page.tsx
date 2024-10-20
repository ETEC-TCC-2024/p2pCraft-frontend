import { SideBar } from "@/app/components/navigation/Sidebar";

const WhitelistPage = ({ params }: { params: { serverName: string } }) => {
  return (
    <>
      <SideBar activeBar="whitelist" serverName={params.serverName}></SideBar>
    </>
  );
};

export default WhitelistPage;
