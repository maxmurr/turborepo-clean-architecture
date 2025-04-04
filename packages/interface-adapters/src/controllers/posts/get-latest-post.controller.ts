import type { GetLatestPostUseCase } from "@repo/application/interfaces/use-cases/posts";
import { NotFoundError } from "@repo/entities/errors";
import type { Post } from "@repo/entities/models";

function presenter(post: Post) {
	return {
		id: post.id,
		name: post.name,
	};
}

export type TGetLatestPostController = ReturnType<
	typeof getLatestPostController
>;

export const getLatestPostController =
	(getLatestPostUseCase: GetLatestPostUseCase) => async () => {
		const post = await getLatestPostUseCase.execute();

		if (!post) {
			throw new NotFoundError("No post found");
		}

		return presenter(post);
	};
