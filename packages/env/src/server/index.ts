import { createEnv } from "@t3-oss/env-core";

import { z } from "zod";
import { sharedEnv } from "../shared";

export const env = createEnv({
	extends: [sharedEnv],
	server: {
		CORS_ORIGIN: z.string(),
	},
	runtimeEnv: process.env,
	skipValidation: true,
	emptyStringAsUndefined: true,
});