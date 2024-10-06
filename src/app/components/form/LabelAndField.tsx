"use client";
import TextField, { fieldStates } from "./TextField";
import React, { HTMLInputTypeAttribute, ReactNode, useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { cva, VariantProps } from "class-variance-authority";

interface LabelAndFieldProps {
  children?: ReactNode;
  fieldType?: HTMLInputTypeAttribute;
  inputName: string;
  className?: string;
  fieldVariant?: fieldStates;
}

const LabelAndFieldVariants = cva("text-lg capitalize hover: hover:text-blue-300", {
  variants: {
    variant: {
      focus: "text-blue-600 transition-all duration-200",
      hover: "",
      primary: "",
      disable: "",
      invalid: "text-red-400",
    },
  },
});

const LabelAndField: React.FC<LabelAndFieldProps> = ({
  children,
  inputName,
  fieldType,
  className = "",
  fieldVariant = "primary",
}) => {
  const [fieldState, setFieldState] = useState<fieldStates>(fieldVariant);
  useEffect(() => {
    setFieldState(fieldVariant ? fieldVariant : "primary");
  }, [fieldVariant]);
  return (
    <label className={cn(className, LabelAndFieldVariants({ variant: fieldState }))}>
      {children}
      <TextField
        name={inputName}
        type={fieldType}
        onFocus={(e) => setFieldState("focus")}
        onBlur={(e) => setFieldState("primary")}
        variant={fieldState}
      />
    </label>
  );
};

export default LabelAndField;
