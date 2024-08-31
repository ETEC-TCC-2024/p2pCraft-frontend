import React, { ReactNode } from "react";
import Icon from "../icon/Icon";
import Button from "../button/Button";
import { cn } from "@/lib/utils";

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
    <div className={cn("flex justify-start mx-auto  gap-x-3", className)}>
      <IconButton>
        <Icon.Discord />
      </IconButton>

      <IconButton>
        <Icon.Youtube />
      </IconButton>

      <IconButton>
        <Icon.Github />
      </IconButton>
    </div>
  );
};
