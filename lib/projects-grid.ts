export const STRAPI_URL = (process.env.NEXT_PUBLIC_STRAPI_URL ?? '').replace(/\/+$/, '');

type Any = any;
const attrs = <T>(e: Any): T => (e && e.attributes ? e.attributes : e);
const abs   = (u?: string) => !u ? '' : u.startsWith('http') ? u : `${STRAPI_URL}${u}`;
const media = (m: Any) => (m && m.data ? abs(attrs<any>(m.data)?.url) : '');
const tagList = (t: Any) => ((t?.data ?? []) as Any[]).map(x => attrs<any>(x)?.slug ?? '').filter(Boolean);

export type ProjectCard = { id: number; slug: string; title: string; cover: string; tags: string[] };

const mapProjectToCard = (p: Any): ProjectCard => {
  const a = attrs<any>(p);
  return {
    id: p?.id ?? a?.id ?? 0,
    slug: a?.slug ?? '',
    title: a?.title ?? a?.name ?? '',
    cover: media(a?.cover),
    tags: tagList(a?.tags),
  };
};

export async function getProjectsListGrid(): Promise<ProjectCard[]> {
  const state = process.env.NEXT_PUBLIC_STRAPI_PUBLICATION_STATE ? `&publicationState=${encodeURIComponent(process.env.NEXT_PUBLIC_STRAPI_PUBLICATION_STATE!)}` : '';
  const url = `${STRAPI_URL}/api/projects?populate[cover]=*&populate[tags]=*&pagination[pageSize]=50&sort[0]=publishedAt:desc${state}`;
  const r = await fetch(url, { cache: 'no-store' });
  if (!r.ok) throw new Error(`Strapi ${r.status}`);
  const j = await r.json();
  return (j?.data ?? []).map(mapProjectToCard);
}

