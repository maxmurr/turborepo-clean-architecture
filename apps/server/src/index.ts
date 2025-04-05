import { trpcServer } from "@hono/trpc-server";
import { env } from "@repo/env/server";
import { Hono } from "hono";
import { cors } from "hono/cors";
import { logger } from "hono/logger";
import { appRouter } from "./root";

const app = new Hono();

app.use(logger());

app.use(
	"/*",
	cors({
		origin: env.CORS_ORIGIN,
		allowMethods: ["GET", "POST", "OPTIONS"],
		allowHeaders: ["Content-Type", "Authorization"],
		credentials: true,
	}),
);

app.use(
	"/trpc/*",
	trpcServer({
		router: appRouter,
	}),
);

app.get("/", (c) => {
	return c.text("OK");
});

export default app;
