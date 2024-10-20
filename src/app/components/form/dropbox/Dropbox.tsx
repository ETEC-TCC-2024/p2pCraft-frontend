"use client";

import { cn } from "@/lib/utils";
import Icon from "../../icon/Icon";
import React, { useState } from "react";
import Conditional from "../../conditional/Conditional";
import Select from "react-select";
import Text from "../../text/TextComponent";

type option = { label: string; value: string };
interface DropboxProps {
  options: option[];
  className?: string;
  labelText: string;
  initialOption?: string;
  variant?: "primary" | "green";
  id: string;
}

const DropdownIndicator = (active: boolean) => {
  return (
    <>
      <Conditional showWhen={active}>
        <Icon.ArrowUp className="w-6 mr-2 ml-6" />
      </Conditional>
      <Conditional showWhen={!active}>
        <Icon.ArrowDown className="w-6 mr-2 ml-6" />
      </Conditional>
    </>
  );
};

const DropDown: React.FC<DropboxProps> = ({
  className = "",
  options,
  labelText,
  variant,
  initialOption = "Selecione uma opção",
  id,
}) => {
  return (
    <>
      <Conditional showWhen={variant === "primary"}>
        <PrimaryDropdown
          className={className}
          options={options}
          labelText={labelText}
          initialOption={initialOption}
          id={id}
        ></PrimaryDropdown>
      </Conditional>
      <Conditional showWhen={variant === "green"}>
        <GreenDropdown
          id={id}
          className={className}
          options={options}
          labelText={labelText}
          initialOption={initialOption}
        ></GreenDropdown>
      </Conditional>
    </>
  );
};

const GreenDropdown: React.FC<DropboxProps> = ({
  className,
  labelText,
  options,
  initialOption,
  id,
}) => {
  const [active, setActive] = useState(false);

  return (
    <div className={cn("w-64", className)}>
      <label className="flex flex-row items-center justify-between capitalize w-64 bg-dark-green-600 px-3 py-2">
        <Text className="text-white text-lg">{labelText}</Text>
        <Select
          name={id}
          defaultValue={{ value: initialOption, label: labelText }}
          options={options}
          components={{ DropdownIndicator: () => DropdownIndicator(active) }}
          onMenuOpen={() => setActive(true)}
          onMenuClose={() => setActive(false)}
          theme={(theme) => ({
            ...theme,
            spacing: { ...theme.spacing, menuGutter: 0, baseUnit: 1 },
            borderRadius: 0,
          })}
          classNames={{
            control: (state) =>
              cn("!border-none  !bg-dark-green-700 p-2 !m-0", {
                "!shadow-none": state.isFocused,
              }),
            menu: (state) => cn("!bg-dark-green-700 !shadow-none  !border-black-900", {}),
            option: (state) =>
              cn(
                "!p-2 ",
                {
                  "!bg-dark-green-500": state.isFocused,
                },
                {
                  "!bg-dark-green-500": state.isSelected,
                }
              ),
            indicatorSeparator: () => cn("!bg-transparent"),
            singleValue: () => "!text-white",
          }}
          className="text-white"
        ></Select>
      </label>
    </div>
  );
};
const PrimaryDropdown: React.FC<DropboxProps> = ({
  className,
  labelText,
  options,
  initialOption: initialText,
  id,
}) => {
  const [active, setActive] = useState(false);

  return (
    <div className={cn(className)}>
      <label className="text-lg capitalize hover:text-blue-500">
        {labelText}
        <Select
          name={id}
          defaultValue={{ value: initialText, label: initialText }}
          options={options}
          components={{ DropdownIndicator: () => DropdownIndicator(active) }}
          onMenuOpen={() => setActive(true)}
          onMenuClose={() => setActive(false)}
          theme={(theme) => ({
            ...theme,
            spacing: { ...theme.spacing, menuGutter: 0, baseUnit: 8 },
            borderRadius: 0,
          })}
          classNames={{
            control: (state) =>
              cn(
                "!border-black-900 !bg-[#DCFFFB] !p-0 !m-0",
                {
                  "!rounded-t-lg !border-b-0 ": state.menuIsOpen,
                  "!rounded-lg": !state.menuIsOpen,
                },
                {
                  "!shadow-none ": state.isFocused,
                }
              ),
            menu: (state) =>
              cn(
                "!bg-[#DCFFFB] !rounded-b-lg !border !border-t-0 !shadow-none !border-black-900",
                {}
              ),
            menuList: (state) => cn(""),
            indicatorSeparator: () => cn("!bg-transparent "),
          }}
          className="text-black"
        ></Select>
      </label>
    </div>
  );
};

export default DropDown;
