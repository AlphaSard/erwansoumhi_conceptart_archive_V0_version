import { getProjectsListGridPaged } from "@/lib/projects-grid";
import ProjectGrid from "@/components/ProjectGrid";

export const revalidate = 60;

export async function generateMetadata({ searchParams }: any) {
  const tag = searchParams?.tag ? String(searchParams.tag) : null
  return { title: tag ? `Projects – ${tag}` : 'Projects' }
}

export default async function Page({ searchParams }: any) {
  try {
    const { items, meta } = await getProjectsListGridPaged({
      page: searchParams?.page,
      pageSize: searchParams?.pageSize,
      tag: searchParams?.tag ? String(searchParams.tag) : null,
    })
    return (
      <section className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-semibold mb-6">Projets</h1>
        <ProjectGrid items={items} meta={meta} />
      </section>
    )
  } catch {
    return (
      <section className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-semibold mb-6">Projets</h1>
        <p>Erreur de chargement des projets.</p>
      </section>
    )
  }
}
