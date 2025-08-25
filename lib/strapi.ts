export async function api<T>(
	path: string,
	init?: RequestInit,
): Promise<T | null> {
	const base = process.env.NEXT_PUBLIC_STRAPI_URL;
	if (!base) {
		if (process.env.VERCEL) return null;
		throw new Error("NEXT_PUBLIC_STRAPI_URL manquant");
	}
	const res = await fetch(`${base}${path}`, {
		next: { revalidate: 60 },
		...(init ?? {}),
	});
	if (!res.ok) {
		if (process.env.VERCEL) return null;
		throw new Error(`Strapi ${res.status}`);
	}
	return res.json() as Promise<T>;
}
