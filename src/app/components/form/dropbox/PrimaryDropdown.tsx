"use client";
import { useState } from "react";
import { DefaultDropdownIndicator, DropboxProps } from "./Dropbox";
import { cn } from "@/lib/utils";
import Select from "react-select";

const PrimaryDropdown: React.FC<DropboxProps> = ({
  className,
  labelText,
  options,
  initialOption,
  id,
}) => {
  const [active, setActive] = useState(false);

  return (
    <div className={cn(className)}>
      <label className="text-lg capitalize hover:text-blue-500">
        {labelText}
        <Select
          name={id}
          defaultValue={initialOption}
          options={options}
          components={{ DropdownIndicator: () => DefaultDropdownIndicator(active) }}
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
                "border-black-900 bg-[#DCFFFB] p-0 m-0 pr-2",
                {
                  "rounded-t-lg border-b-0 ": state.menuIsOpen,
                  "rounded-lg": !state.menuIsOpen,
                },
                {
                  "shadow-none": state.isFocused,
                }
              ),
            menu: () =>
              cn("bg-[#DCFFFB] rounded-b-lg border border-t-0 shadow-none border-black-900"),
            indicatorSeparator: () => cn("bg-transparent"),
          }}
          className="text-black"
        />
      </label>
    </div>
  );
};

export default PrimaryDropdown;
