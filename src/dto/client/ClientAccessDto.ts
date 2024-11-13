export class ClientAccessDto {
  clientName: string;
  accessRole: AccessTypes;

  constructor(clientName: string, accessType: AccessTypes) {
    this.accessRole = accessType;
    this.clientName = clientName;
  }
}

export type AccessTypes = "ADMIN" | "VIEW" | "OWNER"; 
