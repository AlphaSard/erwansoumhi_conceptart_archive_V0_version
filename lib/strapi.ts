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

const baseUrl = process.env.NEXT_PUBLIC_STRAPI_URL ?? "http://localhost:1337"

if (!baseUrl || baseUrl === "undefined") {
	console.warn("⚠️ NEXT_PUBLIC_STRAPI_URL is missing. Using fallback localhost.")
}

// Helper safe fetch (évite que le build casse)
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
	} catch (e) {
		console.error("Fetch error:", e)
		return null
	} finally {
		clearTimeout(t)
	}
}

export async function getProjects(): Promise<ProjectItem[]> {
	const data = await safeJson<any>(`${baseUrl}/api/projects?populate=tags`, {
		next: { revalidate: 60 },
	})
	if (!data?.data) return []
	return data.data.map((item: any) => ({
		id: item.id,
		slug: item.attributes.slug,
		title: item.attributes.title,
		excerpt: item.attributes.excerpt,
		tags: item.attributes.tags?.data?.map((t: any) => ({
			id: t.id,
			name: t.attributes.name,
			slug: t.attributes.slug,
		})),
	}))
}

export async function getProjectBySlug(
	slug: string,
): Promise<ProjectItem | null> {
	const data = await safeJson<any>(
		`${baseUrl}/api/projects?filters[slug][$eq]=${encodeURIComponent(slug)}&populate=tags`,
		{ next: { revalidate: 60 } },
	)
	const item = data?.data?.[0]
	if (!item) return null
	return {
		id: item.id,
		slug: item.attributes.slug,
		title: item.attributes.title,
		excerpt: item.attributes.excerpt,
		tags: item.attributes.tags?.data?.map((t: any) => ({
			id: t.id,
			name: t.attributes.name,
			slug: t.attributes.slug,
		})),
	}
}

export async function getAllProjectSlugs(): Promise<string[]> {
	const data = await safeJson<any>(`${baseUrl}/api/projects`, {
		next: { revalidate: 300 },
	})
	if (!data?.data) return []
	return data.data.map((item: any) => item.attributes.slug)
}
