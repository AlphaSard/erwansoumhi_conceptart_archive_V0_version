import { NextResponse } from "next/server";
import { STRAPI_URL } from "@/lib/projects-grid";

export const runtime = "nodejs";
export const preferredRegion = ["cdg1","fra1"];
export const maxDuration = 60;

export async function GET() {
  const url = `${STRAPI_URL}/api/projects?pagination[pageSize]=1`;
  const ctrl = new AbortController();
  const timer = setTimeout(() => ctrl.abort("timeout"), 45000);
  try {
    const r = await fetch(url, { cache: "no-store", signal: ctrl.signal, headers: { Accept: "application/json" } });
    const j = await r.json().catch(() => null);
    return NextResponse.json({ status: r.status, url, len: Array.isArray(j?.data) ? j.data.length : 0 });
  } catch (e:any) {
    return NextResponse.json({ error: String(e), url }, { status: 500 });
  } finally {
    clearTimeout(timer);
  }
}
