import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";

export const BorderVariants = cva(
  "h-fit w-full rounded-lg p-3 outline-none transition-all duration-200 ",
  {
    variants: {
      variant: {
        primary: "border bg-opacity-0 border-black-900 border-opacity-40",
        focus:
          "border-2 -m-[1px] border-blue-400 shadow-2xl border-opacity-100 transition-shadow duration-300",
        hover: "border border-blue-400",
        invalid: "border border-red-400",
        empty: ""
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
