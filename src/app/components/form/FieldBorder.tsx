import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";

export const BorderVariants = cva(
  "h-fit w-full rounded-lg border p-3 outline-none bg-opacity-0 border-black-900 border-opacity-40 transition-all duration-200 ",
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

interface BorderProps extends VariantProps<typeof BorderVariants> {
  children: React.ReactNode;
  className?: string;
}

const FieldBorder: React.FC<BorderProps> = ({ children, variant, className }) => {
  return <div className={cn(BorderVariants({ variant }), className)}>{children}</div>;
};

export default FieldBorder;
