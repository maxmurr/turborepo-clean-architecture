import { createEnv } from "@t3-oss/env-nextjs";

import { z } from "zod";
import { sharedEnv } from "../shared";
export const env = createEnv({
	extends: [sharedEnv],
	shared: {
		PORT: z.coerce.number().default(3001),
	},
	experimental__runtimeEnv: {
		PORT: process.env["PORT"],
	},
	emptyStringAsUndefined: true,
	skipValidation: true,
});