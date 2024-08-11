import React from "react";
import { NavBar } from "./navigation/NavBar";
import { Footer } from "./navigation/Footer";

const ButtonPage = () => {
  return (
    <>
      <NavBar variant="primary"></NavBar>
      <h1 className="w-1 min-h-[1060px]">|</h1>
      <Footer></Footer>
    </>
  );
};

export default ButtonPage;
