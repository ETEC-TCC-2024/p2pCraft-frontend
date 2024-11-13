"use client";
import Button from "../../button/Button";
import TextField from "../../form/TextField";
import Icon from "../../icon/Icon";
import { useState } from "react";
import { addClientAccess } from "@/app/actions/server";

interface AccessFieldProps {
  serverName: string;
  onAdd: (clientName: string) => void;
}

const AccessField: React.FC<AccessFieldProps> = ({ serverName, onAdd }) => {
  const [clientName, setName] = useState("");

  return (
    <form action={addClientAccess} onSubmit={() => onAdd(clientName)}>
      <input hidden defaultValue={serverName} name={"serverName"} />
      <input hidden defaultValue={clientName} name={"clientName"} />
      <input hidden defaultValue={"VIEW"} name={"accessType"} />

      <div className="flex flex-row justify-center items-center bg-dark-green-600 w-[512px] min-h-12 px-7 py-1 border-b-[3px] border-dark-green-500">
        <TextField
          variant={"green"}
          fieldState={"empty"}
          placeholder={"Nome do Usuario"}
          name="clientName"
          value={clientName}
          onChange={(e) => setName(e.target.value)}
        />
        <Button variant={"noBackground"} className="p-0" type="submit">
          <Icon.Plus className="w-10 h-10" />
        </Button>
      </div>
    </form>
  );
};

export default AccessField;
