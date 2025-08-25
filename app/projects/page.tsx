export const revalidate = 60;

import { getProjects } from "@/lib/strapi";
import Link from "next/link";

export default async function Page() {
	const items = await getProjects();
	return (
		<main className="max-w-3xl mx-auto p-6 space-y-6">
			<h1 className="text-2xl font-semibold">Projects</h1>
			<div className="text-sm opacity-70">items.length = {items.length}</div>
			{items.length === 0 ? (
				<p>Aucun projet.</p>
			) : (
				<ul className="space-y-4">
					{items.map((p: any) => (
						<li key={p.id} className="border rounded-xl p-4">
							<Link
								href={`/projects/${p.slug}`}
								className="text-lg font-medium underline"
							>
								{p.title ?? p.slug}
							</Link>
						</li>
					))}
				</ul>
			)}
		</main>
	);
}
