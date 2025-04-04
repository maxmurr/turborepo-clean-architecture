
import { getInjection } from "@repo/di/container";
import {
	createPostController,
	getLatestPostController,
} from "@repo/interface-adapters/controllers/posts";

import { createPostSchema } from "@repo/entities/models";
import { createTRPCRouter, publicProcedure } from "../trpc";

const createPostUseCase = getInjection("CreatePostUseCase");
const getLatestPostUseCase = getInjection("GetLatestPostUseCase");

export const postRouter = createTRPCRouter({
	create: publicProcedure
		.input(createPostSchema)
		.mutation(async ({ input }) => {
			return createPostController(createPostUseCase)(input);
		}),
	getLatest: publicProcedure.query(async () => {
		return getLatestPostController(getLatestPostUseCase)();
	}),
});
