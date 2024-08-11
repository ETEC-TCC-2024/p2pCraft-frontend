import React from "react";
import { NavBar } from "./navigation/NavBar";
import { Footer } from "./navigation/Footer";
import Text from "./text/Text";
import Button from "./button/Button";
import Icon from "./icon/Icon";

const ButtonPage = () => {
  return (
    <>
      <header>
        <NavBar variant="primary"></NavBar>
      </header>
      <main>
        <BackgroundLogo></BackgroundLogo>
        <MainText></MainText>
      </main>
      <Footer></Footer>
    </>
  );
};

const BackgroundLogo = () => {
  return (
    <Icon.Logo className="-top-5 -z-10 right-0 left-0 max-w-[1440px] max-h-screen m-auto absolute"></Icon.Logo>
  );
};

const MainText = () => {
  return (
    <>
      <div className="flex flex-col items-center">
        <div className="flex flex-col max-w-[580px] gap-16">
          <Text size="extra_large_x5" weight="bold" textAlign="center">
            Bem-vindo ao P2PCraft
          </Text>
          <div className="flex flex-col px-8 gap-6 justify-center items-center">
            <Text weight="bold" size={"extra_large_x3"} textAlign={"center"}>
              Hospede seu próprio servidor de graça
            </Text>
            <Text textAlign={"center"}>
              Hospede servidores de Minecraft de graça usando a P2PCraft fornecemos uma arquitetura
              descentralizada de hosting que transforma os próprios players na host.
            </Text>

            <Button variant="primary">Começar Agora</Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ButtonPage;
