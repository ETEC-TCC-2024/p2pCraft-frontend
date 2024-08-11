import React from "react";
import LogoIcon from "./icon/LogoIcon";

export const Logo = () => {
  return (
    <div className="flex items-center justify-center max-w-fit">
      <LogoIcon width={46} height={46}></LogoIcon>
      <div className="font-medium text-base">P2PCraft</div>
    </div>
  );
};
