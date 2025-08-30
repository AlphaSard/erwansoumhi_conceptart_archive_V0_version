import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/lib/types";

export default function ProjectCard({ project }: { project: Project }) {
  const cover = project.cover;
  const img = cover?.url ?? '';
  const w = cover?.width ?? 1600;
  const h = cover?.height ?? 900;
  const alt = cover?.alt ?? project.title;
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
