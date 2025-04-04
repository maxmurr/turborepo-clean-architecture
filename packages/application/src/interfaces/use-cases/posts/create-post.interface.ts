import type { CreatePost, Post } from "@repo/entities/models";

export interface CreatePostUseCase {
	execute(post: CreatePost): Promise<Post>;
}
