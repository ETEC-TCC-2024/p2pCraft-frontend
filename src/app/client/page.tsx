import React, { use, useEffect } from "react";
import Button from "../components/button/Button";
import { Footer } from "../components/navigation/Footer";
import { NavBar } from "../components/navigation/NavBar";
import ServerStatus from "../components/server/ServerStatus";
import TextComponent from "../components/text/TextComponent";
import UserService from "@/api/service/UserService";
import Conditional from "../components/conditional/Conditional";
import Link from "next/link";
import { logout } from "../actions/auth";
import { cookies } from "next/headers";
import ServerList from "../components/server/ServerList";

const ServerHomePage = async () => {
  const currentClient = await UserService.getCurrentClient();
  return (
    <>
      <header>
        <NavBar isLoggedIn={true} />
      </header>
      <div className="flex flex-col flex-grow items-center justify-between mx-auto container my-24">
        <TextComponent size={"extra_large_x4"} weight={"bold"}>
          Servidores
        </TextComponent>
        <ServerList user={currentClient}></ServerList>
        <div className="flex flex-row gap-20">
          <Link href={"/server/register"}>
            <Button variant={"green"}>Registre um servidor</Button>
          </Link>
          <Link href={"/client/edit"}>
            <Button variant={"green"}>Editar Perfil</Button>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ServerHomePage;
