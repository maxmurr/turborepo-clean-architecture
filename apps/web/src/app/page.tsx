import { HydrateClient, api } from "~/lib/trpc/server";
import { PostView } from "./_components/post-view";

export const dynamic = "force-dynamic";

export default async function Home() {
	void api.post.getLatest.prefetch();

	return (
		<HydrateClient>
			<main className="flex min-h-screen flex-col items-center justify-center gap-8 p-4">
				<PostView />
			</main>
		</HydrateClient>
	);
}
