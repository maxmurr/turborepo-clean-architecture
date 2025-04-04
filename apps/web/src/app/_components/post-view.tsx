"use client";

import { formatDistanceToNow } from "date-fns";
import { ImageIcon, SmileIcon } from "lucide-react";
import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "~/components/ui/avatar";
import { Button } from "~/components/ui/button";
import { Input } from "~/components/ui/input";
import { Separator } from "~/components/ui/separator";

import { Card, CardContent, CardHeader } from "~/components/ui/card";
import { api } from "~/lib/trpc/react";

export function PostView() {
	const [content, setContent] = useState("");

	const [latestPost] = api.post.getLatest.useSuspenseQuery();

	const utils = api.useUtils();
	const createPost = api.post.create.useMutation({
		onSuccess: async () => {
			await utils.post.invalidate();
			setContent("");
		},
	});

	return (
		<div className="mx-auto w-full max-w-xl">
			<div className="sticky top-0 z-10 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
				<div className="flex h-14 items-center px-4">
					<h1 className="font-bold text-xl">Home</h1>
				</div>
				<Separator />
			</div>

			<div className="px-4">
				<div className="flex gap-4 py-4">
					<Avatar className="h-10 w-10">
						<AvatarImage src="https://github.com/maxmurr.png" alt="maxmurr" />
						<AvatarFallback>MM</AvatarFallback>
					</Avatar>

					<form
						className="flex-1"
						onSubmit={(e) => {
							e.preventDefault();
							createPost.mutate({ name: content });
						}}
					>
						<Input
							placeholder="What is happening?!"
							className="border-none bg-transparent px-0 text-xl focus-visible:ring-0"
							value={content}
							onChange={(e) => setContent(e.target.value)}
						/>
						<div className="mt-4 flex items-center justify-between">
							<div className="flex gap-2 text-primary">
								<Button
									variant="ghost"
									size="icon"
									className="h-9 w-9 rounded-full"
									type="button"
								>
									<ImageIcon className="h-5 w-5" />
								</Button>
								<Button
									variant="ghost"
									size="icon"
									className="h-9 w-9 rounded-full"
									type="button"
								>
									<SmileIcon className="h-5 w-5" />
								</Button>
							</div>
							<Button
								type="submit"
								disabled={createPost.isPending || !content.trim()}
								className="rounded-full px-6"
							>
								{createPost.isPending ? "Posting..." : "Post"}
							</Button>
						</div>
					</form>
				</div>

				<Separator />

				<div className="space-y-4 py-4">
					{latestPost ? (
						<Card className="border-none shadow-none ">
							<CardHeader className="flex flex-row items-start gap-4 space-y-0 pb-2">
								<Avatar className="h-10 w-10">
									<AvatarImage
										src="https://github.com/maxmurr.png"
										alt="maxmurr"
									/>
									<AvatarFallback>MM</AvatarFallback>
								</Avatar>
								<div className="min-w-0 flex-1 space-y-1">
									<div className="flex items-center gap-2">
										<span className="truncate font-semibold">Max Murray</span>
										<span className="flex-shrink-0 text-muted-foreground text-sm">
											·
										</span>
										<span className="flex-shrink-0 text-muted-foreground text-sm">
											{formatDistanceToNow(new Date(), { addSuffix: true })}
										</span>
									</div>
									<p className="break-words text-base leading-relaxed">
										{latestPost.name}
									</p>
								</div>
							</CardHeader>
							<CardContent className="pl-[3.5rem]">
								<div className="flex max-w-md items-center justify-between pt-2 text-muted-foreground">
									<Button
										variant="ghost"
										size="icon"
										className="h-8 w-8 rounded-full"
										type="button"
									>
										<svg
											className="h-5 w-5"
											viewBox="0 0 24 24"
											aria-hidden="true"
											fill="currentColor"
										>
											<g>
												<path d="M1.751 10c0-4.42 3.584-8 8.005-8h4.366c4.49 0 8.129 3.64 8.129 8.13 0 2.96-1.607 5.68-4.196 7.11l-8.054 4.46v-3.69h-.067c-4.49.1-8.183-3.51-8.183-8.01zm8.005-6c-3.317 0-6.005 2.69-6.005 6 0 3.37 2.77 6.08 6.138 6.01l.351-.01h1.761v2.3l5.087-2.81c1.951-1.08 3.163-3.13 3.163-5.36 0-3.39-2.744-6.13-6.129-6.13H9.756z" />
											</g>
										</svg>
									</Button>
									<Button
										variant="ghost"
										size="icon"
										className="h-8 w-8 rounded-full"
										type="button"
									>
										<svg
											className="h-5 w-5"
											viewBox="0 0 24 24"
											aria-hidden="true"
											fill="currentColor"
										>
											<g>
												<path d="M4.5 3.88l4.432 4.14-1.364 1.46L5.5 7.55V16c0 1.1.896 2 2 2H13v2H7.5c-2.209 0-4-1.79-4-4V7.55L1.432 9.48.068 8.02 4.5 3.88zM16.5 6H11V4h5.5c2.209 0 4 1.79 4 4v8.45l2.068-1.93 1.364 1.46-4.432 4.14-4.432-4.14 1.364-1.46 2.068 1.93V8c0-1.1-.896-2-2-2z" />
											</g>
										</svg>
									</Button>
									<Button
										variant="ghost"
										size="icon"
										className="h-8 w-8 rounded-full"
										type="button"
									>
										<svg
											className="h-5 w-5"
											viewBox="0 0 24 24"
											aria-hidden="true"
											fill="currentColor"
										>
											<g>
												<path d="M16.697 5.5c-1.222-.06-2.679.51-3.89 2.16l-.805 1.09-.806-1.09C9.984 6.01 8.526 5.44 7.304 5.5c-1.243.07-2.349.78-2.91 1.91-.552 1.12-.633 2.78.479 4.82 1.074 1.97 3.257 4.27 7.129 6.61 3.87-2.34 6.052-4.64 7.126-6.61 1.111-2.04 1.03-3.7.477-4.82-.561-1.13-1.666-1.84-2.908-1.91zm4.187 7.69c-1.351 2.48-4.001 5.12-8.379 7.67l-.503.3-.504-.3c-4.379-2.55-7.029-5.19-8.382-7.67-1.36-2.5-1.41-4.86-.514-6.67.887-1.79 2.647-2.91 4.601-3.01 1.651-.09 3.368.56 4.798 2.01 1.429-1.45 3.146-2.1 4.796-2.01 1.954.1 3.714 1.22 4.601 3.01.896 1.81.846 4.17-.514 6.67z" />
											</g>
										</svg>
									</Button>
									<Button
										variant="ghost"
										size="icon"
										className="h-8 w-8 rounded-full"
										type="button"
									>
										<svg
											className="h-5 w-5"
											viewBox="0 0 24 24"
											aria-hidden="true"
											fill="currentColor"
										>
											<g>
												<path d="M8.75 21V3h2v18h-2zM18 21V8.5h2V21h-2zM4 21l.004-10h2L6 21H4zm9.248 0v-7h2v7h-2z" />
											</g>
										</svg>
									</Button>
									<Button
										variant="ghost"
										size="icon"
										className="h-8 w-8 rounded-full"
										type="button"
									>
										<svg
											className="h-5 w-5"
											viewBox="0 0 24 24"
											aria-hidden="true"
											fill="currentColor"
										>
											<g>
												<path d="M12 2.59l5.7 5.7-1.41 1.42L13 6.41V16h-2V6.41l-3.3 3.3-1.41-1.42L12 2.59zM21 15l-.02 3.51c0 1.38-1.12 2.49-2.5 2.49H5.5C4.11 21 3 19.88 3 18.5V15h2v3.5c0 .28.22.5.5.5h12.98c.28 0 .5-.22.5-.5L19 15h2z" />
											</g>
										</svg>
									</Button>
								</div>
							</CardContent>
						</Card>
					) : (
						<Card className="border-none shadow-none">
							<CardContent className="py-8 text-center text-muted-foreground">
								No posts yet. Start the conversation!
							</CardContent>
						</Card>
					)}
				</div>
			</div>
		</div>
	);
}
