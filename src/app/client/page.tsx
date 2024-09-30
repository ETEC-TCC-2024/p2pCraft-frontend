import { decodeJwt, jwtDecrypt } from "jose";
import { cookies } from "next/headers";
import React from "react";
import Button from "../components/button/Button";
import { logout } from "../actions/auth";

const ClientHomePage = () => {
  const jwt = decodeJwt(cookies().get("session")?.value!);

  const clientUUID = jwt.sub;
  return (
    <div>
      Bem vindo! {clientUUID}
      <form action={logout}>
        <Button type="submit">Logout</Button>
      </form>
    </div>
  );
};
export default ClientHomePage;
