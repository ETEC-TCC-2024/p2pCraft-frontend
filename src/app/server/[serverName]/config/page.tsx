"use client";

import Button from "@/app/components/button/Button";
import DropDown, { DropDownOption } from "@/app/components/form/dropbox/Dropbox";
import NumberField from "@/app/components/form/number/NumberField";
import SwtichField from "@/app/components/form/switch/SwtichField";
import { SideBar } from "@/app/components/navigation/Sidebar";
import Text from "@/app/components/text/TextComponent";
import { useState } from "react";

const ConfigPage = ({ params }: { params: { serverName: string } }) => {
  const [number, setNumber] = useState(20);

  const difficulties: DropDownOption[] = [
    {
      label: "Pacifico",
      value: "peaceful",
    },
    {
      label: "Facíl",
      value: "easy",
    },
    {
      label: "Normal",
      value: "normal",
    },
    {
      label: "Hard",
      value: "hard",
    },
  ];
  
  const gamemodes: DropDownOption[] = [
    { label: "Survival", value: "survival" },
    { label: "Creative", value: "creative" },
    { label: "Hardcore", value: "hardcore" },
    { label: "Spectator", value: "spectator" },
    { label: "Adventure", value: "adventure" },
  ];
  return (
    <>
      <SideBar activeBar="config" serverName={params.serverName}></SideBar>
      <div className="flex flex-col mx-auto my-auto justify-between h-[560px]">
        <div className="flex mx-auto h-fit ">
          <Text className="text-white text-5xl font-bold"> Configurações do Servidor</Text>
        </div>

        <div className="flex flex-col gap-9 m-16">
          <div className="flex flex-row h-fit gap-9">
            <DropDown
              options={gamemodes}
              labelText={"Modo de jogo"}
              id={"gamemode"}
              variant="green"
              initialOption={gamemodes[1]}
            ></DropDown>
            <DropDown
              options={difficulties}
              labelText={"Dificuldade"}
              id={"dificuldade"}
              variant="green"
              initialOption={difficulties[1]}
            ></DropDown>

            <NumberField
              currentNumber={number}
              setNumber={setNumber}
              fieldName={"slots"}
              labelText={"Player Slots"}
            ></NumberField>
          </div>
          <div className="flex flex-row h-fit gap-9">
            <SwtichField
              labelText={"Permitir Pirata"}
              switchName={"offlineMode"}
              open={false}
            ></SwtichField>
            <SwtichField
              labelText={"Whitelist"}
              switchName={"whitelist"}
              open={false}
            ></SwtichField>
            <SwtichField labelText={"PVP"} switchName={"pvp"} open={false}></SwtichField>
          </div>
          <Button variant={"primary"} className="w-fit mx-auto">
            Salvar
          </Button>
        </div>
      </div>
    </>
  );
};

export default ConfigPage;
