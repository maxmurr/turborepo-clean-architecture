import type { PostRepository } from "@/interfaces/repositories/post.interface";
import type { CreatePostUseCase } from "@/interfaces/use-cases/posts/create-post.interface";
import type { CreatePost, Post } from "@repo/entities/models";

export class CreatePostUseCaseImpl implements CreatePostUseCase {
	constructor(private postRepository: PostRepository) {}

	async execute(post: CreatePost): Promise<Post> {
		const newPost = await this.postRepository.create(post);

		return newPost;
	}
}
