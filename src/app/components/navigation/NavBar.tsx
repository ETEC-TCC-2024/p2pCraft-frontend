import React from "react";
import { Logo, logoVariants } from "../Logo";
import Button, { buttonVariants } from "../Button";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";


interface NavbarProps extends VariantProps<typeof navbarVariants> {
}

const navbarVariants = cva("container mx-auto px-4 top-0  py-1 sticky flex justify-between items-center", {
  variants: {
    variant: {
      primary: "",
      dark: "bg-dark-green-900"
    },
  },
})


export const NavBar: React.FC<NavbarProps> = ({ variant = "primary" }: NavbarProps) => {
  let buttonVariant: VariantProps<typeof buttonVariants>["textColor"];
  if (variant === 'dark') {
    buttonVariant = "white";
  } else {
    buttonVariant = "black"
  }

  return (
    <div className={cn(navbarVariants({ variant }))}>
      <Logo textVariant={variant == "dark" ? "white" : "primary"}></Logo>
      <div className="md:flex gap-x-6">
        <Button variant="noBackground" text="Home" textColor={buttonVariant} />
        <Button variant="noBackground" text="About" textColor={buttonVariant} />
        <Button variant="noBackground" text="Contact" textColor={buttonVariant} />
        <Button variant="noBackground" text="FAQ" textColor={buttonVariant} />
        <Button variant="primary" text="Play" />
      </div>
    </div>
  );
};
