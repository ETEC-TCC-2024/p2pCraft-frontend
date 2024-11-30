"use client";
import { useState } from "react";
import Text from "../../text/TextComponent";
import { DefaultDropdownIndicator, DropboxProps } from "./Dropbox";
import Select from "react-select";
import { cn } from "@/lib/utils";

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
      <label className="flex flex-row items-center justify-between capitalize w-64 max-h-16 bg-dark-green-600 px-3 py-3">
        <Text className="text-white">{labelText}</Text>
        <Select
          name={id}
          defaultValue={initialOption}
          options={options}
          components={{ DropdownIndicator: () => DefaultDropdownIndicator(active) }}
          onMenuOpen={() => setActive(true)}
          onMenuClose={() => setActive(false)}
          theme={(theme) => ({
            ...theme,
            spacing: { ...theme.spacing, menuGutter: 0, baseUnit: 1 },
            borderRadius: 0,
          })}
          classNames={{
            control: (state) =>
              cn("border-none  bg-dark-green-700 p-2 m-0", {
                "shadow-none": state.isFocused,
              }),
            menu: () => cn("bg-dark-green-700 shadow-none  border-black-900"),
            option: (state) =>
              cn(
                "p-2",
                {
                  "bg-dark-green-500": state.isFocused,
                },
                {
                  "bg-dark-green-500": state.isSelected,
                }
              ),
            indicatorSeparator: () => cn("bg-transparent"),
            singleValue: () => cn("text-white min-w-14"),
          }}
          className={cn("text-white")}
        />
      </label>
    </div>
  );
};

export default GreenDropdown;
