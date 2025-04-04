import { URL, fileURLToPath } from "node:url";
import env from "vite-plugin-env-compatible";
import { defineConfig } from "vitest/config";

export default defineConfig({
	test: {
		environment: "node",
		include: ["**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
		coverage: {
			provider: "istanbul",
			reporter: ["text", "json", "html"],
			reportsDirectory: "./__tests__/coverage",
			exclude: [
				"node_modules/",
				"dist/",
				".turbo/",
				"**/*.d.ts",
				"**/*.test.{js,ts}",
				"**/*.config.{js,ts}",
			],
		},
	},
	plugins: [env()],
	resolve: {
		alias: {
			"@": fileURLToPath(new URL("./", import.meta.url)),
		},
	},
});