import ProjectCard from "@/components/ProjectCard";
import type { Project } from "@/lib/types";

export default function ProjectGrid({ items }: { items: Project[] }) {
  if (!items?.length) return <p>Aucun projet publié.</p>;
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((p) => <ProjectCard key={p.slug} project={p} />)}
    </div>
  );
}
