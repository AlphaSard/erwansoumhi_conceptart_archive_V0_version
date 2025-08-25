import Navigation from "@/components/navigation"
import ProjectGrid from "@/components/project-grid"

export default function PrixPage() {
	return (
		<div className="min-h-screen bg-white">
			<Navigation />

			<div className="max-w-4xl mx-auto px-4 py-8">
				<h1 className="text-2xl font-normal mb-8 text-center">PRIX</h1>

				<div className="space-y-6">
					<div className="border-b border-gray-200 pb-4">
						<h3 className="font-medium mb-2">
							Prix de la Biennale Européenne d'Images
						</h3>
						<p className="text-sm text-gray-600">Strasbourg, 2022</p>
					</div>

					<div className="border-b border-gray-200 pb-4">
						<h3 className="font-medium mb-2">Bourse de Création Artistique</h3>
						<p className="text-sm text-gray-600">Région Grand Est, 2021</p>
					</div>

					<div className="border-b border-gray-200 pb-4">
						<h3 className="font-medium mb-2">Prix Jeune Création</h3>
						<p className="text-sm text-gray-600">La Friche, Marseille, 2020</p>
					</div>

					<div className="border-b border-gray-200 pb-4">
						<h3 className="font-medium mb-2">Mention Spéciale du Jury</h3>
						<p className="text-sm text-gray-600">HEAR Strasbourg, 2019</p>
					</div>
				</div>
			</div>

			<ProjectGrid />
		</div>
	)
}
