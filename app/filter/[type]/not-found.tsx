import Link from "next/link"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-2xl font-light text-black mb-4">Type de projet non trouvé</h2>
        <p className="text-gray-600 mb-8">Le type de projet demandé n'existe pas.</p>
        <Link href="/" className="text-black hover:text-gray-600 transition-colors underline">
          Retour à l'accueil
        </Link>
      </div>
    </div>
  )
}
