"use server";
import { ClientTokenDto } from "@/dto/client/ClientDto";
import { ClientLoginDto } from "@/dto/client/ClientLoginDto";
import { ClientRegisterDto } from "@/dto/client/ClientRegisterDto";
import { createSession, deleteSession } from "@/lib/Session";
import { redirect } from "next/navigation";
import { API_URL } from "./config";

export async function login(formData: FormData) {
  //todo validation
  const email = formData.get("email")?.toString()!;
  const password = formData.get("password")?.toString()!;
  const loginDto = new ClientLoginDto(email, password);

  const response = await fetch(API_URL + "/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(loginDto),
  });

  const responseJson = await response.json();

  const tokenDto = new ClientTokenDto(responseJson["token"]);

  createSession(tokenDto.token);
  redirect("/client");
}

export async function register(registerDto: ClientRegisterDto) {
  const response = await fetch(API_URL + "/signup", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(registerDto),
  });

  const responseJson = await response.json();

  const tokenDto = new ClientTokenDto(responseJson["token"]);

  createSession(tokenDto.token);

  return tokenDto;
}

export async function logout() {
  deleteSession();
  redirect("/login");
}
