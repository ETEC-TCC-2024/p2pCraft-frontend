"use server";
import ServerController from "@/api/controller/ServerController";
import UserServer, { Difficulties, GameModes, ServerProperties } from "@/api/model/UserServer";
import ServerService from "@/api/service/ServerService";
import { ServerRegisterDto } from "@/dto/server/ServerRegisterDto";
import { ServerRegisterState, ServerRegisterValidator } from "@/lib/validator/ServerValidator";
import { AxiosResponse, HttpStatusCode } from "axios";
import { redirect } from "next/navigation";

export async function registerServer(formState: ServerRegisterState, formData: FormData) {
  const validateFields = ServerRegisterValidator.safeParse({
    name: formData.get("name"),
    version: formData.get("version"),
    seed: formData.get("seed"),
  });

  if (!validateFields.success) {
    return {
      errors: validateFields.error.flatten().fieldErrors,
    };
  }

  const { name, seed, version } = validateFields.data;

  const registerDto = new ServerRegisterDto(name, seed, version);

  const response = await ServerService.register(registerDto);

  const resposneStatus = response.status;
  if (resposneStatus === HttpStatusCode.Conflict) {
    return {
      errors: {
        name: ["A server with that name already exists"],
      },
    };
  }

  redirect(`/server/${name}`);
}

export async function getServer(formState: GetServerState, formData: FormData) {
  const server = await ServerController.getServerByName(formData.get("name")?.toString()!);
  if (server == null) {
    redirect("/client");
  }
  return { server: server };
}

export async function updateProperties(formData: FormData) {
  const properties = new ServerProperties();
  properties.cracked = formData.get("offlineMode")?.toString()! == "true";
  properties.pvpEnabled = formData.get("pvp")?.toString()! == "true";
  properties.whitelist = formData.get("whitelist")?.toString()! == "true";

  properties.playerSlots = +formData.get("slots")?.toString()!;

  properties.difficulty = formData.get("difficulty")?.toString()! as unknown as Difficulties;
  properties.gameMode = formData.get("gamemode")?.toString()! as unknown as GameModes;

  const serverName = formData.get("serverName")?.toString()!;

  await ServerController.updateProperties(properties, serverName);
  redirect(`/server/${serverName}`);
}

export async function deleteServer(formData: FormData) {
  const serverName = formData.get("serverName")?.toString()!;
  await ServerController.deleteServer(serverName);
  redirect(`/client`);
}

export async function setServerOpen(formData: FormData) {
  const open = formData.get("open")?.toString()!;
  const serverName = formData.get("serverName")?.toString()!;
  await ServerController.turnOnServer(open === "true", serverName);
  redirect(`/server/${serverName}`);
}

export async function addPlayerToWhitelist(formData: FormData) {
  const { serverName, playerName } = getWhiteListFormData(formData);
  await ServerController.addToWhiteList(serverName, playerName);
}

export async function removePlayerFromWhitelist(formData: FormData) {
  const { serverName, playerName } = getWhiteListFormData(formData);
  await ServerController.removeFromWhiteList(serverName, playerName);
}

export async function addClientAccess(formData: FormData) {
  const { serverName, clientName, accessType } = getClientAccessFormData(formData);
  await ServerController.addClientAccess(serverName, clientName, accessType);
}

export async function removeClientAccess(formData: FormData) {
  const { serverName, clientName } = getClientAccessFormData(formData);
  await ServerController.removeClientAccess(serverName, clientName);
}

export async function updateClientAccess(formData: FormData) {
  const { serverName, clientName, accessType } = getClientAccessFormData(formData);
  await ServerController.updateClientAccess(serverName, clientName, accessType);
}

function getClientAccessFormData(formData: FormData) {
  const serverName = formData.get("serverName")?.toString()!;
  const clientName = formData.get("clientName")?.toString()!;
  const accessType = formData.get("accessType")?.toString()!;
  return { serverName, clientName, accessType };
}

function getWhiteListFormData(formData: FormData) {
  const playerName = formData.get("playerName")?.toString()!;
  const serverName = formData.get("serverName")?.toString()!;
  return { serverName, playerName };
}

export type GetServerState =
  | {
      server: UserServer;
    }
  | undefined;
