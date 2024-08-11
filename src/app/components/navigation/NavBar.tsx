import React from "react";
import { Logo } from "../Logo";
import Button from "../Button";
import clsx from "clsx";


interface NavbarProps {
  variant: keyof typeof navBarVariantsStyles;
}

const defaultStyles = "container mx-auto px-20 top-0 sticky flex py-4 justify-between items-center"
const navBarVariantsStyles = {
  default: defaultStyles,
  dark: clsx(defaultStyles, "bg-dark-green-900"),
};

export const NavBar = ({ variant = "default" }: NavbarProps) => {
  return (
    <div className={navBarVariantsStyles[variant]}>
      <Logo variant="default"></Logo>
      <div className="flex gap-x-6">
        <Button variant="noBackground" text="Home" />
        <Button variant="noBackground" text="About" />
        <Button variant="noBackground" text="Contact" />
        <Button variant="noBackground" text="FAQ" />
        <Button variant="primary" text="Play" />
      </div>
    </div>
  );
};
