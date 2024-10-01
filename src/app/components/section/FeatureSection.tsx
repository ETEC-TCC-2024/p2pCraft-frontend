import React, { forwardRef, ReactNode } from "react";
import Text from "../text/TextComponent";
import IconBackground from "../icon/IconBackground";
import { iconKeys } from "../icon/Icon";
import Button from "../button/Button";

export const Title: React.FC<Text.TextProps> = ({ children }) => {
  return (
    <Text weight="bold" size="extra_large" textAlign="center">
      {children}
    </Text>
  );
};

export const Body: React.FC<Text.TextProps> = ({ children }) => {
  return (
    <>
      <Text className="mb-auto">{children}</Text>
      <Button variant="link" className="mr-0 p-0 pb-2">Ver mais</Button>
    </>
  );
};

interface FeatureSectionProps {
  iconName?: iconKeys;
  children: ReactNode;
}

const Root = ({ iconName, children }: FeatureSectionProps) => {
  return (
    <div className="flex shadow-lg backdrop-blur-sm h-full bg-green-ion-100 bg-opacity-50 rounded-2xl px-6 py-4 w-[510px] min-h-[210px]">
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
