import { randomUUID } from "crypto";
import { z } from "zod";

export const ServerRegisterValidator = z.object({
  name: z.string().min(3, "Name is too short").trim(),
  version: z.string().min(1, "Must select a version"),
  seed: z.string().default(randomUUID().toString()),
});

export type ServerRegisterState =
  | {
      errors?: {
        name?: string[];
        version?: string[];
        seed?: string[];
      };
      message?: string;
    }
  | undefined;
