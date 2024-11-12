import { removeClientAccess, updateClientAccess } from "@/app/actions/server";
import { AccessTypes, ClientAccessDto } from "@/dto/client/ClientAccessDto";
import React, { useState } from "react";
import Icon from "../../icon/Icon";
import Text from "../../text/TextComponent";
import Button from "../../button/Button";
import DropDown, { DropDownOption } from "../../form/dropbox/Dropbox";
import Conditional from "../../conditional/Conditional";

interface AccessFieldItemProps {
  clientAccess: ClientAccessDto;
  serverName: string;
  onRemove: () => void;
}

const AccessFieldItem: React.FC<AccessFieldItemProps> = ({
  clientAccess,
  serverName,
  onRemove,
}) => {
  const clientName = clientAccess.clientName;
  const [accessType, setAccessType] = useState(clientAccess.accessRole);
  const handleAccessTypeChange = (newAccessType: AccessTypes) => {
    const formData = new FormData();
    formData.append("serverName", serverName);
    formData.append("clientName", clientName);
    formData.append("accessType", newAccessType);
    updateClientAccess(formData);
  };
  const accessTypes: DropDownOption[] = [
    { label: "Admin", value: "ADMIN" },
    { label: "Visualizar", value: "VIEW" },
  ];
  return (
    <>
      <div className="border-b-[3px] last:border-none border-dark-green-500">
        <div className="flex flex-row items-center justify-between bg-dark-green-600 px-7 py-2 border-dark-green-900 w-[512px]">
          <div className="flex flex-row items-center">
            <Icon.Person className="mr-2 w-[39px] y-[39px]"></Icon.Person>
            <Text className="text-white text-base font-medium">{clientName}</Text>
          </div>
          <div className="flex flex-row">
            <form action={updateClientAccess} className="flex min-w-32 text-center mr-3">
              <DropDown.AccessDropdown
                id="accessType"
                options={accessTypes}
                initialOption={accessTypes.find((type) => type.value === accessType)}
                className="w-32"
                onChange={(newAccessType) => {
                  setAccessType(newAccessType?.value as AccessTypes);
                  handleAccessTypeChange(newAccessType?.value as AccessTypes);
                }}
              />
            </form>
            <form
              action={removeClientAccess}
              onSubmit={() => onRemove()}
              className="flex items-center">
              <input value={serverName} name="serverName" hidden readOnly></input>
              <input value={clientName} name="clientName" hidden readOnly></input>
              <Button variant={"noBackground"} className="p-0 ml-auto" type="submit">
                <Icon.Minus className="w-10 h-10"></Icon.Minus>
              </Button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AccessFieldItem;
