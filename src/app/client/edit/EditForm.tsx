"use client";

import { editProfile, deleteClientAction, logout } from "@/app/actions/auth";
import Button from "@/app/components/button/Button";
import DefaultLabelAndField from "@/app/components/form/DefaulltLabelAndField";
import { useState, useEffect } from "react";
import { useFormState } from "react-dom";

interface EditFormProps {
    clientName: string;
    clientEmail: string;
}

const EditForm: React.FC<EditFormProps> = ({ clientName, clientEmail }) => {
    if (clientName == null) {
        logout()

    }
    const [formState, formAction] = useFormState(editProfile, undefined);
    const [emailValid, setEmailValid] = useState(true);
    const [passwordValid, setPasswordValid] = useState(true);

    useEffect(() => {
        setEmailValid(formState?.errors.email === undefined);
        setPasswordValid(formState?.errors.password === undefined);
    }, [formState]);

    const [newClientName, setNewClientName] = useState(clientName)
    const [newEmail, setNewEmail] = useState(clientEmail)

    const onDeleteAction = () => {
        const formData = new FormData();
        formData.append("email", newEmail);
        formData.append("name", newClientName);
        deleteClientAction(formData);
        logout();

    }
    return <>
        <form className="flex flex-col justify-center items-center px-9 py-12" action={formAction}>
            <div className="flex flex-row gap-x-9">
                <DefaultLabelAndField
                    labelName="name"
                    fieldType="text"
                    labelText="Nome"
                    defaultValue={clientName}
                    invalid={false}
                    onChange={(e) => setNewClientName(e.target.value)} />
                <DefaultLabelAndField
                    labelName="email"
                    fieldType="text"
                    labelText="Email"
                    invalid={!emailValid}
                    defaultValue={clientEmail}
                    onChange={(e) => setNewEmail(e.target.value)} />

            </div>

            <div className="flex flex-row gap-x-9">
                <DefaultLabelAndField
                    labelName="password"
                    fieldType="password"
                    labelText="Senha"
                    invalid={!passwordValid}
                />

                <DefaultLabelAndField
                    labelName="confirmPassword"
                    fieldType="password"
                    labelText="Confirmar senha"
                    invalid={!passwordValid}
                />
            </div>
            <div className="flex flex-row w-fit h-fit mt-12 gap-16">
                <Button variant={"green"} type="submit">
                    Salvar
                </Button>
            </div>
        </form>
        <form action={onDeleteAction}>
            <input hidden defaultValue={newClientName}></input>
            <input hidden defaultValue={newEmail} />
            <Button variant={"red"} type="submit">
                Deletar Perfil
            </Button>
        </form>
    </>
}

export default EditForm;