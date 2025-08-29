import ProjectCard from "@/components/ProjectCard";
import type { ProjectCard as ProjectCardType } from "@/lib/projects-grid";

export default function ProjectGrid({ items }: { items: ProjectCardType[] }) {
  if (!items?.length) return <p>Aucun projet publié.</p>;
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((p) => <ProjectCard key={p.id} project={p} />)}
    </div>
  );
}
