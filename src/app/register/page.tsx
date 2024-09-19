import React, { HTMLInputTypeAttribute } from "react";
import LabelAndField from "../components/form/LabelAndField";
import { Footer } from "../components/navigation/Footer";
import { NavBar } from "../components/navigation/NavBar";
import Button from "../components/button/Button";
import Text from "../components/text/Text";
import Link from "next/link";


export const LoginPage = () => {
    return <>
        <header><NavBar variant={"primary"} /></header>
        <div className="flex flex-col justify-center items-center ">
            <form className="flex flex-col justify-center items-center px-9 py-12" action={"/login"}>
                <div className="flex flex-row gap-x-9">
                    <DefaultLabelAndField labelName="name" fieldType="text" labelText="Nome"></DefaultLabelAndField>
                    <DefaultLabelAndField labelName="email" fieldType="text" labelText="Email"></DefaultLabelAndField>
                </div>

                <div className="flex flex-row gap-x-9">
                    <DefaultLabelAndField labelName="pass" fieldType="text" labelText="Senha"></DefaultLabelAndField>
                    <DefaultLabelAndField labelName="confirmPass" fieldType="text" labelText="Confirmar senha"></DefaultLabelAndField>
                </div>
                <Button variant={"green"} type="submit" className="mt-24">Registrar</Button>
            </form>
        </div>
        <Footer variant="primary" />
    </>
}

interface LabelAndFieldProps {
    labelText: string,
    labelName: string,
    fieldType?: HTMLInputTypeAttribute
}
const DefaultLabelAndField: React.FC<LabelAndFieldProps> = ({ labelName, labelText, fieldType = "text" }) => {
    return <LabelAndField
        className="min-w-[10%] max-w-[100%] w-96 mt-9"
        fieldType={fieldType}
        inputName={labelName}>
        <div className="pl-1 p-2">
            {labelText}
        </div>
    </LabelAndField >
}
export default LoginPage;   