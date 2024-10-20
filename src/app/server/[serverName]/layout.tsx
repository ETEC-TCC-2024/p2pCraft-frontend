import { Footer } from "@/app/components/navigation/Footer";
import { NavBar } from "@/app/components/navigation/NavBar";
import { SideBar } from "@/app/components/navigation/Sidebar";

export default function ServerLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main className="bg-dark-green-700 min-h-screen h-screen m-0 grid grid-cols-1 overflow-hidden">
        <header className="h-fit ">
          <NavBar variant={"dark"} isLoggedIn={true}></NavBar>
        </header>
        {children}
        <Footer variant={"dark"}></Footer>
      </main>
    </>
  );
}
