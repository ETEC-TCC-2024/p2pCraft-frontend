import React, { ReactElement, useEffect } from "react";
import { NavBar } from "./navigation/NavBar";
import { Footer } from "./navigation/Footer";
import Text from "./text/Text";
import Button from "./button/Button";
import Icon, { iconKeys } from "./icon/Icon";
import FeatureSection from "./section/FeatureSection";
import TextSection from "./section/TextSection";
import { SocialNetworks } from "./navigation/SocialNetworks";
import AboutMe from "./about/AboutMe";

const ButtonPage = () => {
  return (
    <>
      <header>
        <NavBar variant="primary"></NavBar>
      </header>
      <main>
        <BackgroundLogo />
        <MainText />
        <MainFeatureSection />
        <AboutMe.Root className="max-h-[624px]">
          <AboutMe.ImageSection>
            <AboutMe.Image imagePath="/assets/cat1.png" />
            <AboutMe.Image imagePath="/assets/cat2.png" />
            <AboutMe.Image imagePath="/assets/cat3.png" />
          </AboutMe.ImageSection>
          <AboutMe.MainTextSection>
            <TextSection.Title> Sobre Mim</TextSection.Title>
            <TextSection.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sollicitudin vitae
              ipsum ac luctus. Mauris ac semper libero. Nulla facilisi. Nam bibendum interdum
              risus, at ultricies felis pulvinar a.
              <br />
              Donec fringilla erat auctor felis pharetra, ut consectetur massa varius. Quisque
              ultricies vitae urna quis lobortis. Fusce bibendum orci dictum rhoncus rhoncus.
              Aliquam gravida tincidunt lectus sed rhoncus. <br />
              Etiam tincidunt mi quis ligula euismod commodo. Fusce eu consequat mi, sed egestas
              lacus. Sed eget accumsan sem. Class aptent taciti sociosqu ad litora torquent per
              conubia nostra, per inceptos himenaeos. <br />
              Praesent egestas tellus et purus fringilla ultrices.
            </TextSection.Body>
            <TextSection.Footer>
              <SocialNetworks />
            </TextSection.Footer>
          </AboutMe.MainTextSection>
        </AboutMe.Root>
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

const MainFeatureSection = () => {
  return (
    <div className="mt-[18vh]">
      <div className="flex flex-wrap flex-row relative mx-auto gap-y-14 gap-x-1 container items-center justify-between">
        <FeatureSection.Root iconName="Signal">
          <FeatureSection.Title>Baixa Latencia</FeatureSection.Title>
          <FeatureSection.Body>
            Como os jogadores são a própria host, a distancia da comunicação entre o servidor e os
            players normalmente diminui, ou seja o tempo de resposta é curto.
          </FeatureSection.Body>
        </FeatureSection.Root>

        <FeatureSection.Root iconName="NoQueue">
          <FeatureSection.Title>Sem Filas</FeatureSection.Title>
          <FeatureSection.Body>
            Chega de esperas pra abrir seu servidor, com a P2PCraft é como se seu servidor
            estivesse sempre aberto!
          </FeatureSection.Body>
        </FeatureSection.Root>

        <FeatureSection.Root iconName="Speedometer">
          <FeatureSection.Title>Alta Performance*</FeatureSection.Title>
          <FeatureSection.Body>
            Você sabia que com apenas 6gb de ram é possível ser uma excelente host sem prejudicar
            sua gameplay? A P2PCraft é perfeita para pequenos grupos de 4-8 jogadores.
          </FeatureSection.Body>
        </FeatureSection.Root>

        <FeatureSection.Root iconName="OpenSource">
          <FeatureSection.Title>Código Aberto</FeatureSection.Title>
          <FeatureSection.Body>
            Ficou desconfiado com alguma funcionalidade? A P2PCraft possui um código 100% aberto,
            basta acessar nossa organização no Github.
          </FeatureSection.Body>
        </FeatureSection.Root>
      </div>
    </div>
  );
};

const MainText = () => {
  return (
    <div className="mt-32 flex flex-col items-center ">
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
          <Button>Começar Agora</Button>
        </div>
      </div>
    </div>
  );
};

export default ButtonPage;
