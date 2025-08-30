import Image from "next/image";
import Link from "next/link";
import type { ProjectCard as ProjectCardType } from "@/lib/projects-grid";
import { media } from "@/lib/projects-grid";

export default function ProjectCard({ project }: { project: ProjectCardType }) {
  const cover = (project as any)?.cover;
  const rawUrl =
    typeof cover === 'string'
      ? cover
      : cover?.url
        ?? cover?.data?.attributes?.url
        ?? cover?.formats?.large?.url
        ?? cover?.formats?.medium?.url
        ?? cover?.formats?.small?.url
        ?? cover?.formats?.thumbnail?.url;

  const img = media(rawUrl);
  const w =
    (typeof cover === 'object' && (cover?.width ?? cover?.data?.attributes?.width))
    ?? 1600;
  const h =
    (typeof cover === 'object' && (cover?.height ?? cover?.data?.attributes?.height))
    ?? 900;
  const alt =
    (typeof cover === 'object' && (cover?.alternativeText ?? cover?.data?.attributes?.alternativeText))
    ?? project.title;
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
              alt={alt}
              width={w}
              height={h}
              sizes='(min-width:1024px) 33vw, 100vw'
              className='w-full h-auto rounded-2xl object-cover'
            />
            <span data-test-cover-src={img} className='sr-only'>{img}</span>
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
          <div className='w-full aspect-[16/9] rounded-2xl bg-gray-200' aria-label='no cover' />
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
