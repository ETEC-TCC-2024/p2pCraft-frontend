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
      <div className="flex items-center h-fit text-lg w-64 py-4 px-3 max-h-16 justify-between bg-dark-green-600">
        <input name={switchName} defaultValue={openState + ""} hidden></input>
        <Text className="text-white">{labelText}</Text>
        <button type="button" onClick={() => setOpen(!openState)}>
          <Switch active={openState}></Switch>
        </button>
      </div>
    </>
  );
};

interface SwitchProps {
  active: boolean;
}
const Switch: React.FC<SwitchProps> = ({ active }) => {
  return (
    <div className="flex flex-row">
      <Conditional showWhen={!active}>
        <div className="w-8 h-8 flex-grow-0 bg-red-600">
          <Icon.Close></Icon.Close>
        </div>
        <div className="bg-dark-green-800 w-8 h-8"></div>
      </Conditional>
      <Conditional showWhen={active}>
        <div className="bg-dark-green-800 w-8 h-8"></div>
        <div className="w-8 h-8 bg-green-500">
          <Icon.Verified></Icon.Verified>
        </div>
      </Conditional>
    </div>
  );
};
export default SwtichField;
