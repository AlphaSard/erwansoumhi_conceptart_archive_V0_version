import { api } from "@/lib/strapi";
export const revalidate = 60;

type StrapiList<T> = { data: { id: number; attributes: T }[] };
type Project = { title: string; slug: string; excerpt?: string };

export default async function Page() {
	const data = await api<StrapiList<Project>>(
		"/api/projects?pagination[pageSize]=24&populate[tags]=true",
	);
	const items = data?.data ?? [];
	return (
		<main className="p-6 grid gap-4 md:grid-cols-2">
			{items.map((p) => (
				<a
					key={p.id}
					href={`/projects/${p.attributes.slug}`}
					className="block border p-4 rounded-xl"
				>
					<h2 className="text-xl">{p.attributes.title}</h2>
					{p.attributes.excerpt && (
						<p className="opacity-75">{p.attributes.excerpt}</p>
					)}
				</a>
			))}
		</main>
	);
}
