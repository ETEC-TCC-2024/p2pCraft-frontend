import React from "react";
import LogoIcon from "../icon/LogoIcon";
import Button from "../Button";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import GithubIcon from "../icon/GithubIcon";
import YoutubeIcon from "../icon/YoutubeIcon";
import DiscordIcon from "../icon/DiscordIcon";

interface FooterProps extends VariantProps<typeof footerVariants> {}

const footerVariants = cva(" container flex mx-auto mt-auto items-center justify-between px-4 w-full", {
  variants: {
    variant: {
      primary: "",
      dark: "bg-dark-green-900",
    },
  },
});

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
        <DiscordIcon width={78} height={78} />
        <YoutubeIcon width={78} height={78} />
        <GithubIcon width={78} height={78} />
      </div>
    </div>
  );
};

export const FooterLogo = () => {
  return (
    <>
      <div className="flex items-center">
        <LogoIcon width={64} height={64} />
        <div className="min-w-fit text-white-50">© 2024 P2PCraft</div>
      </div>
    </>
  );
};
