export const STRAPI_URL = (process.env.NEXT_PUBLIC_STRAPI_URL ?? '').replace(/\/+$/, '')
import type { Project } from '@/lib/types'
import { normalizeCover } from '@/lib/normalize'

type Any = any
const attrs = <T>(e: Any): T => (e && e.attributes ? e.attributes : e)
const tagList = (t: Any) => {
  const arr = Array.isArray(t) ? t : ((t?.data ?? []) as Any[])
  return arr.map((x: any) => x?.slug ?? x?.attributes?.slug ?? x?.name ?? '').filter(Boolean)
}

function projectsUrlTrue(opts:{size?:number; keys?:string[]; sort?:boolean} = {}) {
  const { size=50, keys=['cover','tags'], sort=true } = opts;
  const u = new URL("/api/projects", STRAPI_URL);
  u.searchParams.set("pagination[pageSize]", String(size));
  for (const k of keys) u.searchParams.set(`populate[${k}]`, "true");
  if (sort) u.searchParams.append("sort[0]", "createdAt:desc");
  return u.toString() + qsState();
}

function projectsUrlAll(size=50, sort=true) {
  const u = new URL("/api/projects", STRAPI_URL);
  u.searchParams.set("pagination[pageSize]", String(size));
  u.searchParams.set("populate", "*");
  if (sort) u.searchParams.append("sort[0]", "createdAt:desc");
  return u.toString() + qsState();
}

const pickTags = (a:any) => {
  const candidates = [a?.tags, a?.tag, a?.categories];
  for (const t of candidates) {
    const list = tagList(t);
    if (list.length) return list;
  }
  return [] as string[];
};

const mapProject = (p: Any): Project | null => {
  const a = (p?.attributes ?? p) || {}
  const slug = a?.slug ?? ''
  const title = a?.title ?? a?.name ?? ''
  if (!slug || !title) return null
  return {
    slug,
    title,
    cover: normalizeCover(a?.cover) ?? normalizeCover(a?.image) ?? normalizeCover(a?.thumbnail) ?? null,
    tags: pickTags(a),
  }
}

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

async function fetchMap(url: string): Promise<Project[]> {
  const r = await fetch(url, { cache: 'no-store', headers: { Accept: 'application/json' } });
  if (!r.ok) {
    let body = '';
    try { body = await r.text(); } catch {}
    const msg = `Strapi ${r.status} @ ${url}${body ? ` — ${body.slice(0,200)}` : ''}`;
    throw new Error(msg);
  }
  const j = await r.json();
  return (j?.data ?? []).map(mapProject).filter(Boolean) as Project[]
}

export async function getProjectsListGrid(): Promise<Project[]> {
  const candidates = [
    projectsUrlTrue({ size:50, keys:['cover','tags'], sort:true }),
    projectsUrlTrue({ size:50, keys:['cover','tags'], sort:false }),
    projectsUrlTrue({ size:50, keys:['image','tags'], sort:true }),
    projectsUrlTrue({ size:50, keys:['thumbnail','tags'], sort:true }),
    projectsUrlAll(50, true),
    projectsUrlAll(50, false),
    new URL("/api/projects", STRAPI_URL).toString() + `?pagination[pageSize]=50${qsState()}`
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
