export const STRAPI_URL = (process.env.NEXT_PUBLIC_STRAPI_URL ?? '').replace(/\/+$/, '');

type Any = any;
const attrs = <T>(e: Any): T => (e && e.attributes ? e.attributes : e);
const abs   = (u?: string) => !u ? '' : u.startsWith('http') ? u : `${STRAPI_URL}${u}`;
const media = (m: Any) => {
  const d = m?.data;
  if (Array.isArray(d)) return d.length ? abs(attrs<any>(d[0])?.url) : '';
  return d ? abs(attrs<any>(d)?.url) : '';
};
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
  const state = process.env.NEXT_PUBLIC_STRAPI_PUBLICATION_STATE
    ? `&publicationState=${encodeURIComponent(process.env.NEXT_PUBLIC_STRAPI_PUBLICATION_STATE!)}`
    : '';
  const base = `${STRAPI_URL}/api/projects?populate[cover]=*&populate[tags]=*&pagination[pageSize]=50${state}`;
  const withSort = `${base}&sort=createdAt:desc`;
  const fetchMap = async (u: string) => {
    const r = await fetch(u, { cache: 'no-store' });
    if (!r.ok) throw new Error(`Strapi ${r.status}`);
    const j = await r.json();
    return (j?.data ?? []).map(mapProjectToCard);
  };
  try { return await fetchMap(withSort); }
  catch (e: any) { if (String(e).includes('Strapi 400')) return await fetchMap(base); throw e; }
}

export function gridQuery(pageSize = 50) {
  const state = process.env.NEXT_PUBLIC_STRAPI_PUBLICATION_STATE
    ? `&publicationState=${encodeURIComponent(process.env.NEXT_PUBLIC_STRAPI_PUBLICATION_STATE!)}`
    : '';
  const base = `${STRAPI_URL}/api/projects?populate[cover]=*&populate[tags]=*&pagination[pageSize]=${pageSize}${state}`;
  return {
    withSort: `${base}&sort=createdAt:desc`,
    withoutSort: base,
  };
}
