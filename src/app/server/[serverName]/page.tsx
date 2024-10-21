import { SideBar } from "@/app/components/navigation/Sidebar";
import ServerDisplay from "@/app/components/server/ServerDisplay";

export default function Page({ params }: { params: { serverName: string } }) {
  return (
    <>
      <SideBar activeBar={"server"} serverName={params.serverName}></SideBar>
      <ServerDisplay serverName={params.serverName}></ServerDisplay>
    </>
  );
}
