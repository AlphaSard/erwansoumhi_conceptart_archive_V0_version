export const revalidate = 60

import Link from "next/link"
import { getProjects } from "@/lib/strapi"

type ProjectItem = {
	id: string | number
	slug: string
	title?: string
}

export default async function Page() {
	const items: ProjectItem[] = await getProjects()
	return (
		<main className="mx-auto max-w-3xl p-6 space-y-6">
			<h1 className="text-2xl font-semibold">Projects</h1>
			<div className="text-sm opacity-70">items.length = {items.length}</div>

			{items.length === 0 ? (
				<p>Aucun projet.</p>
			) : (
				<ul className="space-y-4">
					{items.map((p: ProjectItem) => (
						<li key={p.id} className="rounded-xl border p-4">
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
	)
}
