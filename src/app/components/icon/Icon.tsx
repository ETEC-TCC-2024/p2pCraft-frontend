import React, { lazy } from "react";
export interface IconProps {
  className: string;
}
type iconKeys =
  | "Default"
  | "ArrowLeft"
  | "ArrowRight"
  | "ClipboardOutline1"
  | "Discord"
  | "Download"
  | "Gear"
  | "Github"
  | "Lock"
  | "Logo"
  | "NoQueue"
  | "NoCoin"
  | "OpenSource"
  | "Pause"
  | "People"
  | "Play"
  | "Signal"
  | "Speedometer"
  | "Start"
  | "Stop"
  | "TextCursor"
  | "Youtube";

const Default = lazy(async () => await import("./icons/Default"));
const ArrowLeft = lazy(async () => await import("./icons/ArrowLeft"));
const ArrowRight = lazy(async () => await import("./icons/ArrowRight"));
const ClipboardOutline1 = lazy(async () => await import("./icons/ClipboardOutline1"));
const Discord = lazy(async () => await import("./icons/Discord"));
const Download = lazy(async () => await import("./icons/Download"));
const Gear = lazy(async () => await import("./icons/Gear"));
const Github = lazy(async () => await import("./icons/Github"));
const Lock = lazy(async () => await import("./icons/Lock"));
const Logo = lazy(async () => await import("./icons/Logo"));
const NoQueue = lazy(async () => await import("./icons/NoQueue"));
const NoCoin = lazy(async () => await import("./icons/NoCoin"));
const OpenSource = lazy(async () => await import("./icons/OpenSource"));
const Pause = lazy(async () => await import("./icons/Pause"));
const People = lazy(async () => await import("./icons/People"));
const Play = lazy(async () => await import("./icons/Play"));
const Signal = lazy(async () => await import("./icons/Signal"));
const Speedometer = lazy(async () => await import("./icons/Speedometer"));
const Start = lazy(async () => await import("./icons/Start"));
const Stop = lazy(async () => await import("./icons/Stop"));
const TextCursor = lazy(async () => await import("./icons/TextCursor"));
const Youtube = lazy(async () => await import("./icons/Youtube"));

const Icon: Record<iconKeys, React.FC<IconProps>> = {
  Default: ({ className }) => <Default className={className} />,
  ArrowLeft: ({ className }) => <ArrowLeft className={className} />,
  ArrowRight: ({ className }) => <ArrowRight className={className} />,
  ClipboardOutline1: ({ className }) => <ClipboardOutline1 className={className} />,
  Discord: ({ className }) => <Discord className={className} />,
  Download: ({ className }) => <Download className={className} />,
  Gear: ({ className }) => <Gear className={className} />,
  Github: ({ className }) => <Github className={className} />,
  Lock: ({ className }) => <Lock className={className} />,
  Logo: ({ className }) => <Logo className={className} />,
  NoQueue: ({ className }) => <NoQueue className={className} />,
  NoCoin: ({ className }) => <NoCoin className={className} />,
  OpenSource: ({ className }) => <OpenSource className={className} />,
  Pause: ({ className }) => <Pause className={className} />,
  People: ({ className }) => <People className={className} />,
  Play: ({ className }) => <Play className={className} />,
  Signal: ({ className }) => <Signal className={className} />,
  Speedometer: ({ className }) => <Speedometer className={className} />,
  Start: ({ className }) => <Start className={className} />,
  Stop: ({ className }) => <Stop className={className} />,
  TextCursor: ({ className }) => <TextCursor className={className} />,
  Youtube: ({ className }) => <Youtube className={className} />,
};
export default Icon;
