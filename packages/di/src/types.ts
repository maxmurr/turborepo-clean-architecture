import type { IPostRepository } from "@repo/application/repositories";
import type {
	TCreatePostUseCase,
	TGetLatestPostUseCase,
} from "@repo/application/use-cases/posts";
import type {
	TCreatePostController,
	TGetLatestPostController,
} from "@repo/interface-adapters/controllers/posts";

export const DI_SYMBOLS = {
	// Services

	// Repositories
	PostRepository: Symbol.for("PostRepository"),

	// Use Cases
	CreatePostUseCase: Symbol.for("CreatePostUseCase"),
	GetLatestPostUseCase: Symbol.for("GetLatestPostUseCase"),

	// Controllers
	CreatePostController: Symbol.for("CreatePostController"),
	GetLatestPostController: Symbol.for("GetLatestPostController"),
} as const;

export interface DI_RETURN_TYPES {
		// Services

		// Repositories
		PostRepository: IPostRepository;

		// Use Cases
		CreatePostUseCase: TCreatePostUseCase;
		GetLatestPostUseCase: TGetLatestPostUseCase;

		// Controllers
		CreatePostController: TCreatePostController;
		GetLatestPostController: TGetLatestPostController;
	}
