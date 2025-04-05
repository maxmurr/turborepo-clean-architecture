import type { CreatePost, Post } from "@repo/entities/models";
export interface IPostRepository {
	create(post: CreatePost): Promise<Post>;
	findLatest(): Promise<Post | null>;
}
