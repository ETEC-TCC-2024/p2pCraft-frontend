import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import { InputHTMLAttributes } from "react";
import FieldBorder, { BorderVariants } from "./FieldBorder";

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  variant: fieldStates;
}

export type fieldStates = VariantProps<typeof BorderVariants>["variant"];

const TextField: React.FC<TextFieldProps> = ({ ...props }) => {
  return (
    <FieldBorder variant={props.variant}>
      <input
        {...props}
        className={cn(
          "w-full outline-none text-base text-black-900 !bg-transparent",
          props.className
        )}
      />
    </FieldBorder>
  );
};

export default TextField;
