import { revalidatePath, revalidateTag } from "next/cache"

type RevalidatePayload = {
	secret?: string
	tag?: string
	path?: string
}

export async function POST(req: Request) {
	let body: RevalidatePayload | null = null
	try {
		body = (await req.json()) as RevalidatePayload
	} catch {
		body = null
	}

	if (!body?.secret || body.secret !== process.env.REVALIDATE_SECRET) {
		return new Response("Invalid token", { status: 401 })
	}

	if (body.tag) revalidateTag(body.tag)
	if (body.path) revalidatePath(body.path)

	return new Response("ok", { status: 200 })
}
