import React from "react"
import Server from "./Server"
import Text from "../text/TextComponent"
import { cn } from "@/lib/utils"
import IconBackground from "../icon/IconBackground"
import Link from "next/link"


type ServerStatuses = "online" | "offline"

interface ServerStatusProps {
    server: Server,
    serverStatus: ServerStatuses
}

const ServerStatus: React.FC<ServerStatusProps> = ({ server, serverStatus }) => {
    const textDefaultClassName = "text-white-50 font-semibold font-sans"
    return <Link href={`/server/${server.name}`}>
        <div className={cn("w-96 bg-dark-green-600 flex gap-2 pr-3 justify-between hover:bg-gradient-to-r from-[1%] to-20% to-bg-dark-green-600", {
            "from-green-ion-500/50": serverStatus === "online",
            "from-red-500/50": serverStatus === "offline"
        })}>
            <StatusBar status={serverStatus} />
            <div className="flex flex-1 flex-col my-4">
                <Text className={cn(textDefaultClassName, "text-3xl")}>{server.name}</Text>
                <Text className={textDefaultClassName}>{server.minecraftVersion}</Text>
            </div>
            <StatusIcon status={serverStatus}></StatusIcon>
        </div>
    </Link>
}

const StatusBar: React.FC<{ status: ServerStatuses }> = ({ status }) => {
    return <div className={cn("w-3", {
        "bg-red-500": status === "offline",
        "bg-green-ion-400": status === "online"
    })}>
    </div >
}

const StatusIcon: React.FC<{ status: ServerStatuses }> = ({ status }) => {
    return <div className="my-auto">
        <IconBackground iconName={status == "online" ? "Play" : "Stop"} theme={"dark"} variant={"rounded"} className={cn("h-12 w-12", {
            "bg-green-ion-500": status === "online",
            "bg-red-500": status === "offline"
        })} />
    </div>
}


export default ServerStatus