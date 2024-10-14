"use client";
import React, { HTMLInputTypeAttribute, useEffect, useState } from "react";
import LabelAndField from "../components/form/LabelAndField";
import { Footer } from "../components/navigation/Footer";
import { NavBar } from "../components/navigation/NavBar";
import Button from "../components/button/Button";
import { register } from "../actions/auth";
import { useFormState } from "react-dom";

const RegisterPage = () => {
  const [formState, formAction] = useFormState(register, undefined);
  const [emailValid, setEmailValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);

  useEffect(() => {
    setEmailValid(formState?.errors.email === undefined);
    setPasswordValid(formState?.errors.password === undefined);
  }, [formState]);

  return (
    <>
      <header>
        <NavBar variant={"primary"} />
      </header>
      <div className="flex flex-col justify-center items-center ">
        <form className="flex flex-col justify-center items-center px-9 py-12" action={formAction}>
          <div className="flex flex-row gap-x-9">
            <DefaultLabelAndField
              labelName="name"
              fieldType="text"
              labelText="Nome"
              invalid={false}
            ></DefaultLabelAndField>
            <DefaultLabelAndField
              labelName="email"
              fieldType="text"
              labelText="Email"
              invalid={!emailValid}
            ></DefaultLabelAndField>
          </div>

          <div className="flex flex-row gap-x-9">
            <DefaultLabelAndField
              labelName="password"
              fieldType="password"
              labelText="Senha"
              invalid={!passwordValid}
            ></DefaultLabelAndField>
            <DefaultLabelAndField
              labelName="confirmPassword"
              fieldType="password"
              labelText="Confirmar senha"
              invalid={!passwordValid}
            ></DefaultLabelAndField>
          </div>
          <Button variant={"green"} type="submit" className="mt-24">
            Registrar
          </Button>
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
  invalid: boolean;
}
const DefaultLabelAndField: React.FC<LabelAndFieldProps> = ({
  labelName,
  labelText,
  fieldType = "text",
  invalid,
}) => {
  return (
    <LabelAndField
      className="min-w-[10%] max-w-[100%] w-96 mt-9"
      fieldType={fieldType}
      inputName={labelName}
      fieldVariant={invalid ? "invalid" : null}
    >
      <div className="pl-1 p-2">{labelText}</div>
    </LabelAndField>
  );
};
export default RegisterPage;
