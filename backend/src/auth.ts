import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "./db/index.js"; // your drizzle instance

export const auth = betterAuth({
    baseURL:"http://localhost:5173",
    database: drizzleAdapter(db, {
        provider: "sqlite"
    }),
});