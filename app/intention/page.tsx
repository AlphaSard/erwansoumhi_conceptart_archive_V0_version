import Navigation from "@/components/navigation"
import ProjectGrid from "@/components/project-grid"

export default function IntentionPage() {
	return (
		<div className="min-h-screen bg-white">
			<Navigation />

			{/* Intention content */}
			<div className="max-w-4xl mx-auto px-4 py-8">
				<div className="text-sm leading-relaxed space-y-4 mb-12">
					<p>
						Né en 1985 en Savoie. Vit entre Bruxelles et la Franche comté depuis
						4 ans.
					</p>
					<p>
						Après 5 ans d'études journalistiques à la IHECS de Bruxelles, Erwan
						Soumhi s'oriente vers la LUCA (Université des arts visuels). Il
						change d'orientation. Dans la continuité, il développe une pratique
						plastique qui oscille entre film, installation et performance. Après
						quelques pratiques artistiques et expériences plus conceptuelles.
					</p>
					<p>
						Il développe une pratique plastique qui oscille entre film,
						installation et performance.
					</p>
					<p>
						Depuis le début, Spécialement dans la ligne artistique, la
						construction artistique et ses représentations métaphoriques et
						leurs métamorphoses artistiques. En parallèle, il prend part à
						plusieurs collectifs qui ont pour but d'enrichir et de développer
						une pratique artistique collective. Il développe une pratique
						plastique qui oscille entre film, installation et performance.
					</p>
					<p>
						Il développe une pratique artistique collective. Il développe une
						pratique plastique qui oscille entre film, installation et
						performance.
					</p>
					<p>
						Ses travaux se situent dans des lieux urbains et campagne. Il
						développe un travail autour de Paris. Il s'attache de la Belgique et
						de la France, et développe une pratique artistique collective. Il
						développe une pratique plastique qui oscille entre film,
						installation et performance. Il développe une pratique artistique
						collective. Il développe une pratique plastique qui oscille entre
						film, installation et performance. Il développe une pratique
						artistique collective. Il développe une pratique plastique qui
						oscille entre film, installation et performance.
					</p>
				</div>
			</div>

			{/* Project grid */}
			<ProjectGrid />
		</div>
	)
}
