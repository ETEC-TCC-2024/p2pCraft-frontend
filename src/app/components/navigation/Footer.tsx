import React from "react";
import LogoIcon from "../icon/LogoIcon";
import Button from "../Button";
import { link } from "fs";

export const Footer = () => {
  //TODO replace logoIcon with the actuall icon
  return (
    <div className="bg-green-ion-800 contianer flex mx-auto items-center justify-between px-4 bottom-0 w-full">
      <FooterLogo></FooterLogo>
      <div className="flex justify-between w-full">
        <Button variant="link">Sobre mim</Button>
        <Button variant="link">Código</Button>
        <Button variant="link">FAQ</Button>
      </div>
      <div className="flex">
        <LogoIcon width={64} height={64} />
        <LogoIcon width={64} height={64} />
        <LogoIcon width={64} height={64} />
      </div>
    </div>
  );
};

export const FooterLogo = () => {
  return (
    <>
      <div className="flex items-center ">
        <LogoIcon width={64} height={64} />
        <div className="min-w-fit text-white-50">© 2024 P2PCraft</div>
      </div>
    </>
  );
};
