"use client";

import { useState } from "react";
import Text from "../../text/TextComponent";
import Icon from "../../icon/Icon";

interface NumberFieldProps {
  currentNumber: number;
  setNumber: (number: number) => void;
  fieldName: string;
  labelText: string;
}

const NumberField: React.FC<NumberFieldProps> = ({
  currentNumber,
  setNumber,
  labelText,
  fieldName,
}) => {
  return (
    <div className="flex flex-row h-fit w-64 py-3 px-2  max-h-16 bg-dark-green-600 justify-center items-center">
      <Text className="text-white">{labelText}</Text>

      <div className="flex flex-row ml-auto bg-dark-green-700 p-2">
        <button onClick={() => setNumber(currentNumber - 1)}>
          <Icon.Minus className="w-6"></Icon.Minus>
        </button>
        <input hidden name={fieldName}></input>
        <Text className="text-white"> {currentNumber} </Text>
        <button
          onClick={() => {
            console.log(currentNumber);
            setNumber(currentNumber + 1);
          }}
        >
          <Icon.Plus className="w-6 h-6"></Icon.Plus>
        </button>
      </div>
    </div>
  );
};

export default NumberField;
