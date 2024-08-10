import React from "react";
import { NavBar } from "./navigation/NavBar";
import { Footer } from "./navigation/Footer";
import LogoIcon from "./icon/LogoIcon";
import Button from "./Button";

const ButtonPage = () => {
  return (
    <>
      <BackgroundLogo></BackgroundLogo>
      <NavBar variant="primary"></NavBar>
      <Button></Button>
      <Button></Button>
      <Button></Button>
      <Button></Button>
      <h1 className="w-1 min-h-[1600px]">|z x nc b z c bn z x n  bc z xm b czxmnbczxm ncbzxn bczmxb </h1>
      <Footer></Footer>
    </>
  );
};

const BackgroundLogo = () => {
  return (
      <LogoIcon className="top-0 right-0 left-0 max-w-[1440px] max-h-[1021px] m-auto absolute"></LogoIcon>
  );
};

export default ButtonPage;
