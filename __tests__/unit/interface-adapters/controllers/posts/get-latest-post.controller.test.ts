import { getInjection } from "@repo/di/container";
import { describe, expect, it } from "vitest";

const createPostUseCase = getInjection("CreatePostUseCase");
const getLatestPostController = getInjection("GetLatestPostController");

describe("GetLatestPostController", () => {
	it("should get the latest post successfully", async () => {
		const post = await createPostUseCase.execute({
			name: "Write unit tests",
		});

		expect(getLatestPostController()).resolves.toMatchObject(post);
	});

	// it("should throw an error if no post is found", async () => {
	// 	expect(getLatestPostController()).rejects.toBeInstanceOf(NotFoundError);
	// });
});
