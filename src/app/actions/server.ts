"use server";
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
