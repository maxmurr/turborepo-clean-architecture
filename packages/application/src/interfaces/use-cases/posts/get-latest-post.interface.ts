import type { Post } from "@repo/entities/models";
export interface GetLatestPostUseCase {
	execute(): Promise<Post | null>;
}
    