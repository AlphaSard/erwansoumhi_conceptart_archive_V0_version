export async function strapiFetch(path: string, params: Record<string, any> = {}) {
  const qs = new URLSearchParams();
  for (const [k, v] of Object.entries(params)) {
    qs.append(k, typeof v === 'object' ? JSON.stringify(v) : String(v));
  }
  const url = `${process.env.STRAPI_URL}${path}${qs.size ? `?${qs}` : ''}`;
  const res = await fetch(url, {
    headers: { Authorization: `Bearer ${process.env.STRAPI_TOKEN}` },
    next: { revalidate: 60 },
  });
  if (!res.ok) throw new Error(`Strapi ${res.status} on ${path}`);
  return res.json();
}
