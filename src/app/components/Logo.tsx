import React from "react";
import LogoIcon from "./icon/LogoIcon";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

interface LogoProps extends VariantProps<typeof logoVariants> {}

const logoVariants = cva("flex items-center justify-center max-w-fit font-medium text-base", {
  variants: {
    variant: {
      primary: "",
    },
    textVariant: {
      primary: "text-black-900",
      white: "text-white-50",
    },
  },
});

export const Logo: React.FC<LogoProps> = ({variant, textVariant: text}) => {
  return (
    <div className={cn(logoVariants({variant}))}>
      <LogoIcon width={46} height={46}></LogoIcon>
      <div className={cn(logoVariants({textVariant: text}))}>P2PCraft</div>
    </div>
  );
};
