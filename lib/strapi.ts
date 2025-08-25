// lib/strapi.ts
export async function getProjects() {
	const url = `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/projects?populate=tags`;
	const res = await fetch(url, { next: { revalidate: 60 } });
	if (!res.ok) throw new Error(`Strapi ${res.status}`);
	const json = await res.json();
	return Array.isArray(json?.data) ? json.data : [];
}

export async function getProjectBySlug(slug: string) {
	const url = `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/projects?filters[slug][$eq]=${encodeURIComponent(slug)}&populate=tags`;
	const res = await fetch(url, { next: { revalidate: 60 } });
	if (!res.ok) throw new Error(`Strapi ${res.status}`);
	const json = await res.json();
	return Array.isArray(json?.data) && json.data.length ? json.data[0] : null;
}

export async function getAllProjectSlugs() {
	const url = `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/projects?fields[0]=slug&pagination[pageSize]=100`;
	const res = await fetch(url, { next: { revalidate: 300 } });
	if (!res.ok) return [];
	const json = await res.json();
	return (json?.data ?? []).map((p: any) => p.slug).filter(Boolean);
}
// Note: we limit to 100 slugs for simplicity, but you might want to implement pagination if you have more projects.
