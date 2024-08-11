"use client";
import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import clsx from "clsx";
import React, { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  onclick?: () => void,
  text: string
}

//TODO: fix the texcolor, the primary button text color may not be black

export const buttonVariants = cva("text-base py-4 rounded-lg ps-5 pe-5 font-bold",
  {
    variants: {
      variant: {
        primary: "bg-grey-900 hover:bg-grey-500 text-white-50",
        link: " hover:text-grey-500 hover:no-underline font-bold underline",
        green: "bg-dark-green-700 hover:bg-dark-green-600 ",
        noBackground: "text-opacity-50 hover:text-opacity-100 font-medium",
      },
      textColor: {
        white: "text-white-50",
        black: "text-black-900"
      }
    }
  }
)

export const Button: React.FC<ButtonProps> = ({ variant = "primary", text = "Button", textColor = "white", onclick = () => { } }) => {
  clsx();
  return (
    <div className="flex ml-auto mr-auto">
      <button onClick={onclick} className={cn(buttonVariants({ variant, textColor }))}>
        {text}
      </button>
    </div>
  );
};

export default Button;
