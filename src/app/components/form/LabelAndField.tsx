"use client"
import TextField from "./TextField"
import React, { HTMLInputTypeAttribute, ReactNode, useState } from "react"
import { cn } from "@/lib/utils"

interface LabelAndFieldProps {
    children?: ReactNode,
    fieldType?: HTMLInputTypeAttribute,
    inputName: string,
    className?: string
}


const LabelAndField: React.FC<LabelAndFieldProps> = ({ children, inputName, fieldType, className = "" }) => {
    const [focus, setFocus] = useState(false)
    return (
        <label className={cn("text-lg capitalize hover:text-blue-300", { "text-blue-600 transition-all duration-200": focus }, className)}
            onFocus={e => setFocus(true)} onBlur={e => setFocus(false)}>
            {children}
            <TextField name={inputName} type={fieldType} onFocus={e => setFocus(true)} onBlur={e => setFocus(false)}
                className={cn("hover:border-blue-400",
                    { "border-2 -m-[1px] border-blue-400 shadow-2xl border-opacity-100 transition-shadow duration-300": focus })} />
        </label>
    )
}

export default LabelAndField;