import Button from "../components/button/Button";
import { Footer } from "../components/navigation/Footer";
import { NavBar } from "../components/navigation/NavBar";
import ServerStatus from "../components/server/ServerStatus";
import TextComponent from "../components/text/TextComponent";

const ServerHomePage = () => {

    return <>
        <header>
            <NavBar />
        </header>
        <div className="flex flex-col items-center justify-between mx-auto">
            <TextComponent size={"extra_large_x4"} weight={'bold'}>
                Servidores
            </TextComponent>
            <div className="flex flex-wrap">
                <ServerStatus
                    serverStatus="online"
                    server={
                        { name: "Server name", minecraftVersion: "1.1.1" }

                    }></ServerStatus>
            </div>

            <Button variant={"green"}>
                Registre um servidor
            </Button>

        </div>
        <Footer />
    </>
}


export default ServerHomePage;