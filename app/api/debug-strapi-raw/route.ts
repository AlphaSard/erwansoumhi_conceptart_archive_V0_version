import { NextResponse } from "next/server";
import { STRAPI_URL } from "@/lib/projects-grid";
export async function GET() {
  const url = `${STRAPI_URL}/api/projects?pagination[pageSize]=1`;
  try {
    const r = await fetch(url, { cache: "no-store" });
    const j = await r.json().catch(() => null);
    return NextResponse.json({ status: r.status, url, len: Array.isArray(j?.data) ? j.data.length : 0 });
  } catch (e:any) {
    return NextResponse.json({ error: String(e), url }, { status: 500 });
  }
}

