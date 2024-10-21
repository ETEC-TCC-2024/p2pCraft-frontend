import React from "react";
import TextField from "../form/TextField";
import Icon from "../icon/Icon";
import Button from "../button/Button";
import Image from "next/image";
import Text from "../text/TextComponent";

export const ServerWhiteList = () => {
  const array = [...Array(10)];
  return (
    <div className="border-[3px] border-dark-green-500 ">
      <WhitelistField />
      <ul>
        {array.map((i) => {
          return <WhitelistItem playerName={""} key={i}></WhitelistItem>;
        })}
      </ul>
    </div>
  );
};

const WhitelistField = () => {
  return (
    <div className="flex flex-row justify-center items-center bg-dark-green-600 w-[512px] min-h-12 px-7 py-1 border-b-[3px] border-dark-green-500">
      <TextField variant={"green"} fieldState={"empty"} placeholder={"Username"}></TextField>
      <Button variant={"noBackground"} className="p-0">
        <Icon.Plus className="w-10 h-10"></Icon.Plus>
      </Button>
    </div>
  );
};

const WhitelistItem = ({ playerName }: { playerName: string }) => {
  return (
    <li className="border-b-[3px] last:border-none border-dark-green-500">
      <div className="flex flex-row items-center bg-dark-green-600 px-7 py-2 border-dark-green-900">
        <Image
          src={"/assets/steve.png"}
          alt={"steve"}
          width={39}
          height={39}
          className="mr-2"
        ></Image>
        <Text className="text-white text-base font-medium">DavidUnderlineGostosin</Text>
        <Button variant={"noBackground"} className="p-0 ml-auto ">
          <Icon.Minus className="w-10 h-10"></Icon.Minus>
        </Button>
      </div>
    </li>
  );
};
