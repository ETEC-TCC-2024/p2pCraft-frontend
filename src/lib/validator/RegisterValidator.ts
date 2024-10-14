import { z } from "zod";

export const RegisterValidator = z
  .object({
    email: z.string().min(6, "Email is too short").trim(),
    password: z.string().min(3, "Password is too short"),
    confirmPassword: z.string().min(3),
    name: z.string().min(3),
  })
  .superRefine(({ confirmPassword, password }, ctx) => {
    if (confirmPassword !== password) {
      ctx.addIssue({
        code: "custom",
        message: "Passwords did not match",
        path: ["password"],
      });
    }
  });

export type RegisterState =
  | {
      errors?: {
        email?: string[];
        password?: string[];
        confirmPassword?: string[];
        name?: string[];
      };
      message?: string;
    }
  | undefined;
