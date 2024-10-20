import { SideBar } from "@/app/components/navigation/Sidebar";

export default function Page({ params }: { params: { serverName: string } }) {
  return (
    <>
      <SideBar activeBar={"server"} serverName={params.serverName}></SideBar>
    </>
  );
}
