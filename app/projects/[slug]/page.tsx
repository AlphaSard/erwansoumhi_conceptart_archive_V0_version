export const revalidate = 60

import { notFound } from "next/navigation"
import { getAllProjectSlugs, getProjectBySlug } from "@/lib/strapi"

type Tag = { name: string }
type ProjectItem = {
	id: string | number
	slug: string
	title?: string
	excerpt?: string
	tags?: Tag[]
}

// ✅ Typage explicite ajouté pour éviter toute ambiguïté
export async function generateStaticParams(): Promise<{ slug: string }[]> {
	const slugs = await getAllProjectSlugs()
	return slugs.map((slug: string) => ({ slug }))
}

// ✅ Correction ici : plus de type Props séparé → typage inline direct
export default async function Page({ params }: { params: { slug: string } }) {
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
					Tags: {item.tags.map((t: Tag) => t.name).join(", ")}
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
// --- IGNORE ---
