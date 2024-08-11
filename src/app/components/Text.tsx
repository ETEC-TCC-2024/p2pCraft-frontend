import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import React, { HtmlHTMLAttributes } from "react";

namespace Text {
  export interface TextProps
    extends HtmlHTMLAttributes<HTMLSpanElement>,
      VariantProps<typeof textVariants> {}
}
const textVariants = cva("", {
  variants: {
    textColor: {
      white: "text-white-50",
      black: "text-black-900",
    },
    size: {
      small: "text-sm",
      medium: "text-base",
      large: "text-lg",
      extra_large: "text-xl",
      extra_large_x2: "text-2xl",
      extra_large_x3: "text-3xl",
      extra_large_x4: "text-4xl",
      extra_large_x5: "text-5xl",
      extra_large_x6: "text-6xl",
      extra_large_x7: "text-7xl",
    },
    weight: {
      thin: "font-thin",
      normal: "font-normal",
      bold: "font-bold",
    },
    textAlign: {
      justify: "text-justify",
      left: "text-left",
      right: "text-right",
      center: "text-center",
    },
  },
});

const Text: React.FC<Text.TextProps> = ({
  weight = "normal",
  size = "medium",
  textColor = "black",
  textAlign = "left",
  className,
  children,
}) => {
  return (
    <span className={cn(textVariants({ weight, size, textColor, textAlign }), className)}>
      {children}
    </span>
  );
};

export default Text;
