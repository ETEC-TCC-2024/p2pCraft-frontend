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
        <NavBarButton>Início</NavBarButton>

        <NavBarButton>Sobre mim</NavBarButton>

        <NavBarButton>Contato</NavBarButton>

        <NavBarButton>FAQ</NavBarButton>
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
