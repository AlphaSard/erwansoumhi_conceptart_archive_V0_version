import { NextResponse } from "next/server";
import { STRAPI_URL } from "@/lib/projects-grid";
export async function GET() {
  return NextResponse.json({ STRAPI_URL, hasEnv: Boolean(STRAPI_URL) });
}

