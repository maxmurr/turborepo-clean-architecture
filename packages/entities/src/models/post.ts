import { z } from "zod";

export const postSchema = z.object({
	id: z.number(),
	name: z.string(),
});

export type Post = z.infer<typeof postSchema>;

export const createPostSchema = z.object({
	name: z.string().trim().min(1),
});

export type CreatePost = z.infer<typeof createPostSchema>;