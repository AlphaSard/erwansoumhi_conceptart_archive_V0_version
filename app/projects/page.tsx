// app/projects/page.tsx
export const revalidate = 60;

type Project = { id: number; title: string; slug: string };

async function getProjects(): Promise<Project[]> {
	const base = process.env.STRAPI_URL!;
	const token = process.env.STRAPI_TOKEN!;
	const url = `${base}/api/projects?pagination[pageSize]=10&populate[tags]=true`;

	const res = await fetch(url, {
		headers: { Authorization: `Bearer ${token}` },
		next: { tags: ["projects"] },
	});
	if (!res.ok) throw new Error(`Strapi ${res.status}`);

	const json = await res.json();
	return json.data as Project[];
}

export default async function Page() {
	const projects = await getProjects();

	return (
		<main style={{ padding: 16 }}>
			<h1>Projects</h1>

			<ul>
				{projects.map((p) => (
					<li key={p.id}>
						<a href={`/projects/${p.slug}`}>{p.title}</a>
					</li>
				))}
			</ul>
		</main>
	);
}
