import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "./db/index.js"; // your drizzle instance
import { user, session, verification, account } from "../auth-schema.ts";

export const auth = betterAuth({
  emailAndPassword: { enabled: true },
  baseURL: "http://localhost:5173",
  database: drizzleAdapter(db, {
    provider: "sqlite",
    schema: { user, session, verification, account },
  }),
});
