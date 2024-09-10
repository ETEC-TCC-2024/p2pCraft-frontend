import { cn } from "@/lib/utils"
import { InputHTMLAttributes } from "react"


interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
}

const TextField: React.FC<TextFieldProps> = ({ ...props }) => {
    return <input {...props} className={cn("h-fit w-full text-base text-black-900 rounded-lg border p-3 outline-none bg-opacity-0 bg-white-900 border-black-900 border-opacity-40 disabled:bg-opacity-20 disabled:text-opacity-40",
        props.className)} />
}

export default TextField