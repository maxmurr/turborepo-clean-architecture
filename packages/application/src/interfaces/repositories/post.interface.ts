import type { CreatePost, Post } from "@repo/entities/models";
export interface PostRepository {
	create(post: CreatePost): Promise<Post>;
	findLatest(): Promise<Post | null>;
}
