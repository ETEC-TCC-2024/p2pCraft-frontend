import React, { ReactNode } from "react";
import Icon from "../icon/Icon";
import Button from "../button/Button";
import { cn } from "@/lib/utils";
import Link from "next/link";

interface SocialNetworksProps {
  className?: string;
}

export const SocialNetworks = ({ className = "" }: SocialNetworksProps) => {
  const IconButton: React.FC<{ children: ReactNode }> = ({ children }) => {
    return (
      <Button variant="noBackground" className="p-0 w-16 h-16">
        {children}
      </Button>
    );
  };
  return (
    <div className={cn("flex justify-start mx-auto gap-x-3", className)}>
      <Link href={"https://discord.gg/saSJvNJeH7"}>
        <IconButton>
          <Icon.Discord />
        </IconButton>
      </Link>
      <Link href={"https://www.youtube.com/@aikisustin3094"}>
        <IconButton>
          <Icon.Youtube />
        </IconButton>
      </Link>
      <Link href={"https://github.com/seujorgenochurras"}>
        <IconButton>
          <Icon.Github />
        </IconButton>
      </Link>
    </div>
  );
};
