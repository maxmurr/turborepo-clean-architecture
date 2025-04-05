import type { TCreatePostUseCase } from "@repo/application/use-cases/posts";
import { InputParseError } from "@repo/entities/errors";
import {
	type CreatePost,
	type Post,
	createPostSchema,
} from "@repo/entities/models";

function presenter(post: Post) {
	return {
		id: post.id,
		name: post.name,
	};
}

export type TCreatePostController = ReturnType<typeof createPostController>;

export const createPostController =
	(createPostUseCase: TCreatePostUseCase) => async (input: CreatePost) => {
		const { data, error: inputParseError } = createPostSchema.safeParse(input);

		if (inputParseError) {
			throw new InputParseError(inputParseError.message);
		}

		const post = await createPostUseCase(data);
		return presenter(post);
	};
