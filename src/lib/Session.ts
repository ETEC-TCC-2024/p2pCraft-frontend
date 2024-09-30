import { decodeJwt, jwtDecrypt } from "jose";
import { cookies } from "next/headers";
import "server-only";

export async function createSession(token: string) {
  console.log(token);
  const jwt = decodeJwt(token);
  const expirestAt = new Date(0);
  expirestAt.setSeconds(jwt.exp!);

  cookies().set("session", token, {
    httpOnly: true,
    secure: false, //we don't have ssl
    expires: expirestAt,
    sameSite: "lax",
    path: "/",
  });
}

export async function deleteSession() {
  cookies().delete("session");
}
