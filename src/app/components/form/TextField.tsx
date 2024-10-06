import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";
import { InputHTMLAttributes } from "react";

interface TextFieldProps
  extends InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof TextFieldVariants> {}

const TextFieldVariants = cva(
  "h-fit w-full text-base text-black-900 rounded-lg border p-3 outline-none bg-opacity-0 bg-white-900 border-black-900 border-opacity-40 transition-all duration-200",
  {
    variants: {
      variant: {
        primary: "",
        focus:
          "border-2 -m-[1px] border-blue-400 shadow-2xl border-opacity-100 transition-shadow duration-300",
        hover: "border-blue-400",
        invalid: "border-red-400",
      },
    },
  }
);

export type fieldStates = VariantProps<typeof TextFieldVariants>["variant"];

const TextField: React.FC<TextFieldProps> = ({ ...props }) => {
  return (
    <input
      {...props}
      className={cn(TextFieldVariants({ variant: props.variant }), props.className)}
    />
  );
};

export default TextField;
