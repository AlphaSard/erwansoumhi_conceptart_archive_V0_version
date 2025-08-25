import { getProjectBySlug, mediaUrl, type Project } from "@/lib/strapi";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export const revalidate = 0;

type Props = { params: { slug: string } };

export default async function Page({ params }: Props) {
	const project: Project | null = await getProjectBySlug(params.slug);
	if (!project) return notFound();

	return (
		<main className="max-w-3xl mx-auto p-6 space-y-4">
			<Link href="/projects" className="text-sm underline opacity-70">
				← Projects
			</Link>
			<h1 className="text-3xl font-semibold">{project.title}</h1>
			{project.excerpt && <p className="opacity-80">{project.excerpt}</p>}

			{project.cover?.url && (
				<div className="mt-4">
					<Image
						src={mediaUrl(project.cover.url)}
						alt={project.cover.alternativeText || project.title}
						width={1200}
						height={675}
						className="rounded-lg"
					/>
				</div>
			)}

			{project.tags?.length ? (
				<p className="text-sm opacity-70">
					Tags: {project.tags.map((t) => t.name).join(", ")}
				</p>
			) : null}
		</main>
	);
}
