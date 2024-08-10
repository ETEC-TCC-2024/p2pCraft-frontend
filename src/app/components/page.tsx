import React from "react";
import { NavBar } from "./navigation/NavBar";
import { Footer } from "./navigation/Footer";
import LogoIcon from "./icon/LogoIcon";

const ButtonPage = () => {
  return (
    <>
      <header>
        <NavBar variant="primary"></NavBar>
      </header>
      <main>
        <BackgroundLogo></BackgroundLogo>
      </main>
      <Footer></Footer>
    </>
  );
};

const BackgroundLogo = () => {
  return (
    <LogoIcon className="-top-5 -z-10 right-0 left-0 max-w-[1440px] max-h-screen m-auto absolute"></LogoIcon>
  );
};

export default ButtonPage;
