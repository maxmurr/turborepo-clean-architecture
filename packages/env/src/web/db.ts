import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

import { sharedEnv } from "../shared";

export const env = createEnv({
	extends: [sharedEnv],
	server: {
		DATABASE_URL: z.string().url(),
	},
	experimental__runtimeEnv: {},
	emptyStringAsUndefined: true,
	skipValidation: true,
});