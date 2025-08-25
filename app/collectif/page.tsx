import Navigation from "@/components/navigation"
import ProjectGrid from "@/components/project-grid"

export default function CollectifPage() {
	return (
		<div className="min-h-screen bg-white">
			<Navigation />

			{/* Collectif content */}
			<div className="max-w-4xl mx-auto px-4 py-8">
				<div className="text-center mb-8">
					<div className="bg-black text-white p-8 mb-4">
						<h1 className="text-2xl">Sorry</h1>
						<p className="text-sm">We're having a little trouble.</p>
					</div>
					<p className="text-xs text-gray-600">COLLECTIF MANQUANT</p>
					<p className="text-xs text-gray-600">Bientôt disponible ici</p>
				</div>

				<div className="text-center mb-8">
					<div className="bg-black text-white p-8 mb-4">
						<h1 className="text-2xl">Sorry</h1>
						<p className="text-sm">We're having a little trouble.</p>
					</div>
					<p className="text-xs text-gray-600">COLLECTIF PROGRAMME</p>
					<p className="text-xs text-gray-600">https://www.programme.net</p>
				</div>
			</div>

			{/* Project grid */}
			<ProjectGrid />
		</div>
	)
}
