import type { PostRepository } from "@repo/application/interfaces/repositories";
import type {
	CreatePostUseCase,
	GetLatestPostUseCase,
} from "@repo/application/interfaces/use-cases/posts";
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
	PostRepository: PostRepository;

	// Use Cases
	CreatePostUseCase: CreatePostUseCase;
	GetLatestPostUseCase: GetLatestPostUseCase;

	// Controllers
	CreatePostController: TCreatePostController;
	GetLatestPostController: TGetLatestPostController;
}
