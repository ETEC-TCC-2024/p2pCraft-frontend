import ServerController from "@/api/controller/ServerController";
import ServerService from "@/api/service/ServerService";
import { Footer } from "@/app/components/navigation/Footer";
import { NavBar } from "@/app/components/navigation/NavBar";
import { redirect } from "next/navigation";

export default async function ServerLayout({
  children,
  params,
}: {
  params: { serverName: string };
  children: React.ReactNode;
}) {
  const currentServer = await ServerController.getServerByName(params.serverName);
  if (currentServer == null) {
    redirect("/client");
  }
  return (
    <>
        <header className="h-fit ">
          <NavBar variant={"dark"} isLoggedIn={true}></NavBar>
        </header>
        <div className="flex flex-grow bg-dark-green-700">{children}</div>
        <Footer variant={"dark"}></Footer>
    </>
  );
}
