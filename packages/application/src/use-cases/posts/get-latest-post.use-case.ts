import type { IPostRepository } from "@/repositories/post.interface";
import { NotFoundError } from "@repo/entities/errors";
import type { Post } from "@repo/entities/models";

export type TGetLatestPostUseCase = ReturnType<typeof getLatestPostUseCase>;

export const getLatestPostUseCase =
	(postRepository: IPostRepository) => async (): Promise<Post | null> => {
		const post = await postRepository.findLatest();

		if (!post) {
			throw new NotFoundError("No post found");
		}

		return post;
	};
