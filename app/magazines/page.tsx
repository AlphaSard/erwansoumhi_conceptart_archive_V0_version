import Navigation from "@/components/navigation"
import ProjectGrid from "@/components/project-grid"

export default function MagazinesPage() {
	return (
		<div className="min-h-screen bg-white">
			<Navigation />

			<div className="max-w-4xl mx-auto px-4 py-8">
				<h1 className="text-2xl font-normal mb-8 text-center">MAGAZINES</h1>

				<div className="space-y-6">
					<div className="border-b border-gray-200 pb-4">
						<h3 className="font-medium mb-2">
							"L'Art Contemporain en Question"
						</h3>
						<p className="text-sm text-gray-600">Art Press, n°485, Mars 2023</p>
					</div>

					<div className="border-b border-gray-200 pb-4">
						<h3 className="font-medium mb-2">
							"Nouvelles Voix de l'Art Français"
						</h3>
						<p className="text-sm text-gray-600">
							Beaux Arts Magazine, n°456, Janvier 2023
						</p>
					</div>

					<div className="border-b border-gray-200 pb-4">
						<h3 className="font-medium mb-2">
							"Portrait d'Artiste: Erwan Soumhi"
						</h3>
						<p className="text-sm text-gray-600">
							Artension, n°178, Septembre 2022
						</p>
					</div>

					<div className="border-b border-gray-200 pb-4">
						<h3 className="font-medium mb-2">"La Jeune Création Française"</h3>
						<p className="text-sm text-gray-600">
							Connaissance des Arts, n°812, Juin 2022
						</p>
					</div>
				</div>
			</div>

			<ProjectGrid />
		</div>
	)
}
