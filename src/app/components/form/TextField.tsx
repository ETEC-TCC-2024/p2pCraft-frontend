import { cn } from "@/lib/utils"
import { cva, VariantProps } from "class-variance-authority"
import { InputHTMLAttributes } from "react"


interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement>, VariantProps<typeof TextFieldVariants> {

}

const TextFieldVariants = cva("", {
    variants: {
    }
})

const TextField: React.FC<TextFieldProps> = ({ ...props }) => {
    return <input {...props} className={cn("h-fit w-full text-xl rounded-lg border p-2 focus:border-2 hover:border-blue-400 focus:shadow-2xl outline-none bg-opacity-0 bg-black-900 border-black-900 border-opacity-40")} />
}

export default TextField