"use client";
import React, { useEffect, useState } from "react";
import { Footer } from "../components/navigation/Footer";
import { NavBar } from "../components/navigation/NavBar";
import Button from "../components/button/Button";
import Text from "../components/text/TextComponent";
import Link from "next/link";
import { login } from "@/app/actions/auth";
import { useFormState } from "react-dom";
import DefaultLabelAndField from "../components/form/DefaulltLabelAndField";

const LoginPage = () => {
  const [emailValid, setEmailValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);
  const [formState, formAction] = useFormState(login, undefined);

  useEffect(() => {
    setEmailValid(formState?.errors.email === undefined);
    setPasswordValid(formState?.errors.password === undefined);
  }, [formState]);

  const handleSubmit = () => {
    setEmailValid(true);
    setPasswordValid(true);
  };
  return (
    <>
      <header>
        <NavBar variant={"primary"} />
      </header>
      <div className="flex flex-col justify-center items-center my-auto">
        <form
          className="flex flex-col justify-center items-center px-9 py-12"
          action={formAction}
          onSubmit={handleSubmit}
        >
          <DefaultLabelAndField
            labelName="email"
            labelText="Email"
            fieldType="email"
            invalid={!emailValid}
          />
          <DefaultLabelAndField
            labelName="password"
            labelText="Senha"
            fieldType="password"
            invalid={!passwordValid}
          />
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

export default LoginPage;
