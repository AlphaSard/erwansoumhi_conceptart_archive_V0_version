import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
	const secret = process.env.REVALIDATE_SECRET;
	if (!secret || req.headers.get("x-revalidate-secret") !== secret) {
		return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
	}

	let body: any = null;
	try {
		body = await req.json();
	} catch {
		return NextResponse.json({ error: "Bad Request" }, { status: 400 });
	}

	if (!body?.path) {
		return NextResponse.json({ error: "Bad Request" }, { status: 400 });
	}

	revalidatePath(body.path);
	return NextResponse.json({ revalidated: true, path: body.path });
}
