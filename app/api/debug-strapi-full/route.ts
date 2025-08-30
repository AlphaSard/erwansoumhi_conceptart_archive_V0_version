import { NextResponse } from "next/server";
import { STRAPI_URL } from "@/lib/projects-grid";

export async function GET() {
  const u = new URL("/api/projects", STRAPI_URL);
  u.searchParams.set("pagination[pageSize]", "1");
  u.searchParams.set("populate", "*");
  u.searchParams.append("sort[0]", "createdAt:desc");
  const r = await fetch(u.toString(), { cache: "no-store" });
  const j = await r.json().catch(() => null);
  return NextResponse.json({ url: u.toString(), sample: j?.data?.[0] ?? null });
}

