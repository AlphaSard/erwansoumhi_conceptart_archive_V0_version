import { NextResponse } from "next/server";
import { STRAPI_URL } from "@/lib/projects-grid";

export const runtime = "nodejs";
export const preferredRegion = ["cdg1","fra1"];
export const maxDuration = 60;

export async function GET() {
  return NextResponse.json({ STRAPI_URL, hasEnv: Boolean(STRAPI_URL) });
}
