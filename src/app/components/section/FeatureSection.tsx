import React, { forwardRef, ReactNode } from "react";
import Text from "../text/TextComponent";
import IconBackground from "../icon/IconBackground";
import { iconKeys } from "../icon/Icon";
import Button from "../button/Button";
import { cn } from "@/lib/utils";

export const Title: React.FC<Text.TextProps> = ({ children }) => {
  return (
    <Text weight="bold" size="extra_large" textAlign="center">
      {children}
    </Text>
  );
};

export const Body: React.FC<Text.TextProps> = ({ children, className }) => {
  return <Text className={cn("mb-auto", className)}>{children}</Text>;
};

interface FeatureSectionProps {
  iconName?: iconKeys;
  children: ReactNode;
  className?: string;
}

const Root = ({ iconName, children, className }: FeatureSectionProps) => {
  return (
    <div
      className={cn(
        "flex shadow-lg backdrop-blur-sm h-full bg-green-ion-100 bg-opacity-50 rounded-2xl px-6 py-4 w-[510px] min-h-[210px]",
        className
      )}>
      <IconBackground
        iconName={iconName!}
        className="overflow-hidden min-w-12 min-h-12"
        variant="halfRounded"
      />
      <div className="flex flex-col ml-6 items-start ">{children}</div>
    </div>
  );
};

const Footer = ({ children }: FeatureSectionProps) => {
  return <div className="mt-0">{children}</div>;
};

const FeatureSection = {
  Root: Root,
  Title: Title,
  Body: Body,
  Footer: Footer,
};

export default FeatureSection;
