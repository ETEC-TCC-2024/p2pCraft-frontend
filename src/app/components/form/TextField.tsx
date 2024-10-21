import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import { InputHTMLAttributes } from "react";
import FieldBorder, { BorderVariants } from "./FieldBorder";

interface TextFieldProps
  extends InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof TextFieldVariants> {
  fieldState?: fieldStates;
}

export type fieldStates = VariantProps<typeof BorderVariants>["variant"];

const TextFieldVariants = cva("w-full outline-none text-base !bg-transparent", {
  variants: {
    variant: {
      primary: "text-black-900",
      green: "text-white placeholder-white/30",
    },
  },
});

const TextField: React.FC<TextFieldProps> = ({
  variant = "primary",
  fieldState = "primary",
  ...props
}) => {
  return (
    <FieldBorder variant={fieldState}>
      <input {...props} className={cn(TextFieldVariants({ variant }), props.className)} />
    </FieldBorder>
  );
};

export default TextField;
