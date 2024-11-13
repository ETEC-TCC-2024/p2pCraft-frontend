import React from "react";
import { NavBar } from "../components/navigation/NavBar";
import FeatureSection from "../components/section/FeatureSection";
import Icon, { iconKeys } from "../components/icon/Icon";
import { Footer } from "../components/navigation/Footer";
import { date } from "zod";
import Link from "next/link";
import Button from "../components/button/Button";

const DownloadPage = () => {
  return (
    <>
      <header>
        <NavBar variant={"primary"} />
      </header>
      <div className="flex-row justify-center items-center m-auto">
        <div className="flex flex-row gap-16 my-20">
          <CustomFeatureSection
            iconName="First"
            href="/login"
            title="Registre seu servidor"
            body="Crie uma conta e registre um servidor"
            buttomText="Ver mais"
          />
          <CustomFeatureSection
            iconName="Second"
            href="/"
            title="Baixe nosso mod"
            body="Clique no botão abaixo para baixar o mod, disponível para Fabric 1.20.1"
            buttomText="Baixar agora"
          />
        </div>
        <div className="flex mx-auto items-center justify-center my-16">
          <CustomFeatureSection
            iconName="Third"
            href="/"
            title="Entre no servidor"
            body="Conecte no servidor copiando o IP no nosso site"
            buttomText="Ver mais"
          />
        </div>
      </div>
      <Footer variant="primary" />
    </>
  );
};

interface CustomFeatureSectionProps {
  title: string;
  body: string;
  buttomText: string;
  href: string;
  iconName: iconKeys;
}
const CustomFeatureSection: React.FC<CustomFeatureSectionProps> = ({
  title,
  body,
  buttomText,
  href,
  iconName,
}) => {
  return (
    <FeatureSection.Root iconName={iconName} className="max-w-[400px] max-h-[12px] ">
      <FeatureSection.Title>{title}</FeatureSection.Title>
      <FeatureSection.Body className="flex h-full justify-center items-center">{body}</FeatureSection.Body>
      <FeatureSection.Footer>
        <Link href={href}>
          <Button variant="link" className="mr-0 p-0 pb-2">
            {buttomText}
          </Button>
        </Link>
      </FeatureSection.Footer>
    </FeatureSection.Root>
  );
};

export default DownloadPage;
