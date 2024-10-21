import React, { ReactNode } from "react";
import Button from "../button/Button";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import Icon from "../icon/Icon";
import { SocialNetworks } from "./SocialNetworks";
import Link from "next/link";

interface FooterProps extends VariantProps<typeof footerVariants> {}

const footerVariants = cva("flex mx-auto items-center justify-between px-4 w-full", {
  variants: {
    variant: {
      primary: "text-black-900 container",
      dark: "text-white bg-dark-green-900",
    },
  },
});

export const Footer: React.FC<FooterProps> = ({ variant = "primary" }: FooterProps) => {
  return (
    <div className={cn(footerVariants({ variant }))}>
      <FooterLogo variant={variant}></FooterLogo>
      <div className="flex justify-between items-stretch mx-24 w-full">
        <FooterLinkButton href="">Sobre mim</FooterLinkButton>
        <FooterLinkButton href="">Código</FooterLinkButton>
        <FooterLinkButton href="">FAQ</FooterLinkButton>
      </div>
      <SocialNetworks />
    </div>
  );
  function FooterLinkButton({ children, href }: { children: ReactNode; href: string }) {
    return (
      <Link href={href}>
        <Button
          variant={"link"}
          className={cn(variant == "dark" ? "text-white hover:text-gray-400" : "text-black-900")}
        >
          {children}
        </Button>
      </Link>
    );
  }
};

export const FooterLogo = ({
  variant,
}: {
  variant: VariantProps<typeof footerVariants>["variant"];
}) => {
  return (
    <div className="flex items-center min-w-fit">
      <Icon.Logo className="w-16 h-16" />
      <div className={cn(variant == "dark" ? "text-white" : "text-black-900")}>
        © 2024 P2PCraft
      </div>
    </div>
  );
};
