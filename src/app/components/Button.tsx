"use client";
import clsx from "clsx";
import React from "react";

interface ButtonProps {
  variant: keyof typeof buttonVariantsStyles;
  text?: string;
  onclick?: () => void;
}

const defaultStyles = "text-base py-4 rounded-lg ps-5 pe-5 font-bold";
const buttonVariantsStyles = {
  primary: clsx(defaultStyles, "bg-grey-900 hover:bg-grey-500 text-white-50 "),
  link: "text-base text-grey-900 hover:text-grey-500 hover:no-underline font-bold underline",
  green: clsx(defaultStyles, "bg-dark-green-700 hover:bg-dark-green-600 text-white-50"),
  noBackground: "text-grey-900 text-opacity-50 hover:text-opacity-100 font-medium",
};

export const Button = ({ variant = "primary", text = "Button", onclick = () => {} }: ButtonProps) => {
  clsx();
  return (
    <div className="flex ml-auto mr-auto">
      <button onClick={onclick} className={buttonVariantsStyles[variant]}>
        {text}
      </button>
    </div>
  );
};

export default Button;
