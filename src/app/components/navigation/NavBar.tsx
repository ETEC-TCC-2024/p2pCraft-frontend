import React from "react";
import { Logo, logoVariants } from "../Logo";
import Button, { buttonVariants } from "../Button";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

interface NavbarProps extends VariantProps<typeof navbarVariants> {}

const navbarVariants = cva("container mx-auto h-fit px-4 top-0 py-1 sticky flex justify-between items-center", {
  variants: {
    variant: {
      primary: "",
      dark: "bg-dark-green-900",
    },
  },
});

export const NavBar: React.FC<NavbarProps> = ({ variant = "primary" }: NavbarProps) => {
  let buttonVariant: VariantProps<typeof buttonVariants>["textColor"];
  if (variant === "dark") {
    buttonVariant = "white";
  } else {
    buttonVariant = "black";
  }

  return (
    <div className={cn(navbarVariants({ variant }))}>
      <Logo textVariant={variant == "dark" ? "white" : "primary"}></Logo>
      <div className="flex gap-x-6">
        <Button variant="noBackground" textColor={buttonVariant}>
          Home
        </Button>

        <Button variant="noBackground" textColor={buttonVariant}>
          About
        </Button>

        <Button variant="noBackground" textColor={buttonVariant}>
          Contact
        </Button>

        <Button variant="noBackground" textColor={buttonVariant}>
          FAQ
        </Button>

        <Button variant="primary">Play</Button>
      </div>
    </div>
  );
};
