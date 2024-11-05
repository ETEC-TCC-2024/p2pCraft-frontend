"use client";
import { registerServer } from "@/app/actions/server";
import Button from "@/app/components/button/Button";
import DefaultLabelAndField from "@/app/components/form/DefaulltLabelAndField";
import DropDown from "@/app/components/form/dropbox/Dropbox";
import { Footer } from "@/app/components/navigation/Footer";
import { NavBar } from "@/app/components/navigation/NavBar";
import { useEffect, useState } from "react";
import { useFormState } from "react-dom";

export default function RegisterServerPage() {
  const [formState, action] = useFormState(registerServer, undefined);
  const [versionValid, setVersionValid] = useState(true);
  const [nameValid, setNameValid] = useState(true)

  useEffect(() => {
    setVersionValid(formState?.errors.version === undefined);
    setNameValid(formState?.errors.name === undefined);
  }, [formState]);

  return (
    <>
      <header>
        <NavBar isLoggedIn={true} variant={"primary"} />
      </header>
      <div className="flex justify-center items-center my-auto">
        <form action={action}>
          <div className="container flex flex-col mx-auto  justify-center items-center gap-14 h-full">
            <div className="flex flex-row gap-14">
              <DefaultLabelAndField
                labelText="Nome"
                labelName="name"
                invalid={!nameValid}
                className="m-0"
              ></DefaultLabelAndField>
              <DefaultLabelAndField
                labelText="Seed"
                labelName="seed"
                invalid={false}
                className="m-0"
              ></DefaultLabelAndField>
            </div>
            <VersionDropdown />
            <Button className="flex flex-col mx-auto" type="submit" variant={"green"}>
              Registrar
            </Button>
          </div>
        </form>
      </div>
      <Footer></Footer>
    </>
  );
}

function VersionDropdown() {
  const selectableVersions = [
    { label: "1.20.0", value: "1.20.0" },
    { label: "1.11.1", value: "1.11.1" },
    { label: "1.21.1", value: "1.21.1" },
  ];

  return (
    <DropDown
      options={selectableVersions}
      labelText="Versão"
      className="w-[400px]"
      variant="primary"
      id="version"
    ></DropDown>
  );
}
