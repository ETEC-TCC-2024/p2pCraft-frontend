import React from "react";
import LogoIcon from "./icon/LogoIcon";
import clsx from "clsx";

interface LogoProps {
  variant: keyof typeof LogoVariantStyles
}

const defaultStyles = "flex items-center justify-center max-w-fit"
const LogoVariantStyles = {
  default: defaultStyles,
  textWhite: clsx(defaultStyles, "text-white-50")
}


export const Logo = ({variant = "default"} : LogoProps) => {
  return (
    <div className={LogoVariantStyles[variant]}>
      <LogoIcon width={46} height={46}></LogoIcon>
      <div className="font-medium text-base">P2PCraft</div>
    </div>
  );
};
