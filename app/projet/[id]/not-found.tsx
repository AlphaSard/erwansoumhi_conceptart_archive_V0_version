import Link from "next/link"

export default function NotFound() {
	return (
		<div className="min-h-screen bg-white flex items-center justify-center">
			<div className="text-center">
				<h1 className="text-2xl font-light mb-4">Projet non trouvé</h1>
				<p className="text-gray-600 mb-8">
					Le projet que vous recherchez n'existe pas.
				</p>
				<Link
					href="/"
					className="text-sm hover:underline border-b border-gray-300 pb-1"
				>
					Retour à l'accueil
				</Link>
			</div>
		</div>
	)
}
