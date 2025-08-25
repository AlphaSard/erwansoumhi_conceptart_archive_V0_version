import type React from "react"
import Navigation from "@/components/navigation"
import ProjectGrid from "@/components/project-grid"

export default function ProjetLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<div className="min-h-screen bg-white">
			<Navigation />
			<main>
				{children}
				<div className="border-t border-black">
					<ProjectGrid />
				</div>
			</main>
		</div>
	)
}
