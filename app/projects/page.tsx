import { getProjects, type ProjectItem } from "@/lib/strapi"

export const revalidate = 60
// export const dynamic = "force-dynamic" // (option si API instable en Preview)

export default async function Page() {
	const items: ProjectItem[] = (await getProjects()).filter(Boolean)

	return (
		<main className="mx-auto max-w-3xl p-6 space-y-6">
			<h1 className="text-2xl font-semibold">Projects</h1>
			{items.length === 0 ? (
				<p className="text-sm opacity-70">Aucun projet disponible.</p>
			) : (
				<ul className="space-y-2">
					{items.map((item) => (
						<li key={item.slug}>
							<h2 className="text-lg font-medium">{item.title ?? item.slug}</h2>
							<p className="text-sm opacity-70">
								slug: {item.slug} | id: {item.id}
							</p>
						</li>
					))}
				</ul>
			)}
		</main>
	)
}
