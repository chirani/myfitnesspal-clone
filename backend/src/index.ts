import { Hono } from "hono";
import { auth } from "./auth";
import { serve } from "@hono/node-server";
import { cors } from "hono/cors";
 
const app = new Hono();

app.use(
	"/api/auth/*", // or replace with "*" to enable cors for all routes
	cors({
		origin: "http://localhost:3001", // replace with your origin
		allowHeaders: ["Content-Type", "Authorization"],
		allowMethods: ["POST", "GET", "OPTIONS"],
		exposeHeaders: ["Content-Length"],
		maxAge: 600,
		credentials: true,
	}),
);

app.on(["POST", "GET"], "/api/auth/*", (c) => {
	return auth.handler(c.req.raw);
});

serve(app);