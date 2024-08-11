import React from "react";
import Button from "../button/Button";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import Icon from "../icon/Icon";

interface FooterProps extends VariantProps<typeof footerVariants> {}

const footerVariants = cva(
  "container flex mx-auto mt-auto items-center justify-between px-4 w-full text-black-900",
  {
    variants: {
      variant: {
        primary: "",
        dark: "bg-dark-green-900",
      },
    },
  }
);

export const Footer: React.FC<FooterProps> = ({ variant = "primary" }: FooterProps) => {
  return (
    <div className={cn(footerVariants({ variant }))}>
      <FooterLogo></FooterLogo>
      <div className="flex justify-between w-full">
        <Button variant="link">Sobre mim</Button>
        <Button variant="link">Código</Button>
        <Button variant="link">FAQ</Button>
      </div>
      <div className="flex">
        <Icon.Discord className="w-[78px] h-[78px]" />
        <Icon.Youtube className="w-[78px] h-[78px]" />
        <Icon.Github className="w-[78px] h-[78px]" />
      </div>
    </div>
  );
};

export const FooterLogo = () => {
  return (
    <>
      <div className="flex items-center">
        <Icon.Logo className="w-16 h-16" />
        <div className="md:min-w-fit text-black-900">© 2024 P2PCraft</div>
      </div>
    </>
  );
};
