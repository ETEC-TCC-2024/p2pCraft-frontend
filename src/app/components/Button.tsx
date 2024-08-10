"use client";
import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import React, { ButtonHTMLAttributes, Children } from "react";

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export const buttonVariants = cva("text-base py-4 rounded-lg ps-5 pe-5 font-bold", {
  variants: {
    textColor: {
      white: "text-white-50",
      black: "text-black-900",
    },
    variant: {
      primary: "bg-grey-900 hover:bg-grey-500 text-white-50",
      link: "hover:text-grey-500 hover:no-underline font-bold underline text-black-900",
      green: "bg-dark-green-700 hover:bg-dark-green-600 ",
      noBackground: "text-opacity-50 hover:text-opacity-100 font-medium",
    },
  },
});

export const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  textColor = "white",
  children,
}) => {
  return (
    <div className="flex ml-auto mr-auto">
      <button className={cn(buttonVariants({ variant, textColor }))}>{children}</button>
    </div>
  );
};

export default Button;
