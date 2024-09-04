import React, { Children, ReactNode } from "react";
import { Logo } from "../Logo";
import Button, { buttonVariants } from "../button/Button";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface NavbarProps extends VariantProps<typeof navbarVariants> { }

const navbarVariants = cva(
  "container mx-auto px-4 top-0 py-1 sticky flex justify-between items-center",
  {
    variants: {
      variant: {
        primary: "",
        dark: "bg-dark-green-900",
      },
    },
  }
);

export const NavBar: React.FC<NavbarProps> = ({ variant = "primary" }: NavbarProps) => {
  let buttonVariant: VariantProps<typeof buttonVariants>["textColor"];
  buttonVariant = variant === "dark" ? "white" : "black";
  const NavBarButton: React.FC<{ children: ReactNode }> = ({ children }) => {
    return (
      <Button variant="noBackground" textColor={buttonVariant}>
        {children}
      </Button>
    );
  };
  return (
    <div className={cn(navbarVariants({ variant }))}>
      <Logo textVariant={variant == "dark" ? "white" : "primary"}></Logo>
      <div className="md:flex gap-x-6">
        <NavBarButton>Início</NavBarButton>

        <NavBarButton>Sobre mim</NavBarButton>

        <NavBarButton>Contato</NavBarButton>

        <NavBarButton>FAQ</NavBarButton>
        <Link href="login">
          <Button variant="primary">Entrar</Button>
        </Link>

      </div>
    </div>
  );
};
