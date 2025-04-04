
import { getInjection } from "@repo/di/container";
import { InputParseError } from "@repo/entities/errors";
import { describe, expect, it } from "vitest";

const createPostController = getInjection("CreatePostController");

describe("CreatePostController", () => {
	it("should create a post successfully", async () => {
		expect(
			createPostController({ name: "Write unit tests" }),
		).resolves.toMatchObject({
			id: expect.any(Number),
			name: "Write unit tests",
		});
	});

	it("should throw an error if the input is invalid", async () => {
		expect(createPostController({ name: "" })).rejects.toBeInstanceOf(
			InputParseError,
		);
	});
});