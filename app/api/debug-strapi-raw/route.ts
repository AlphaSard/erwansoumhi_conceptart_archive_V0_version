import { NextResponse } from "next/server";
import { STRAPI_URL } from "@/lib/projects-grid";
const u = new URL("/api/projects", STRAPI_URL);
u.searchParams.set("pagination[pageSize]", "1");
u.searchParams.set("populate[cover]", "*");
u.searchParams.set("populate[tags]", "*");
u.searchParams.append("sort[0]", "createdAt:desc");
export async function GET(){
  try{
    const r = await fetch(u.toString(), { cache:"no-store", headers:{Accept:"application/json"} });
    const t = await r.text(); let len=0; try{ const j=JSON.parse(t); len = Array.isArray(j?.data)? j.data.length:0; }catch{}
    return NextResponse.json({ status:r.status, url:u.toString(), len, body:t.slice(0,200) });
  }catch(e:any){ return NextResponse.json({ error:String(e), url:u.toString() }, { status:500 }); }
}
