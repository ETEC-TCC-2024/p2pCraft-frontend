import React from "react";
import Button from "../components/button/Button";
import { Footer } from "../components/navigation/Footer";
import { NavBar } from "../components/navigation/NavBar";
import ServerStatus from "../components/server/ServerStatus";
import TextComponent from "../components/text/TextComponent";
import UserService from "@/api/service/UserService";
import Conditional from "../components/conditional/Conditional";

const ServerHomePage = async () => {
  const currentClient = await UserService.getCurrentClient();
  const servers = currentClient.servers;
  return (
    <>
      <header>
        <NavBar isLoggedIn={true} />
      </header>
      <div className="flex flex-col items-center justify-between mx-auto container">
        <TextComponent size={"extra_large_x4"} weight={"bold"}>
          Servidores
        </TextComponent>

        <Conditional showWhen={servers.length > 0}>
          <div className="flex flex-wrap justify-center gap-8 " >
            {servers.map((server) => <ServerStatus server={server} key={server.staticIp}></ServerStatus>)}
          </div>
        </Conditional>

        <Conditional showWhen={servers.length == 0}>
          <div className="flex flex-col items-center gap-y-3">
            <TextComponent size={"extra_large_x3"} weight={"normal"}>
              Você não possui nenhum servidor registrado.
            </TextComponent>
            <TextComponent size={"extra_large_x3"} weight={"normal"}>
              Registre seu primeiro servidor clicando no botão abaixo.
            </TextComponent>
          </div>
        </Conditional>
        <Button variant={"green"}>Registre um servidor</Button>
      </div>
      <Footer />
    </>
  );
};

export default ServerHomePage;
