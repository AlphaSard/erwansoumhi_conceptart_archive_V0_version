import Navigation from "@/components/navigation"
import ProjectGrid from "@/components/project-grid"

export default function ActivitesPage() {
	return (
		<div className="min-h-screen bg-white">
			<Navigation />

			{/* Activities content */}
			<div className="max-w-4xl mx-auto px-4 py-8">
				<div className="text-sm leading-relaxed space-y-4 mb-12">
					<p>
						<strong>EXPOSITIONS PERSONNELLES</strong>
					</p>
					<p>2019, Ciel Ouvert, Photographie d'Arlethan, Arles</p>
					<p>2018, BRUXELLES, Espace, Lieu d'Échange, Arles</p>
					<p>2017, BRUXELLES, Espace, Lieu d'Échange, Arles</p>
					<p>2016, BRUXELLES, Espace, Lieu d'Échange, Arles</p>
					<p>2015, BRUXELLES, Espace, Lieu d'Échange, Arles</p>
					<p>2014, BRUXELLES, Espace, Lieu d'Échange, Arles</p>
					<p>2013, BRUXELLES, Espace, Lieu d'Échange, Arles</p>
					<p>2012, BRUXELLES, Espace, Lieu d'Échange, Arles</p>
					<p>2011, BRUXELLES, Espace, Lieu d'Échange, Arles</p>
					<p>2010, BRUXELLES, Espace, Lieu d'Échange, Arles</p>
					<p>2009, BRUXELLES, Espace, Lieu d'Échange, Arles</p>
					<p>2008, BRUXELLES, Espace, Lieu d'Échange, Arles</p>
				</div>
			</div>

			{/* Project grid */}
			<ProjectGrid />
		</div>
	)
}
