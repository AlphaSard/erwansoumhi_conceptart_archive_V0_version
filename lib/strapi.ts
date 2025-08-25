export const STRAPI = process.env.NEXT_PUBLIC_STRAPI_URL;

export async function api<T>(
	path: string,
	init?: RequestInit,
): Promise<T | null> {
	if (!STRAPI) {
		if (process.env.VERCEL) return null; // évite crash SSG si var absente
		throw new Error("NEXT_PUBLIC_STRAPI_URL manquant");
	}
	const res = await fetch(`${STRAPI}${path}`, {
		next: { revalidate: 60 },
		...(init ?? {}),
	});
	if (!res.ok) throw new Error(`Strapi ${res.status}`);
	return res.json() as Promise<T>;
}
