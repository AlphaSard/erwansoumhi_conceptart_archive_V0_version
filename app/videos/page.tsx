import Navigation from "@/components/navigation"
import ProjectGrid from "@/components/project-grid"

export default function VideosPage() {
	return (
		<div className="min-h-screen bg-white">
			<Navigation />

			<div className="max-w-4xl mx-auto px-4 py-8">
				<h1 className="text-2xl font-normal mb-8 text-center">VIDÉOS</h1>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
					<div className="space-y-4">
						<div className="video-container bg-black">
							<div className="absolute inset-0 flex items-center justify-center text-white">
								<span className="text-4xl">▶</span>
							</div>
						</div>
						<h3 className="text-center text-sm">La Chambre - 2023</h3>
					</div>

					<div className="space-y-4">
						<div className="video-container bg-black">
							<div className="absolute inset-0 flex items-center justify-center text-white">
								<span className="text-4xl">▶</span>
							</div>
						</div>
						<h3 className="text-center text-sm">Intersection - 2022</h3>
					</div>

					<div className="space-y-4">
						<div className="video-container bg-black">
							<div className="absolute inset-0 flex items-center justify-center text-white">
								<span className="text-4xl">▶</span>
							</div>
						</div>
						<h3 className="text-center text-sm">Mémoires - 2021</h3>
					</div>

					<div className="space-y-4">
						<div className="video-container bg-black">
							<div className="absolute inset-0 flex items-center justify-center text-white">
								<span className="text-4xl">▶</span>
							</div>
						</div>
						<h3 className="text-center text-sm">Projection - 2020</h3>
					</div>
				</div>
			</div>

			<ProjectGrid />
		</div>
	)
}
