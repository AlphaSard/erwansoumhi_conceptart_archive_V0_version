import Navigation from "@/components/navigation"
import ProjectGrid from "@/components/project-grid"
import Image from "next/image"

export default function AtelierPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Atelier content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Workshop image */}
        <div className="mb-8 text-center">
          <Image
            src="/placeholder.svg?height=300&width=500"
            alt="Atelier Nomade"
            width={500}
            height={300}
            className="mx-auto"
          />
          <div className="mt-4">
            <h2 className="text-sm font-medium">ATELIER NOMADE</h2>
            <p className="text-xs text-gray-600">Un espace ouvert à toutes formes</p>
          </div>
        </div>

        <div className="text-sm leading-relaxed space-y-4 mb-12">
          <p>
            Les ateliers Nomades sont plus pour faire l'exercice dans de plus "Nomade" où il s'agit de partir du point
            de Seuil.
          </p>
          <p>
            Chaque Déplacement basé sur seuils, et s'adresse à l'expérience basée en rapport de certaines et de
            différences en conception.
          </p>
          <p>
            <strong>FACEBOOK</strong>
            <br />
            <strong>INSTAGRAM</strong>
          </p>
        </div>
      </div>

      {/* Project grid */}
      <ProjectGrid />
    </div>
  )
}
