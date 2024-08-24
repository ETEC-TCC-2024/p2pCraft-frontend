import { cn } from "@/lib/utils"
import { ReactNode } from "react"
import TextSection from "../section/TextSection"


interface RootProps {
    className?: string,
    children: ReactNode
}
const Root: React.FC<RootProps> = ({ className, children }) => {
    return <div className={cn("flex flex-row gap-6 px-4 py-12 mx-auto justify-center items-center container", className)}>
        {children}
    </div>
}

interface MainTextSectionProps {
    children: ReactNode
}
const MainTextSection: React.FC<MainTextSectionProps> = ({ children }) => {
    return <TextSection.Root className="h-96">
        {children}
    </TextSection.Root>
}
const AboutMeSection = {
    Root: Root,
    MainTextSection: MainTextSection

}
export default AboutMeSection;