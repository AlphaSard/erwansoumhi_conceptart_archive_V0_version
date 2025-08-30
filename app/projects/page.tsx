import { getProjectsListGrid } from "@/lib/projects-grid";
import ProjectGrid from "@/components/ProjectGrid";

export const revalidate = 60;

export default async function Page() {
  try {
    const items = await getProjectsListGrid();
    return (
      <section className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-semibold mb-6">Projets</h1>
        {items?.length ? <ProjectGrid items={items} /> : <p>Aucun projet publié.</p>}
      </section>
    );
  } catch {
    return (
      <section className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-semibold mb-6">Projets</h1>
        <p>Erreur de chargement des projets.</p>
      </section>
    );
  }
}
