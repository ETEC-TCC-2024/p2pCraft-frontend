import LabelAndField from "@/app/components/form/LabelAndField";
import { Footer } from "@/app/components/navigation/Footer";
import { NavBar } from "@/app/components/navigation/NavBar";
import React, { HTMLInputTypeAttribute } from "react";
import EditForm from "./EditForm";
import UserService from "@/api/service/UserService";

const EditProfilePage = async () => {
    const currentClient = await UserService.getCurrentClient();
    return (
        <>
            <header>
                <NavBar variant={"primary"} />
            </header>

            <div className="flex flex-col justify-center items-center my-auto">
                <EditForm clientName={currentClient?.name!}
                    clientEmail={currentClient?.email!}
                ></EditForm>

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
export default EditProfilePage;
