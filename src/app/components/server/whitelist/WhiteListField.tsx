"use client";
import { addPlayerToWhitelist } from "@/app/actions/server";
import Button from "../../button/Button";
import TextField from "../../form/TextField";
import Icon from "../../icon/Icon";
import { PlayerDto } from "@/dto/client/PlayerDto";
import { useState } from "react";

interface WhitelistFieldProps {
  serverName: string;
  onAdd: (player: PlayerDto) => void;
}

const WhitelistField: React.FC<WhitelistFieldProps> = ({ serverName, onAdd }) => {
  const [name, setName] = useState("");
  return (
    <form action={addPlayerToWhitelist} onSubmit={() => onAdd({ name: name })}>
      <input hidden defaultValue={serverName} name={"serverName"}></input>
      <div className="flex flex-row justify-center items-center bg-dark-green-600 w-[512px] min-h-12 px-7 py-1 border-b-[3px] border-dark-green-500">
        <TextField
          variant={"green"}
          fieldState={"empty"}
          placeholder={"Username"}
          name="playerName"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></TextField>
        <Button variant={"noBackground"} className="p-0" type="submit">
          <Icon.Plus className="w-10 h-10"></Icon.Plus>
        </Button>
      </div>
    </form>
  );
};

export default WhitelistField;
