"use server";
import { ClientTokenDto } from "@/dto/client/ClientDto";
import { ClientLoginDto } from "@/dto/client/ClientLoginDto";
import { ClientRegisterDto } from "@/dto/client/ClientRegisterDto";
import { createSession, deleteSession } from "@/lib/Session";
import { redirect } from "next/navigation";
import { API_URL } from "./config";
import { LoginState, LoginValidator } from "@/lib/validator/LoginValidator";
import { RegisterState, RegisterValidator } from "@/lib/validator/RegisterValidator";

export async function login(formState: LoginState, formData: FormData) {
  const validateFields = LoginValidator.safeParse({
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

  const response = await fetch(API_URL + "/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(loginDto),
  });


  if (!response.ok) {
    return getError(response);
  }

  const responseJson = await response.json();
  createSession(responseJson["token"]);
  redirect("/client");
}

export async function register(
  formState: RegisterState,
  formData: FormData,
  registerDto: ClientRegisterDto
) {
  const response = await fetch(API_URL + "/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(registerDto),
  });

  const validateFields = RegisterValidator.safeParse({
    email: formData.get("email"),
    password: formData.get("password"),
    confirmPassword: formData.get("confirmPassword"),
    name: formData.get("name"),
  });

  
  if (!response.ok) {
    return getError(response);
  }
  const responseJson = await response.json();

  const tokenDto = new ClientTokenDto(responseJson["token"]);

  createSession(tokenDto.token);

  return tokenDto;
}

export async function logout() {
  deleteSession();
  redirect("/login");
}

async function getError(response: Response) {
  //TODO Validation chain

  const responseJson = await response.json();
  if (!response.ok) {
    const errorDescription = responseJson["description"] as string;
    if (errorDescription.includes("email")) {
      return {
        errors: {
          email: [`Invalid email`],
        },
      };
    }
    if (errorDescription.includes("password")) {
      return {
        errors: {
          password: [`Invalid password`],
        },
      };
    }
  }
}
