import React, { Children, ReactNode } from "react";
import { Logo } from "../Logo";
import Button, { buttonVariants } from "../button/Button";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import Link from "next/link";
import Conditional from "../conditional/Conditional";
import { logout } from "@/app/actions/auth";

interface NavbarProps extends VariantProps<typeof navbarVariants> {
  isLoggedIn?: boolean;
}

const navbarVariants = cva(
  "mx-auto h-fit px-4 top-0 py-1 sticky flex justify-between items-center",
  {
    variants: {
      variant: {
        primary: "container",
        dark: "bg-dark-green-900",
      },
    },
  }
);

export const NavBar: React.FC<NavbarProps> = ({
  variant = "primary",
  isLoggedIn = false,
}: NavbarProps) => {
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
      <Link href={"/"}>
        <Logo textVariant={variant == "dark" ? "white" : "primary"}></Logo>
      </Link>
      <div className="md:flex gap-x-6">
        <Link href={"/"}>
          <NavBarButton>Início</NavBarButton>
        </Link>
        <Link href={"/"}>
          <NavBarButton>Sobre mim</NavBarButton>
        </Link>
        <Link href={"/download"}>
          <NavBarButton>Baixar mod</NavBarButton>
        </Link>
        <Link href={"/download"}>
          <NavBarButton>FAQ</NavBarButton>
        </Link>
        <Conditional showWhen={isLoggedIn}>
          <form action={logout}>
            <Button variant="primary" type="submit">
              Sair
            </Button>
          </form>
        </Conditional>
        <Conditional showWhen={!isLoggedIn}>
          <Link href="login">
            <Button variant="primary">Entrar</Button>
          </Link>
        </Conditional>
      </div>
    </div>
  );
};
