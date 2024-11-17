import React from "react";
import Text from "./components/text/TextComponent";
import AboutMe from "./components/about/AboutMe";
import Button from "./components/button/Button";
import Icon from "./components/icon/Icon";
import { Footer } from "./components/navigation/Footer";
import { NavBar } from "./components/navigation/NavBar";
import { SocialNetworks } from "./components/navigation/SocialNetworks";
import FeatureSection from "./components/section/FeatureSection";
import TextSection from "./components/section/TextSection";
import Link from "next/link";

const HomePage = () => {
  return (
    <>
      <header>
        <NavBar variant="primary"></NavBar>
      </header>
      <main>
        <BackgroundLogo />
        <MainText />
        <MainFeatureSection />
        <div className="flex items-center justify-center">
          <AboutMe.Root className="max-h-[624px]">
            <AboutMe.ImageSection>
              <AboutMe.Image imagePath="/assets/image.png" />
              <AboutMe.Image imagePath="/assets/image1.png" />
              <AboutMe.Image imagePath="/assets/image2.png" />
            </AboutMe.ImageSection>
            <AboutMe.MainTextSection>
              <TextSection.Title> Sobre Mim</TextSection.Title>
              <TextSection.Body className="text-justify max-w-[700px] max-h-90 self-start">
                Sou um programador apaixonado por tecnologia e inovação, com experiência em
                desenvolvimento de software e um forte interesse por aprender novas linguagens e
                frameworks. <br />
                Tenho um sólido entendimento em programação orientada a objetos e práticas de
                desenvolvimento ágil, e sou um entusiasta em criar soluções eficientes e
                escaláveis.
                <br />
                Desde sempre, sou movido pela curiosidade e pelo desejo de entender como as coisas
                funcionam. Esse interesse me levou ao universo da tecnologia, onde encontrei uma
                verdadeira paixão pela programação.
                <br />
                Gosto de explorar diferentes linguagens e frameworks, sempre em busca de formas
                inovadoras para resolver problemas e criar soluções que façam a diferença na vida
                das pessoas.
              </TextSection.Body>
              <TextSection.Footer>
                <SocialNetworks />
              </TextSection.Footer>
            </AboutMe.MainTextSection>
          </AboutMe.Root>
        </div>
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
          <FeatureSection.Footer>
            <Link href={"/download"}>
              <Button variant="link" className="mr-0 p-0 pb-2">
                Ver mais
              </Button>
            </Link>
          </FeatureSection.Footer>
        </FeatureSection.Root>

        <FeatureSection.Root iconName="NoQueue">
          <FeatureSection.Title>Sem Filas</FeatureSection.Title>
          <FeatureSection.Body>
            Chega de esperas pra abrir seu servidor, com a P2PCraft é como se seu servidor
            estivesse sempre aberto!
          </FeatureSection.Body>
          <FeatureSection.Footer>
            <Link href={"/download"}>
              <Button variant="link" className="mr-0 p-0 pb-2">
                Ver mais
              </Button>
            </Link>
          </FeatureSection.Footer>
        </FeatureSection.Root>

        <FeatureSection.Root iconName="Speedometer">
          <FeatureSection.Title>Alta Performance*</FeatureSection.Title>
          <FeatureSection.Body>
            Você sabia que com apenas 6gb de ram é possível ser uma excelente host sem prejudicar
            sua gameplay? A P2PCraft é perfeita para pequenos grupos de 4-8 jogadores.
          </FeatureSection.Body>
          <FeatureSection.Footer>
            <Link href={"/download"}>
              <Button variant="link" className="mr-0 p-0 pb-2">
                Ver mais
              </Button>
            </Link>
          </FeatureSection.Footer>
        </FeatureSection.Root>

        <FeatureSection.Root iconName="OpenSource">
          <FeatureSection.Title>Código Aberto</FeatureSection.Title>
          <FeatureSection.Body>
            Ficou desconfiado com alguma funcionalidade? A P2PCraft possui um código 100% aberto,
            basta acessar nossa organização no Github.
          </FeatureSection.Body>
          <FeatureSection.Footer>
            <Link href={"https://github.com/ETEC-TCC-2024"}>
              <Button variant="link" className="mr-0 p-0 pb-2">
                Ver mais
              </Button>
            </Link>
          </FeatureSection.Footer>
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
          <Link href="login">
            <Button>Começar Agora</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
