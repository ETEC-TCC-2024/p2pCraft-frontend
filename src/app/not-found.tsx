import Link from "next/link"
import Button from "./components/button/Button"
import Text from "./components/text/TextComponent"
export default function NotFound() {
    return <div className="flex flex-col  gap-y-10 items-center justify-center mx-auto">
        <div>
            <Text weight={"bold"} size="extra_large_x5" className="p-3">
                ERRO 404:
            </Text>
            <Text size={"extra_large_x5"} >
                Não encontrei o que estava procurando
            </Text>
        </div>
        <Link href="/">
            <Button variant="primary">
                Ir para página inicial
            </Button>
        </Link>
    </div>
}