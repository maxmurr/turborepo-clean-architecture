import { db } from "@repo/db";
import { posts } from "@repo/db/schema";
import { desc } from "drizzle-orm";

import type { IPostRepository } from "@repo/application/repositories";
import type { CreatePost, Post } from "@repo/entities/models";

export class PostRepositoryImpl implements IPostRepository {
	async create(post: CreatePost): Promise<Post> {
		const [newPost] = await db.insert(posts).values(post).returning().execute();

		if (!newPost) {
			throw new Error("Failed to create post");
		}

		return newPost;
	}
	async findLatest(): Promise<Post | null> {
		const post = await db.query.posts.findFirst({
			orderBy: desc(posts.id),
		});

		return post ?? null;
	}
}
