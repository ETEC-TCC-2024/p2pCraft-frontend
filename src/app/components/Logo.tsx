import React from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";
import Icon from "./icon/Icon";

interface LogoProps extends VariantProps<typeof logoVariants> {}

export const logoVariants = cva("flex items-center max-w-fit font-medium text-base w-44", {
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

export const Logo: React.FC<LogoProps> = ({ variant, textVariant: text }) => {
  return (
    <div className={cn(logoVariants({ variant }))}>
      <Icon.Logo className="w-[46px] h-[46px]"></Icon.Logo>
      <div className={cn(logoVariants({ textVariant: text }))}>P2PCraft</div>
    </div>
  );
};
