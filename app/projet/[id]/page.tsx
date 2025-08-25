// app/projet/[id]/page.tsx

import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { getProjectById, projects } from "@/lib/projects"

export const revalidate = 60

export default async function ProjectPage({
	params,
}: {
	params: Promise<{ id: string }>
}) {
	const { id } = await params
	const projectId = Number.parseInt(id, 10)
	const project = getProjectById(projectId)

	if (!project) {
		notFound()
	}

	return (
		<div className="max-w-4xl mx-auto px-4 py-12">
			<h1 className="text-2xl font-light mb-2 text-center">{project.title}</h1>
			{project.subtitle && (
				<p className="text-sm text-gray-600 mb-8 text-center font-light">
					{project.subtitle}
				</p>
			)}

			<div className="mb-12">
				<Image
					src={project.image || "/placeholder.svg"}
					alt={project.title}
					width={800}
					height={600}
					className="w-full h-auto"
				/>
			</div>

			{(project.description ||
				project.year ||
				project.medium ||
				project.dimensions) && (
				<div className="grid md:grid-cols-2 gap-12">
					{project.description && (
						<div>
							<h2 className="text-lg font-light mb-4">Description</h2>
							<p className="text-sm leading-relaxed text-gray-700">
								{project.description}
							</p>
						</div>
					)}

					{(project.year || project.medium || project.dimensions) && (
						<div>
							<h2 className="text-lg font-light mb-4">Informations</h2>
							<div className="space-y-2 text-sm">
								{project.year && (
									<div>
										<span className="font-medium">Année :</span> {project.year}
									</div>
								)}
								{project.medium && (
									<div>
										<span className="font-medium">Technique :</span>{" "}
										{project.medium}
									</div>
								)}
								{project.dimensions && (
									<div>
										<span className="font-medium">Dimensions :</span>{" "}
										{project.dimensions}
									</div>
								)}
							</div>
						</div>
					)}
				</div>
			)}

			<div className="mt-16">
				<h2 className="text-lg font-light mb-8">Vues de l'œuvre</h2>
				<div className="grid md:grid-cols-2 gap-8">
					<Image
						src={`/placeholder.svg?height=400&width=600&query=${project.title} detail view 1`}
						alt={`${project.title} - Vue 1`}
						width={600}
						height={400}
						className="w-full h-auto"
					/>
					<Image
						src={`/placeholder.svg?height=400&width=600&query=${project.title} detail view 2`}
						alt={`${project.title} - Vue 2`}
						width={600}
						height={400}
						className="w-full h-auto"
					/>
				</div>
			</div>

			<div className="mt-16 pt-8 border-t border-gray-200">
				<div className="flex justify-between items-center">
					{projectId > 1 && (
						<Link
							href={`/projet/${projectId - 1}`}
							className="text-sm hover:underline"
						>
							← Projet précédent
						</Link>
					)}
					<Link href="/" className="text-sm hover:underline">
						Tous les projets
					</Link>
					{projectId < projects.length && (
						<Link
							href={`/projet/${projectId + 1}`}
							className="text-sm hover:underline"
						>
							Projet suivant →
						</Link>
					)}
				</div>
			</div>
		</div>
	)
}
