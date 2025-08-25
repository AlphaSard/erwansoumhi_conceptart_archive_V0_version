import { NextResponse } from "next/server"

export async function GET() {
	const url = `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/projects?populate=tags`
	try {
		const res = await fetch(url)
		const data = await res.json()
		return NextResponse.json({
			url,
			status: res.status,
			items: data?.data?.length ?? 0,
			sample: data?.data?.slice(0, 2) ?? [],
		})
	} catch (e) {
		return NextResponse.json({ error: String(e) }, { status: 500 })
	}
}
