import type { IPostRepository } from "@/repositories/post.interface";
import { InputParseError } from "@repo/entities/errors";
import type { CreatePost, Post } from "@repo/entities/models";

export type TCreatePostUseCase = ReturnType<typeof createPostUseCase>;

export const createPostUseCase =
	(postRepository: IPostRepository) =>
	async (post: CreatePost): Promise<Post> => {
		if (!post.name) {
			throw new InputParseError("Name is required");
		}

		const newPost = await postRepository.create(post);

		return newPost;
	};
