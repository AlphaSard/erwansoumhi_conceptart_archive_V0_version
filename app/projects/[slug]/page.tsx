export const revalidate = 60;

import { getAllProjectSlugs, getProjectBySlug } from "@/lib/strapi";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
	const slugs = await getAllProjectSlugs();
	return slugs.map((slug: string) => ({ slug }));
}

export default async function Page({ params }: { params: { slug: string } }) {
	const item = await getProjectBySlug(params.slug);
	if (!item) notFound();

	return (
		<main className="max-w-3xl mx-auto p-6 space-y-4">
			<h1 className="text-3xl font-semibold">{item.title ?? item.slug}</h1>

			<div className="text-sm opacity-70">
				slug = {item.slug} · id = {item.id}
			</div>

			{item.tags?.length ? (
				<div className="text-sm">
					Tags: {item.tags.map((t: any) => t.name).join(", ")}
				</div>
			) : null}

			{item.excerpt ? (
				<p className="mt-4 leading-relaxed">{item.excerpt}</p>
			) : (
				<p className="mt-4">Pas d’excerpt.</p>
			)}
		</main>
	);
}
