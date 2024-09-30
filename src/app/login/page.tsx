import React, { HTMLInputTypeAttribute } from "react";
import LabelAndField from "../components/form/LabelAndField";
import { Footer } from "../components/navigation/Footer";
import { NavBar } from "../components/navigation/NavBar";
import Button from "../components/button/Button";
import Text from "../components/text/Text";
import Link from "next/link";
import { login } from "@/app/actions/auth";

export const LoginPage = () => {
  return (
    <>
      <header>
        <NavBar variant={"primary"} />
      </header>
      <div className="flex flex-col justify-center items-center ">
        <form className="flex flex-col justify-center items-center px-9 py-12" action={login}>
          <DefaultLabelAndField labelName="email" labelText="Email" fieldType="email" />
          <DefaultLabelAndField labelName="password" labelText="Senha" fieldType="password" />
          <Button variant={"link"} className="relative p-0 ml-auto" type="button">
            Esqueceu sua senha?
          </Button>
          <Button variant={"green"} className="m-9" type="submit">
            Entrar
          </Button>
          <div className="w-fit">
            <Text>Novo aqui?</Text>
            <Link href="/register">
              <Button variant={"link"} className="p-0 pl-1" type="button">
                Crie sua conta
              </Button>
            </Link>
          </div>
        </form>
      </div>
      <Footer variant="primary" />
    </>
  );
};

interface LabelAndFieldProps {
  labelText: string;
  labelName: string;
  fieldType?: HTMLInputTypeAttribute;
}
const DefaultLabelAndField: React.FC<LabelAndFieldProps> = ({
  labelName,
  labelText,
  fieldType = "text",
}) => {
  return (
    <LabelAndField
      className="min-w-[10%] max-w-[100%] w-96 mt-9"
      fieldType={fieldType}
      inputName={labelName}
    >
      <div className="pl-1 p-2">{labelText}</div>
    </LabelAndField>
  );
};
export default LoginPage;
