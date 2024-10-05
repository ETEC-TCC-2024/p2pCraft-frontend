"use client";
import { cn } from "@/lib/utils";
import React, { Children, ReactNode, useEffect, useMemo, useState } from "react";
import TextSection from "../section/TextSection";
import { CircularLinkedList } from "@/lib/CircularLinkedList";
import Button from "../button/Button";
import Icon from "../icon/Icon";
import NextImage from "next/image";
import { motion, useAnimation } from "framer-motion";

interface RootProps {
  className?: string;
  children: ReactNode;
}

interface MainTextSectionProps {
  children: ReactNode;
}

interface ImageSectionImageProps {
  imagePath: string;
  alt?: string;
}

export const Root: React.FC<RootProps> = ({ className, children }) => {
  return (
    <div
      className={cn(
        "flex flex-row gap-6 px-4 py-12 mx-auto justify-between items-stretch container",
        className
      )}
    >
      {children}
    </div>
  );
};

export const MainTextSection: React.FC<MainTextSectionProps> = ({ children }) => {
  return (
    <TextSection.Root className="flex flex-col justify-between m-0">{children}</TextSection.Root>
  );
};

export const ImageSection: React.FC<MainTextSectionProps> = ({ children }) => {
  const imageList = useMemo(() => getImageList(), [children]);
  const [currentImage, setCurrentImage] = useState(imageList.firstNode!);
  const animationControls = useAnimation();

  useEffect(() => {
    animationControls.start({
      opacity: [0.4, 1],
      transition: { duration: 0.3 },
    });
  }, [currentImage, animationControls]);

  function getImageList() {
    const imagesList = new CircularLinkedList<ReactNode>();
    Children.map(children, (child) => imagesList.add(child));
    return imagesList;
  }
  function handleNext() {
    setCurrentImage(currentImage.getNext()!);
  }
  function handlePrev() {
    setCurrentImage(currentImage.getPrev()!);
  }

  return (
    <div className="max-w-full max-h-full">
      <motion.div className="relative" animate={animationControls}>
        {currentImage.getData()}
      </motion.div>
      <div className="flex flex-row justify-between relative bottom-[50%] z-10">
        <NextImageButton onClick={handleNext} />
        <PrevImageButton onClick={handlePrev} />
      </div>
    </div>
  );
};

interface SwitchImageButtonProps {
  onClick?: () => void;
  children?: ReactNode;
  className?: string;
}
const SwitchImageButton: React.FC<SwitchImageButtonProps> = ({ onClick, children, className }) => {
  return (
    <Button
      variant="noBackground"
      className={cn(
        "max-w-12 max-h-12 p-[8px] rounded-full mx-4 hover:bg-green-ion-900 transition hover:fade-in-10",
        className
      )}
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

//TODO: Don't say this to anyone, but the arrowLeft icon is not centered *shhh
const NextImageButton: React.FC<SwitchImageButtonProps> = ({ onClick }) => {
  return (
    <SwitchImageButton onClick={onClick}>
      <Icon.ArrowLeft className="w-full" />
    </SwitchImageButton>
  );
};

const PrevImageButton: React.FC<SwitchImageButtonProps> = ({ onClick }) => {
  return (
    <SwitchImageButton onClick={onClick}>
      <Icon.ArrowRight className="w-full" />
    </SwitchImageButton>
  );
};

export const ImageSectionImage: React.FC<ImageSectionImageProps> = ({
  imagePath: imgPath,
  alt = "",
}) => {
  return (
    <NextImage src={imgPath} alt={alt} width={472} height={530} className="rounded-2xl h-full" />
  );
};
