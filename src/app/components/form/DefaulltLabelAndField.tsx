import { ChangeEvent, HTMLInputTypeAttribute } from "react";
import LabelAndField from "./LabelAndField";
import { cn } from "@/lib/utils";

interface LabelAndFieldProps {
  labelText: string;
  labelName: string;
  fieldType?: HTMLInputTypeAttribute;
  invalid: boolean;
  className?: string;
  defaultValue?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void
}
const DefaultLabelAndField: React.FC<LabelAndFieldProps> = ({
  labelName,
  labelText,
  fieldType = "text",
  invalid,
  defaultValue = "",
  className = "",
  onChange
}) => {
  return (
    <LabelAndField
      className={cn("min-w-[10%] max-w-[100%] w-96 mt-9", className)}
      fieldType={fieldType}
      inputName={labelName}
      fieldVariant={invalid ? "invalid" : null}
      defaultValue={defaultValue}
      onChange={onChange}
    >
      <div className="pl-1 p-2">{labelText}</div>
    </LabelAndField>
  );
};

export default DefaultLabelAndField;
