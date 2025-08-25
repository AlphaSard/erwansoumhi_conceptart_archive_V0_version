import { api } from "@/lib/strapi";
import { notFound } from "next/navigation";
export const revalidate = 60;

export default async function Page({
	params,
}: {
	params: Promise<{ slug: string }>;
}) {
	const { slug } = await params;

	const data = await api<{
		data: {
			id: number;
			attributes: { title: string; slug: string; excerpt?: string };
		}[];
	}>(`/api/projects?filters[slug][$eq]=${slug}&populate[tags]=true`);

	const item = data?.data?.[0];
	if (!item) return notFound();

	const a = item.attributes;
	return (
		<main className="p-6">
			<h1 className="text-3xl mb-4">{a.title}</h1>
			{a.excerpt && <p className="opacity-80">{a.excerpt}</p>}
		</main>
	);
}
