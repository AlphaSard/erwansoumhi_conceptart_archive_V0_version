// lib/strapi.ts
type Tag = { name?: string | null }
export type ProjectItem = {
	id: number | string
	slug: string
	title?: string | null
	excerpt?: string | null
	tags?: Tag[] | null
}

type StrapiList<T> = { data?: T[] }
type StrapiSingle<T> = { data?: T | null }

export async function getProjects(): Promise<ProjectItem[]> {
	const url = `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/projects?populate=tags`
	const res = await fetch(url, { next: { revalidate: 60 } })
	if (!res.ok) throw new Error(`Strapi ${res.status}`)
	const json = (await res.json()) as StrapiList<ProjectItem>
	return Array.isArray(json.data) ? json.data : []
}

export async function getProjectBySlug(
	slug: string,
): Promise<ProjectItem | null> {
	const url = `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/projects?filters[slug][$eq]=${encodeURIComponent(slug)}&populate=tags`
	const res = await fetch(url, { next: { revalidate: 60 } })
	if (!res.ok) throw new Error(`Strapi ${res.status}`)
	const json = (await res.json()) as StrapiList<ProjectItem>
	return Array.isArray(json.data) && json.data.length ? json.data[0] : null
}

export async function getAllProjectSlugs(): Promise<string[]> {
	const url = `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/projects?fields[0]=slug&pagination[pageSize]=100`
	const res = await fetch(url, { next: { revalidate: 300 } })
	if (!res.ok) return []
	const json = (await res.json()) as StrapiList<{ slug?: string | null }>
	return (json.data ?? []).map((p) => p.slug).filter(Boolean) as string[]
}
