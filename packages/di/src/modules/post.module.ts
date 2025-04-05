import { createModule } from "@evyweb/ioctopus";

import { DI_SYMBOLS } from "../types";

import {
	MockPostRepositoryImpl,
	PostRepositoryImpl,
} from "@repo/infrastructure/repositories";

import {
	createPostUseCase,
	getLatestPostUseCase,
} from "@repo/application/use-cases/posts";
import {
	createPostController,
	getLatestPostController,
} from "@repo/interface-adapters/controllers/posts";

export function createPostsModule() {
	const postsModule = createModule();

	if (process.env["NODE_ENV"] === "test") {
		postsModule.bind(DI_SYMBOLS.PostRepository).toClass(MockPostRepositoryImpl);
	} else {
		postsModule.bind(DI_SYMBOLS.PostRepository).toClass(PostRepositoryImpl);
	}

	postsModule
		.bind(DI_SYMBOLS.CreatePostUseCase)
		.toHigherOrderFunction(createPostUseCase, [DI_SYMBOLS.PostRepository]);

	postsModule
		.bind(DI_SYMBOLS.GetLatestPostUseCase)
		.toHigherOrderFunction(getLatestPostUseCase, [DI_SYMBOLS.PostRepository]);

	postsModule
		.bind(DI_SYMBOLS.CreatePostController)
		.toHigherOrderFunction(createPostController, [
			DI_SYMBOLS.CreatePostUseCase,
		]);

	postsModule
		.bind(DI_SYMBOLS.GetLatestPostController)
		.toHigherOrderFunction(getLatestPostController, [
			DI_SYMBOLS.GetLatestPostUseCase,
		]);

	return postsModule;
}
