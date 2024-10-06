import { z } from "zod";

export const LoginValidator = z.object({
  email: z.string().min(6, "Email is too short").trim(),
  password: z.string().min(3, "Password is too short"),
});

export type LoginState =
  | {
      errors?: {
        email?: string[];
        password?: string[];
      };
      message?: string;
    }
  | undefined;
