import Image from "next/image";
import Link from "next/link";
import type { ProjectCard as ProjectCardType } from "@/lib/projects-grid";
import { media } from "@/lib/projects-grid";

export default function ProjectCard({ project }: { project: ProjectCardType }) {
  const img = media((project as any)?.cover?.url ?? (project as any)?.cover);
  // Server-side debug log
  // eslint-disable-next-line no-console
  console.log("[ProjectCard server] img:", img, "slug:", project.slug);
  return (
    <article className="rounded-2xl overflow-hidden border">
      <Link href={`/projects/${project.slug}`} className="block">
        {img ? (
          <>
            <Image
              src={img}
              alt={project.title || "Projet"}
              width={1200}
              height={800}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="aspect-video object-cover"
              unoptimized
            />
            {/* Client-side debug log */}
            <script
              // biome-ignore lint/security/noDangerouslySetInnerHtml: debug-only inline log
              dangerouslySetInnerHTML={{
                __html: `console.log('[ProjectCard client] img:', ${JSON.stringify(img)}, 'slug:', ${JSON.stringify(
                  project.slug,
                )});`,
              }}
            />
          </>
        ) : (
          <div className="aspect-video bg-neutral-200" aria-hidden="true" />
        )}
        <div className="p-3">
          <h3 className="text-base font-medium line-clamp-2">{project.title}</h3>
          {project.tags?.length ? (
            <p className="mt-1 text-xs opacity-70">{project.tags.join(" · ")}</p>
          ) : null}
        </div>
      </Link>
    </article>
  );
}
