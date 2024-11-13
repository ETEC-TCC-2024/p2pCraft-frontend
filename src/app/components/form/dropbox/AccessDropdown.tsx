"use client";
import { useState } from "react";
import Text from "../../text/TextComponent";
import { DefaultDropdownIndicator, DropboxProps, DropDownOption } from "./Dropbox";
import Select, { SingleValue } from "react-select";
import { cn } from "@/lib/utils";

interface AccessDropdownProps extends DropboxProps {
  onChange?: (newValue: SingleValue<DropDownOption>) => void;
}

const AccessDropdown: React.FC<AccessDropdownProps> = ({
  className,
  options,
  initialOption,
  id,
  onChange,
}) => {
  const [active, setActive] = useState(false);

  return (
    <div className={cn(className)}>
      <Select
        
        onChange={onChange}
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
            cn("border-none  bg-dark-green-800 p-2 m-0", {
              "shadow-none": state.isFocused,
            }),
          menu: () => cn("bg-dark-green-800 shadow-none  border-black-900"),
          option: (state) =>
            cn(
              "p-2",
              {
                "bg-dark-green-500": state.isFocused,
              },
              {
                "bg-dark-green-800": state.isSelected && !state.isFocused,
              }
            ),
          indicatorSeparator: () => cn("bg-transparent"),
          singleValue: () => cn("text-white min-w-14"),
        }}
        className={cn("text-white")}
      />
    </div>
  );
};

export default AccessDropdown;
