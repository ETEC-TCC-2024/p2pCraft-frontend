"use client";

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

      <div className="flex flex-row ml-auto bg-dark-green-700 p-2 px-3 w-32 justify-between">
        <button onClick={() => setNumber(currentNumber - 1)} type="button">
          <Icon.Minus className="w-6 h-6 mr-3"></Icon.Minus>
        </button>
        <input
          name={fieldName}
          defaultValue={currentNumber}
          className="text-white bg-transparent w-full outline-none appearance-none text-center"
          type="number"
        ></input>
        <button onClick={() => setNumber(currentNumber + 1)} type="button">
          <Icon.Plus className="w-6 h-6 ml-3"></Icon.Plus>
        </button>
      </div>
    </div>
  );
};

export default NumberField;
