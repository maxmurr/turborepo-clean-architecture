import type { Config } from "drizzle-kit";

import { env } from "@repo/env/core/db";

export default {
	schema: "./src/schema/**/*.ts",
	dialect: "sqlite",
	dbCredentials: {
		url: env.DATABASE_URL,
	},
	tablesFilter: ["web_*"],
} satisfies Config;
