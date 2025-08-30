export const STRAPI_URL = (process.env.NEXT_PUBLIC_STRAPI_URL ?? '').replace(/\/+$/, '');

type Any = any;
const attrs = <T>(e: Any): T => (e && e.attributes ? e.attributes : e);
const abs   = (u?: string) => !u ? '' : u.startsWith('http') ? u : `${STRAPI_URL}${u}`;
const media = (m:any) => { const d=m?.data; if (Array.isArray(d)) return d.length? abs(attrs<any>(d[0])?.url):""; return d? abs(attrs<any>(d)?.url):""; };
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

function qsState() {
  return process.env.NEXT_PUBLIC_STRAPI_PUBLICATION_STATE
    ? `&publicationState=${encodeURIComponent(process.env.NEXT_PUBLIC_STRAPI_PUBLICATION_STATE!)}`
    : "";
}

function projectsUrl({ size=50, populate=true, sort=true }:{size?:number;populate?:boolean;sort?:boolean}) {
  const u = new URL("/api/projects", STRAPI_URL);
  u.searchParams.set("pagination[pageSize]", String(size));
  if (populate) {
    u.searchParams.set("populate[cover]", "*");
    u.searchParams.set("populate[tags]", "*");
  }
  if (sort) u.searchParams.append("sort[0]", "createdAt:desc");
  return u.toString() + qsState();
}

async function fetchMap(url: string) {
  const r = await fetch(url, { cache: 'no-store', headers: { Accept: 'application/json' } });
  if (!r.ok) {
    let body = '';
    try { body = await r.text(); } catch {}
    const msg = `Strapi ${r.status} @ ${url}${body ? ` — ${body.slice(0,200)}` : ''}`;
    throw new Error(msg);
  }
  const j = await r.json();
  return (j?.data ?? []).map(mapProjectToCard);
}

export async function getProjectsListGrid(): Promise<ProjectCard[]> {
  const candidates = [
    projectsUrl({ size:50, populate:true,  sort:true  }),
    projectsUrl({ size:50, populate:true,  sort:false }),
    projectsUrl({ size:50, populate:false, sort:true  }),
    projectsUrl({ size:50, populate:false, sort:false }),
  ];
  let err:any;
  for (const u of candidates){ try { return await fetchMap(u); } catch(e:any){ err=e; if(!String(e).includes("Strapi 400")) throw e; } }
  throw err ?? new Error("Strapi unknown error");
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
