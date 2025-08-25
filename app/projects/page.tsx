import { api } from "@/lib/strapi";

export const dynamic = "force-dynamic"; // évite la SSG qui casse au build
export default async function Page() {
	const data = await api<{ data: any[] }>(
		"/api/projects?pagination[pageSize]=24",
	);
	const items = data?.data ?? [];
	return (
		<main className="p-6 grid gap-4">
			{items.map((p) => (
				<div key={p.id}>{p.attributes?.title}</div>
			))}
		</main>
	);
}
