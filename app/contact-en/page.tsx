import Navigation from "@/components/navigation"
import ProjectGrid from "@/components/project-grid"

export default function ContactEnPage() {
	return (
		<div className="min-h-screen bg-white">
			<Navigation />

			<div className="max-w-4xl mx-auto px-4 py-8">
				<h1 className="text-2xl font-normal mb-8 text-center">
					CONTACT FR & EN
				</h1>

				<div className="grid grid-cols-1 md:grid-cols-2 gap-12">
					{/* French Contact */}
					<div>
						<h2 className="text-lg font-medium mb-6">FRANÇAIS</h2>
						<div className="space-y-4">
							<div className="text-center">
								<h3 className="font-medium mb-2">Erwan Soumhi</h3>
								<p className="text-sm text-gray-600">Artiste Plasticien</p>
							</div>

							<div className="space-y-2 text-sm">
								<p>
									<strong>Email:</strong> contact@erwansoumhi.com
								</p>
								<p>
									<strong>Téléphone:</strong> +33 (0)1 23 45 67 89
								</p>
								<p>
									<strong>Adresse:</strong> Paris, France
								</p>
							</div>

							<div className="space-y-2 text-sm">
								<p>
									<strong>Représentation:</strong>
								</p>
								<p>Galerie Thaddaeus Ropac</p>
								<p>7 rue Debelleyme, 75003 Paris</p>
								<p>Tel: +33 (0)1 42 72 99 00</p>
							</div>
						</div>
					</div>

					{/* English Contact */}
					<div>
						<h2 className="text-lg font-medium mb-6">ENGLISH</h2>
						<div className="space-y-4">
							<div className="text-center">
								<h3 className="font-medium mb-2">Erwan Soumhi</h3>
								<p className="text-sm text-gray-600">Visual Artist</p>
							</div>

							<div className="space-y-2 text-sm">
								<p>
									<strong>Email:</strong> contact@erwansoumhi.com
								</p>
								<p>
									<strong>Phone:</strong> +33 (0)1 23 45 67 89
								</p>
								<p>
									<strong>Address:</strong> Paris, France
								</p>
							</div>

							<div className="space-y-2 text-sm">
								<p>
									<strong>Representation:</strong>
								</p>
								<p>Galerie Thaddaeus Ropac</p>
								<p>7 rue Debelleyme, 75003 Paris</p>
								<p>Tel: +33 (0)1 42 72 99 00</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			<ProjectGrid />
		</div>
	)
}
