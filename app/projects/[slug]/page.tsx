// app/projects/[slug]/page.tsx
import { notFound } from "next/navigation";

export const revalidate = 60;

async function getProject(slug: string) {
  const base = process.env.STRAPI_URL!;
  const token = process.env.STRAPI_TOKEN!;
  const url = `${base}/api/projects?filters[slug][$eq]=${encodeURIComponent(
    slug
  )}&populate[tags]=true`;

  const res = await fetch(url, {
    headers: { Authorization: `Bearer ${token}` },
    next: { tags: [`project:${slug}`] },
  });
  if (!res.ok) throw new Error(`Strapi ${res.status}`);
  const json = await res.json();
  return json.data?.[0] ?? null;
}

export default async function Page(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const p = await getProject(slug);
  if (!p) notFound();

  return (
    <main style={{ padding: 16 }}>
      <h1>{p.title}</h1>
      <p>Slug: {p.slug}</p>
      <h2>Tags</h2>
      <ul>{p.tags?.map((t: any) => <li key={t.id}>{t.name}</li>)}</ul>
    </main>
  );
}
