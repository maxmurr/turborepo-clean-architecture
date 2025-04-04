import { getInjection } from "@repo/di/container";
import { describe, expect, it } from "vitest";

const createPostUseCase = getInjection("CreatePostUseCase");

describe("CreatePostUseCase", () => {
	it("should create a post successfully", async () => {
		expect(
			createPostUseCase.execute({
				name: "Write unit tests",
			}),
		).resolves.toMatchObject({
			name: "Write unit tests",
		});
	});
});