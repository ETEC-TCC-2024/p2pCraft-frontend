import React from "react";
import { NavBar } from "./navigation/NavBar";
import { Footer } from "./navigation/Footer";
import LogoIcon from "./icon/LogoIcon";
import Button from "./Button";

const ButtonPage = () => {
  return (
    <>
      <NavBar variant="primary"></NavBar>
      <BackgroundLogo></BackgroundLogo>
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
    <LogoIcon className="top-0 right-0 -z-10 absolute"></LogoIcon>
  )
}

export default ButtonPage;
