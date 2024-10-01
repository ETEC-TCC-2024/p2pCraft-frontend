import { cn } from "@/lib/utils";
import Text from "../text/TextComponent";
import React, { ReactNode } from "react";

interface TextSectionProps {
  className?: string;
  children: ReactNode;
}

const Root = ({ className, children }: TextSectionProps) => {
  return <div className={cn("", className)}>{children}</div>;
};

const Title: React.FC<Text.TextProps> = ({ children, className }) => {
  return (
    <Text size="extra_large_x3" weight="bold" className={cn(className)}>
      {children}
    </Text>
  );
};

const Body: React.FC<Text.TextProps> = ({ children, className }) => {
  return <Text className={cn(className)}>{children}</Text>;
};

const Footer: React.FC<Text.TextProps> = ({ children, className }) => {
  return <Text className={className}>{children}</Text>;
};

const TextSection = {
  Root: Root,
  Title: Title,
  Body: Body,
  Footer: Footer,
};
export default TextSection;
