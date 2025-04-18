import type { IPostRepository } from "@repo/application/repositories";
import type { Post } from "@repo/entities/models";

export class MockPostRepositoryImpl implements IPostRepository {
	private _posts: Post[];

	constructor() {
		this._posts = [];
	}

	async create(post: Post): Promise<Post> {
		const newPost: Post = {
			id: this._posts.length + 1,
			name: post.name,
		};
		this._posts.push(newPost);
		return newPost;
	}

	async findLatest(): Promise<Post | null> {
		return this._posts.at(-1) ?? null;
	}
}
