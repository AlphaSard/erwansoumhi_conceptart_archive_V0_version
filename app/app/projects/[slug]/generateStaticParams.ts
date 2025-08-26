import { getAllProjectSlugs } from "@/lib/strapi"

export async function generateStaticParams(): Promise<{ slug: string }[]> {
	const slugs = await getAllProjectSlugs()
	return slugs.map((slug) => ({ slug }))
}
