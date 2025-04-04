import { getInjection } from "@repo/di/container";
import { describe, expect, it } from "vitest";

const createPostUseCase = getInjection("CreatePostUseCase");
const getLatestPostUseCase = getInjection("GetLatestPostUseCase");

describe("GetLatestPostUseCase", () => {
	it("should get the latest post successfully", async () => {
		const post = await createPostUseCase.execute({
			name: "Hello World",
		});

		expect(getLatestPostUseCase.execute()).resolves.toMatchObject(post);
	});
});