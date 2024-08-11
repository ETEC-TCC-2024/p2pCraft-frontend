import React from "react";

interface ButtonProps {
  variant: "primary" | "link" | "green";
  text: String;
  state: "hover" | "default";
}

export const Button = ({}) => {
  return (
    <div className="flex ml-auto mr-auto">
      <div className="text-base py-4 rounded-lg ps-5 pe-5 bg-black text-white font-bold">Button</div>
    </div>
  );
};

export default Button;
