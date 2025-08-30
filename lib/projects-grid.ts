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
  const state = process.env.NEXT_PUBLIC_STRAPI_PUBLICATION_STATE
    ? `&publicationState=${encodeURIComponent(process.env.NEXT_PUBLIC_STRAPI_PUBLICATION_STATE!)}`
    : '';
  const tryUrl = async (u: string) => {
    const r = await fetch(u, { cache: 'no-store' });
    if (!r.ok) throw new Error(`Strapi ${r.status}`);
    const j = await r.json();
    return (j?.data ?? []).map(mapProjectToCard);
  };
  // Essaye plusieurs variantes Strapi v5 (populate/sort), avec replis sur 400
  const bases = [
    `${STRAPI_URL}/api/projects?populate=tags&pagination[pageSize]=50${state}`,
    `${STRAPI_URL}/api/projects?pagination[pageSize]=50${state}`,
  ];
  const urls: string[] = [];
  for (const b of bases) {
    urls.push(`${b}&sort=createdAt:desc`);
    urls.push(b);
  }
  let lastErr: any = null;
  for (const u of urls) {
    try {
      return await tryUrl(u);
    } catch (e: any) {
      lastErr = e;
      if (!String(e).includes('Strapi 400')) throw e;
    }
  }
  throw lastErr ?? new Error('Strapi request failed');
}
