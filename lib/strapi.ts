// ==== Types exportés (⚠️ indispensables pour les imports "type ProjectItem") ====
export type Tag = {
	id: number | string
	name: string
	slug: string
}

export type ProjectItem = {
	id: string | number
	slug: string
	title?: string | null
	excerpt?: string | null
	tags?: Tag[]
}

// ==== Base URL Strapi ====
const baseUrl = process.env.NEXT_PUBLIC_STRAPI_URL ?? "http://localhost:1337"
if (!baseUrl || baseUrl === "undefined") {
	console.warn("⚠️ NEXT_PUBLIC_STRAPI_URL is missing. Using fallback localhost.")
}

// ==== Safe fetch (évite de casser le build) ====
async function safeJson<T = any>(
	url: string,
	init?: RequestInit,
	timeoutMs = 8000,
): Promise<T | null> {
	const ctrl = new AbortController()
	const t = setTimeout(() => ctrl.abort(), timeoutMs)
	try {
		const res = await fetch(url, { ...init, signal: ctrl.signal })
		if (!res.ok) return null
		return (await res.json()) as T
	} catch {
		return null
	} finally {
		clearTimeout(t)
	}
}

// ==== Mapping défensif ====
function mapProject(item: any): ProjectItem | null {
	const a = item?.attributes
	const slug = a?.slug
	if (!slug) return null
	return {
		id: item?.id ?? slug,
		slug,
		title: a?.title ?? null,
		excerpt: a?.excerpt ?? null,
		tags:
			a?.tags?.data
				?.map((t: any) => {
					const ta = t?.attributes
					if (!ta?.name || !ta?.slug) return null
					return { id: t.id ?? ta.slug, name: ta.name, slug: ta.slug }
				})
				?.filter(Boolean) ?? [],
	}
}

// ==== API ====
export async function getProjects(): Promise<ProjectItem[]> {
	const data = await safeJson<any>(`${baseUrl}/api/projects?populate=tags`, {
		next: { revalidate: 60 },
	})
	return (data?.data ?? []).map(mapProject).filter(Boolean) as ProjectItem[]
}

export async function getProjectBySlug(
	slug: string,
): Promise<ProjectItem | null> {
	const data = await safeJson<any>(
		`${baseUrl}/api/projects?filters[slug][$eq]=${encodeURIComponent(slug)}&populate=tags`,
		{ next: { revalidate: 60 } },
	)
	const item = (data?.data ?? []).map(mapProject).filter(Boolean)[0] ?? null
	return item
}

export async function getAllProjectSlugs(): Promise<string[]> {
	const data = await safeJson<any>(`${baseUrl}/api/projects`, {
		next: { revalidate: 300 },
	})
	return (data?.data ?? [])
		.map((it: any) => it?.attributes?.slug)
		.filter((s: any): s is string => typeof s === "string" && s.length > 0)
}
