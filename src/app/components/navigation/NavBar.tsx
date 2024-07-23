import React from "react";
import { Logo } from "../Logo";
import Button from "../Button";

export const NavBar = () => {
  return (
    <div className="flex py-4 justify-center items-center">
      <Logo></Logo>
      <div className="flex">
        <Button variant="noBackground" text="Home" />
        <Button variant="noBackground" text="About" />
        <Button variant="noBackground" text="Contact" />
        <Button variant="noBackground" text="FAQ" />
        <Button variant="primary" text="Play" />
      </div>
    </div>
  );
};
