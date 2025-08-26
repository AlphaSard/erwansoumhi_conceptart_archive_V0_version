// … tes types Tag / ProjectItem et baseUrl identiques

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

// --- LISTE ---
export async function getProjects(): Promise<ProjectItem[]> {
	const data = await safeJson<any>(`${baseUrl}/api/projects?populate=tags`, {
		next: { revalidate: 60 },
	})
	return (data?.data ?? []).map(mapProject).filter(Boolean) as ProjectItem[]
}

// --- DETAIL ---
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

// --- SLUGS ---
export async function getAllProjectSlugs(): Promise<string[]> {
	const data = await safeJson<any>(`${baseUrl}/api/projects`, {
		next: { revalidate: 300 },
	})
	return (data?.data ?? [])
		.map((it: any) => it?.attributes?.slug)
		.filter((s: any): s is string => typeof s === "string" && s.length > 0)
}
