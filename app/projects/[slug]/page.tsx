import { api } from "@/lib/strapi";
import { notFound } from "next/navigation";
export const revalidate = 60;

type StrapiList<T> = { data: { id: number; attributes: T }[] };
type Project = { title: string; slug: string; excerpt?: string };

export default async function Page({ params }: { params: { slug: string } }) {
	const data = await api<StrapiList<Project>>(
		`/api/projects?filters[slug][$eq]=${params.slug}&populate[tags]=true`,
	);
	const item = data?.data?.[0];
	if (!item) return notFound();
	const a = item.attributes;
	return (
		<main className="p-6">
			<h1 className="text-3xl mb-4">{a.title}</h1>
			{a.excerpt && <p className="opacity-80">{a.excerpt}</p>}
		</main>
	);
}
