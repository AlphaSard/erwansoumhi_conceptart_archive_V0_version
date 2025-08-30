import { media, normalizeCover } from '@/lib/normalize'
import type { Project } from '@/lib/types'

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  const base = process.env.NEXT_PUBLIC_STRAPI_URL!
  const u = new URL('/api/projects', base)
  u.searchParams.set('filters[slug][$eq]', slug)
  u.searchParams.set('populate', 'cover,tags,blocks')
  u.searchParams.set('pagination[pageSize]', '1')
  const r = await fetch(u.toString(), { next: { revalidate: 60 } })
  if (!r.ok) return null
  const j = await r.json()
  const item = j.data?.[0]
  if (!item) return null
  const a = item.attributes ?? item
  return {
    title: a.title,
    slug: a.slug,
    cover: normalizeCover(a.cover),
    tags: (a.tags?.map?.((t: any) => t.name || t.attributes?.name) || []),
  } as Project
}

