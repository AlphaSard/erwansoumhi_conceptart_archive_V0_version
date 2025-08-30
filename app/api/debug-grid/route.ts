import { NextResponse } from "next/server";
import { getProjectsListGrid } from "@/lib/projects-grid";

export const runtime = "nodejs";
export const preferredRegion = ["cdg1","fra1"];
export const maxDuration = 60;

export async function GET() {
  try {
    const items = await getProjectsListGrid();
    return NextResponse.json({ count: items.length, sample: items[0] ?? null });
  } catch (e:any) {
    return NextResponse.json({ error: String(e) }, { status: 500 });
  }
}
