import { cva, VariantProps } from "class-variance-authority";
import React from "react";
import Icon from "./Icon";
import { cn } from "@/lib/utils";

interface IconBackgroundProps extends VariantProps<typeof variants> {
  iconName: keyof typeof Icon;
  className?: string;
}
const variants = cva("w-6 h-6", {
  variants: {
    variant: {
      rounded: "rounded-full",
      halfRounded: "rounded-2xl",
    },
    theme: {
      dark: "bg-green-ion-900",
      default: "bg-green-ion-300",
    },
  },
});
const IconBackground: React.FC<IconBackgroundProps> = ({
  iconName,
  theme = "dark",
  variant = "halfRounded",
  className = "",
}) => {
  const IconComponent = Icon[iconName];
  return (
    <div className={cn(variants({ theme, variant }), className)}>
      <IconComponent />
    </div>
  );
};

export default IconBackground;
