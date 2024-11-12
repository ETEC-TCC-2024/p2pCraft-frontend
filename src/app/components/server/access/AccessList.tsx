"use client";
import React, { useState } from "react";
import AccessField from "./AccessField";
import { ClientAccessDto } from "@/dto/client/ClientAccessDto";
import AccessFieldItem from "./AccessFieldItem";

interface AccessListProps {
  serverName: string;
  clients: ClientAccessDto[];
}

//TODO don't alow adding unexistent users
const AccessList: React.FC<AccessListProps> = ({ serverName, clients }) => {
  const [clientAccesses, setClientAccesses] = useState(clients);

  const handleAdd = (clientName: string) => {
    setClientAccesses([...clientAccesses, new ClientAccessDto(clientName, "VIEW")]);
  };

  const handleRemove = (clientName: string) => {
    setClientAccesses(
      clientAccesses.filter((clientAccess) => clientAccess.clientName !== clientName)
    );
  };
  return (
    <>
      <input defaultValue={serverName} id="serverName" hidden />
      <div>
        <AccessField serverName={serverName} onAdd={handleAdd}></AccessField>
        <ul>
          {clientAccesses
            .filter((access) => access.accessRole != "OWNER")
            .map((clientAccess) => {
              return (
                <li key={clientAccess.clientName}>
                  <AccessFieldItem
                    clientAccess={clientAccess}
                    serverName={serverName}
                    onRemove={() => handleRemove(clientAccess.clientName)}
                  />
                </li>
              );
            })}
        </ul>
      </div>
    </>
  );
};

export default AccessList;
