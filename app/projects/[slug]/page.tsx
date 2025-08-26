export const revalidate = 60

import { getProjectBySlug, type ProjectItem } from "@/lib/strapi" // ← assure-toi que "type ProjectItem" est bien importé
import { notFound } from "next/navigation"

export default async function Page({ params }: any) {
	const { slug } = params
	const item: ProjectItem | null = await getProjectBySlug(slug)
	if (!item) notFound()

	return (
		<main className="mx-auto max-w-3xl p-6 space-y-4">
			<h1 className="text-3xl font-semibold">{item.title ?? item.slug}</h1>
			<div className="text-sm opacity-70">
				slug = {item.slug} · id = {item.id}
			</div>
			{item.tags?.length ? (
				<div className="text-sm">
					Tags: {item.tags.map((t) => t.name).join(", ")}
				</div>
			) : null}
			{item.excerpt ? (
				<p className="mt-4 leading-relaxed">{item.excerpt}</p>
			) : (
				<p className="mt-4">Pas d’excerpt.</p>
			)}
		</main>
	)
}
