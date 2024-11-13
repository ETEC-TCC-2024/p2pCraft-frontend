"use client";
import UserServer from "@/api/model/UserServer";
import { updateProperties } from "@/app/actions/server";
import Button from "@/app/components/button/Button";
import DropDown, { DropDownOption } from "@/app/components/form/dropbox/Dropbox";
import NumberField from "@/app/components/form/number/NumberField";
import SwtichField from "@/app/components/form/switch/SwtichField";
import React, { useState } from "react";

interface ConfigFormProps {
  initialProps: { server: UserServer };
}

export const ConfigForm: React.FC<ConfigFormProps> = ({ initialProps }) => {
  const serverProperties = initialProps.server.properties;
  const [number, setNumber] = useState(serverProperties.playerSlots);
  const difficulties: DropDownOption[] = [
    { label: "Peaceful", value: "PEACEFUL" },
    { label: "Easy", value: "EASY" },
    { label: "Normal", value: "NORMAL" },
    { label: "Hard", value: "HARD" },
  ];

  const gamemodes: DropDownOption[] = [
    { label: "Survival", value: "SURVIVAL" },
    { label: "Creative", value: "CREATIVE" },
    { label: "Hardcore", value: "HARDCORE" },
    { label: "Spectator", value: "SPECTATOR" },
    { label: "Adventure", value: "ADVENTURE" },
  ];
  return (
    <form action={updateProperties}>
      <input name="serverName" defaultValue={initialProps.server.name} hidden></input>
      <div className="flex flex-col gap-9 m-16">
        <div className="flex flex-row h-fit gap-9">
          <DropDown.GreenDropdown
            options={gamemodes}
            labelText={"Modo de jogo"}
            id={"gamemode"}
            initialOption={{
              label: serverProperties.gameMode.toLocaleLowerCase(),
              value: serverProperties.gameMode,
            }}
          />
          <DropDown.GreenDropdown
            options={difficulties}
            labelText={"Dificuldade"}
            id={"difficulty"}
            initialOption={{
              label: serverProperties.difficulty.toLocaleLowerCase(),
              value: serverProperties.difficulty,
            }}
          />

          <NumberField
            currentNumber={number}
            setNumber={setNumber}
            fieldName={"slots"}
            labelText={"Player Slots"}
          />
        </div>
        <div className="flex flex-row h-fit gap-9">
          <SwtichField
            labelText={"Permitir Pirata"}
            switchName={"offlineMode"}
            open={serverProperties.cracked}
          />
          <SwtichField
            labelText={"Whitelist"}
            switchName={"whitelist"}
            open={serverProperties.whitelist}
          />
          <SwtichField labelText={"PVP"} switchName={"pvp"} open={serverProperties.pvpEnabled} />
        </div>
        <Button variant={"primary"} type="submit" className="w-fit mx-auto">
          Salvar
        </Button>
      </div>
    </form>
  );
};
