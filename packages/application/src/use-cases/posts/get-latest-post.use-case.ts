import type { PostRepository } from "@/interfaces/repositories/post.interface";
import type { GetLatestPostUseCase } from "@/interfaces/use-cases/posts/get-latest-post.interface";
import type { Post } from "@repo/entities/models";

export class GetLatestPostUseCaseImpl implements GetLatestPostUseCase {
	constructor(private postRepository: PostRepository) {}

	async execute(): Promise<Post | null> {
		return this.postRepository.findLatest();
	}
}
