import { revalidatePath } from "next/cache";

export async function POST(req: Request) {
	const secret = process.env.REVALIDATE_SECRET;
	if (!secret || req.headers.get("x-revalidate-secret") !== secret)
		return new Response("Unauthorized", { status: 401 });
	const body = await req.json().catch(() => ({}));
	if (!body?.path) return new Response("Bad Request", { status: 400 });
	revalidatePath(body.path);
	return Response.json({ revalidated: true, path: body.path });
}
