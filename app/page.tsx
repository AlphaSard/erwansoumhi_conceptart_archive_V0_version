import Navigation from "@/components/navigation"
import ProjectGrid from "@/components/project-grid"

export default function HomePage() {
	return (
		<div className="min-h-screen bg-white">
			<Navigation />

			{/* Main video section */}
			<div className="max-w-3xl mx-auto px-4 py-14">
				<div className="video-container bg-black">
					<div className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold tracking-wider">
						ERWAN
						<br />
						WAHAD
						<br />
						SOUMHI
					</div>
					{/* Video controls overlay */}
					<div className="absolute bottom-4 left-4 flex space-x-2">
						<div className="w-8 h-6 bg-gray-800 rounded flex items-center justify-center">
							<span className="text-white text-xs">▶</span>
						</div>
						<div className="flex space-x-1">
							<div className="w-4 h-4 bg-gray-600 rounded-full"></div>
							<div className="w-4 h-4 bg-gray-600 rounded-full"></div>
							<div className="w-4 h-4 bg-gray-600 rounded-full"></div>
							<div className="w-4 h-4 bg-gray-600 rounded-full"></div>
						</div>
					</div>
				</div>
			</div>

			{/* Project grid */}
			<ProjectGrid />
		</div>
	)
}
