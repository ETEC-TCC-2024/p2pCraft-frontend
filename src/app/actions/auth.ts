"use server";
import { ClientTokenDto } from "@/dto/client/ClientDto";
import { ClientLoginDto } from "@/dto/client/ClientLoginDto";
import { ClientRegisterDto } from "@/dto/client/ClientRegisterDto";
import { createSession, deleteSession } from "@/lib/Session";
import { redirect } from "next/navigation";
import {
  UserLoginState,
  UserRegisterState,
  UserLoginValidator,
  UserRegisterValidator,
} from "@/lib/validator/UserValidators";
import UserService from "@/api/service/UserService";
import { AxiosResponse } from "axios";
import { UpdateClientDto } from "@/dto/client/UpdateClientDto";

export async function login(formState: UserLoginState, formData: FormData) {
  const validateFields = UserLoginValidator.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
  });

  if (!validateFields.success) {
    return {
      errors: validateFields.error.flatten().fieldErrors,
    };
  }

  const { email, password } = validateFields.data;
  const loginDto = new ClientLoginDto(email, password);

  const response = await UserService.login(loginDto);
  if (response.status != 200) {
    return getError(response);
  }

  createSession(response.data["token"]);
  redirect("/client");
}

export async function register(formState: UserRegisterState, formData: FormData) {
  const validateFields = UserRegisterValidator.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
    confirmPassword: formData.get("confirmPassword"),
    name: formData.get("name"),
  });

  if (!validateFields.success) {
    return {
      errors: validateFields.error.flatten().fieldErrors,
    };
  }

  const { name, email, password } = validateFields.data;

  const registerDto = new ClientRegisterDto(name, email, password);
  const response = await UserService.register(registerDto);

  if (response.status != 201) {
    return getError(response);
  }
  const responseJson = response.data;

  const tokenDto = new ClientTokenDto(responseJson["token"]);

  createSession(tokenDto.token);
  redirect("/client");
}

export async function editProfile(formState : UserRegisterState, formData: FormData) {
  const validateFields = UserRegisterValidator.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
    confirmPassword: formData.get("confirmPassword"),
    name: formData.get("name"),
  });
  const { name, email, password } = validateFields.data!;
  const updateClientDto = new UpdateClientDto(name, email, password);
  const response = await UserService.updateClient( updateClientDto)

  if (response.status != 200) {
    return getError(response);
  }

  redirect("/client")
}
export async function deleteClientAction(formData : FormData){
  const response = await UserService.deleteClient()
}
export async function logout() {
  deleteSession();
  redirect("/login");
}

async function getError(response: AxiosResponse) {
  //TODO Validation chain
  const responseJson = await response.data;
  const errorDescription = responseJson["description"] as string;
  if (errorDescription.toLowerCase().includes("email")) {
    return {
      errors: {
        email: [`Invalid email`],
      },
    };
  }
  if (errorDescription.toLowerCase().includes("password")) {
    return {
      errors: {
        password: [`Invalid password`],
      },
    };
  }
}
