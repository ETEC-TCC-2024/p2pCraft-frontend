"use client";
import { useState } from "react";
import Conditional from "../../conditional/Conditional";
import Icon from "../../icon/Icon";
import Text from "../../text/TextComponent";

interface SwitchFieldProps {
  open: boolean;
  labelText: string;
  switchName: string;
}

export const SwtichField: React.FC<SwitchFieldProps> = ({ switchName, labelText, open }) => {
  const [openState, setOpen] = useState(open);
  return (
    <>
      <div
        className="flex items-center h-fit text-lg w-64 py-4 px-3 max-h-16 justify-between bg-dark-green-600"
        onClick={() => setOpen(!openState)}
      >
        <Text className="text-white">{labelText}</Text>
        <button name={switchName}>
          <Switch open={openState}></Switch>
        </button>
      </div>
    </>
  );
};

interface SwitchProps {
  open: boolean;
}
const Switch: React.FC<SwitchProps> = ({ open }) => {
  return (
    <div className="flex flex-row">
      <Conditional showWhen={open}>
        <div className="w-8 h-8 flex-grow-0 bg-red-600">
          <Icon.Close></Icon.Close>
        </div>
        <div className="bg-dark-green-800 w-8 h-8"></div>
      </Conditional>
      <Conditional showWhen={!open}>
        <div className="bg-dark-green-800 w-8 h-8"></div>
        <div className="w-8 h-8 bg-green-500">
          <Icon.Verified></Icon.Verified>
        </div>
      </Conditional>
    </div>
  );
};
export default SwtichField;
