"use client";
import Button from "@/app/components/button/Button";
import DefaultLabelAndField from "@/app/components/form/DefaulltLabelAndField";
import DropDown from "@/app/components/form/dropbox/Dropbox";
import { Footer } from "@/app/components/navigation/Footer";
import { NavBar } from "@/app/components/navigation/NavBar";
import Select from "react-select/base";

export default function RegisterServerPage() {
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];

  return (
    <>
      <header>
        <NavBar isLoggedIn={true} variant={"primary"} />
      </header>
      <form action="">
        <div className="container flex flex-col mx-auto justify-center items-center gap-14">
          <div className="flex flex-row gap-14">
            <DefaultLabelAndField
              labelText="Nome"
              labelName="name"
              invalid={false}
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
          <Button type="submit" variant={"green"}>
            Registrar
          </Button>
        </div>
      </form>
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
    <>
      <DropDown
        options={selectableVersions}
        labelText="Versão"
        className="w-[400px] h-24"
        variant="primary"
      ></DropDown>
    </>
  );
}
