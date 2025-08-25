// lib/strapi.ts

export type Tag = {
	id: number;
	name: string;
	slug: string;
	documentId?: string;
};

export type Project = {
	id: number;
	title: string;
	slug: string;
	excerpt?: string;
	tags?: Tag[];
	cover?: { url: string; alternativeText?: string };
	documentId?: string;
};

const BASE = process.env.NEXT_PUBLIC_STRAPI_URL;
if (!BASE) throw new Error("NEXT_PUBLIC_STRAPI_URL manquant");

function authHeaders(): HeadersInit {
	const t = process.env.STRAPI_TOKEN;
	return t ? { Authorization: `Bearer ${t}` } : {};
}

export async function getProjects(): Promise<Project[]> {
	const url = `${BASE}/api/projects?populate[tags]=true&populate[cover]=true&sort=publishedAt:desc`;
	const res = await fetch(url, { headers: authHeaders(), cache: "no-store" });
	if (!res.ok) throw new Error(`Strapi fetch failed: ${res.status}`);
	const json = await res.json();
	return json.data as Project[];
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
	const url = `${BASE}/api/projects?filters[slug][$eq]=${encodeURIComponent(slug)}&populate=*`;
	const res = await fetch(url, { headers: authHeaders(), cache: "no-store" });
	if (!res.ok) throw new Error(`Strapi fetch failed: ${res.status}`);
	const json = await res.json();
	return (json.data?.[0] as Project) ?? null;
}

/** Construit une URL absolue pour les médias Strapi */
export function mediaUrl(path?: string) {
	if (!path) return "";
	return path.startsWith("http") ? path : `${BASE}${path}`;
}
