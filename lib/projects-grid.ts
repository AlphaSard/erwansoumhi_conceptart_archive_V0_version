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
  const state = process.env.NEXT_PUBLIC_STRAPI_PUBLICATION_STATE ? `&publicationState=${encodeURIComponent(process.env.NEXT_PUBLIC_STRAPI_PUBLICATION_STATE!)}` : '';
  const tryUrl = async (u: string) => {
    const r = await fetch(u, { cache: 'no-store' });
    if (!r.ok) throw new Error(`Strapi ${r.status}`);
    const j = await r.json();
    return (j?.data ?? []).map(mapProjectToCard);
  };
  // Séquence: populate cover+tags + tri createdAt. Replis si 400.
  try {
    const u1 = `${STRAPI_URL}/api/projects?populate[cover]=*&populate[tags]=*&pagination[pageSize]=50&sort=createdAt:desc${state}`;
    return await tryUrl(u1);
  } catch (e: any) {
    if (String(e).includes('Strapi 400')) {
      // Repli 1: populate=*
      try { return await tryUrl(`${STRAPI_URL}/api/projects?populate=*&pagination[pageSize]=50&sort=createdAt:desc${state}`); } catch {}
      // Repli 2: sans tri
      try { return await tryUrl(`${STRAPI_URL}/api/projects?populate[cover]=*&populate[tags]=*&pagination[pageSize]=50${state}`); } catch {}
      // Repli 3: minimal
      return await tryUrl(`${STRAPI_URL}/api/projects?pagination[pageSize]=50${state}`);
    }
    throw e;
  }
}
