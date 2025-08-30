import ProjectCard from "@/components/ProjectCard";
import type { Project } from "@/lib/types";
import Link from "next/link";

export default function ProjectGrid({ items, meta }: { items: Project[]; meta: { page: number; pageSize: number; pageCount: number; total: number; tag: string | null } }) {
  const { page, pageSize, pageCount, tag } = meta
  if (!items?.length) return <p>Aucun projet publié.</p>

  // Build tag chips from current items
  const tagSet = new Set<string>()
  for (const it of items) (it.tags || []).forEach((t) => tagSet.add(t))
  const tags = Array.from(tagSet)

  const qs = (nextPage: number, t: string | null) => {
    const u = new URL('/projects', 'http://localhost')
    u.searchParams.set('page', String(nextPage))
    u.searchParams.set('pageSize', String(pageSize))
    if (t) u.searchParams.set('tag', t)
    return u.search
  }

  return (
    <div className="space-y-6">
      {tags.length > 0 && (
        <div className="flex flex-wrap gap-2">
          <Link href={`/projects${qs(1, null)}`} className={`px-3 py-1 rounded-full border ${!tag ? 'bg-black text-white' : ''}`}>Tous</Link>
          {tags.map((t) => (
            <Link key={t} href={`/projects${qs(1, t)}`} className={`px-3 py-1 rounded-full border ${tag === t ? 'bg-black text-white' : ''}`}>{t}</Link>
          ))}
        </div>
      )}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {items.map((p) => <ProjectCard key={p.slug} project={p} />)}
      </div>
      <div className="flex items-center justify-between">
        <Link aria-disabled={page <= 1} className={`px-3 py-2 rounded border ${page <= 1 ? 'opacity-50 pointer-events-none' : ''}`} href={`/projects${qs(page - 1, tag)}`}>Précédent</Link>
        <span className="text-sm opacity-70">Page {page} / {Math.max(1, pageCount)}</span>
        <Link aria-disabled={page >= pageCount} className={`px-3 py-2 rounded border ${page >= pageCount ? 'opacity-50 pointer-events-none' : ''}`} href={`/projects${qs(page + 1, tag)}`}>Suivant</Link>
      </div>
    </div>
  )
}
