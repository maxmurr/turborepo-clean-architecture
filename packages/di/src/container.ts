import { createContainer } from "@evyweb/ioctopus";

import { type DI_RETURN_TYPES, DI_SYMBOLS } from "./types";

import { createPostsModule } from "./modules/post.module";

const ApplicationContainer = createContainer();

ApplicationContainer.load(Symbol("PostModule"), createPostsModule());

export function getInjection<K extends keyof DI_RETURN_TYPES>(
	symbol: K,
): DI_RETURN_TYPES[K] {
	return ApplicationContainer.get(DI_SYMBOLS[symbol]);
}
