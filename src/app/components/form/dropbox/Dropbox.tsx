"use client";

import Icon from "../../icon/Icon";
import React from "react";
import Conditional from "../../conditional/Conditional";
import GreenDropdown from "./GreenDropdown";
import PrimaryDropdown from "./PrimaryDropdown";
import AccessDropdown from "./AccessDropdown";

export type DropDownOption = { label: string; value: string };

export interface DropboxProps {
  options: DropDownOption[];
  className?: string;
  labelText?: string;
  initialOption?: DropDownOption;
  id: string;
}

export const DefaultDropdownIndicator = (active: boolean) => {
  return (
    <>
      <Conditional showWhen={active}>
        <Icon.ArrowUp className="w-6 h-6" />
      </Conditional>
      <Conditional showWhen={!active}>
        <Icon.ArrowDown className="w-6 h-6" />
      </Conditional>
    </>
  );
};

const DropDown = {
  GreenDropdown: GreenDropdown,
  PrimaryDropdown: PrimaryDropdown,
  AccessDropdown: AccessDropdown,
};

export default DropDown;
