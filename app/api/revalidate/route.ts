import { revalidateTag } from "next/cache";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

const bad = (msg = "Invalid secret") =>
  NextResponse.json({ ok: false, error: msg }, { status: 401 });
const ok = (data: any) => NextResponse.json({ ok: true, ...data });

export async function GET(req: NextRequest) {
  const secret = req.nextUrl.searchParams.get("secret");
  if (secret !== process.env.REVALIDATE_SECRET) return bad();

  const slug = req.nextUrl.searchParams.get("slug") ?? undefined;
  revalidateTag("projects");
  if (slug) revalidateTag(`project:${slug}`);

  return ok({ revalidated: { projects: true, slug } });
}

export async function POST(req: NextRequest) {
  const secret = req.nextUrl.searchParams.get("secret");
  if (secret !== process.env.REVALIDATE_SECRET) return bad();

  const body = await req.json().catch(() => null);
  const slug =
    body?.entry?.slug ??
    body?.data?.slug ??
    body?.slug ??
    undefined;

  revalidateTag("projects");
  if (slug) revalidateTag(`project:${slug}`);

  return ok({ revalidated: { projects: true, slug }, received: !!body });
}
