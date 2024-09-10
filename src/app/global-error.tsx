"use client"
import Link from "next/link"
import Button from "./components/button/Button"
import Text from "./components/text/Text"
export default function Error() {
    return <div className="flex flex-col  gap-y-10 items-center justify-center mx-auto">

        <Text weight={"bold"} size="extra_large_x5" className="p-3">
            ERRO 500:
        </Text>
        <Text size={"extra_large_x5"} >
            Algo deu errado em nossos serviços internos.
        </Text><br></br>
        <Text size="extra_large_x3">Se o erro persistir, por favor entre em contato com nosso suporte</Text>
        <Link href="/">
            Ir para página inicial
            <Button variant="primary">
            </Button>
        </Link>
    </div>
}