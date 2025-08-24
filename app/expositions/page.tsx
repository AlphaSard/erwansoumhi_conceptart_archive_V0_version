import Navigation from "@/components/navigation"
import ProjectGrid from "@/components/project-grid"

export default function ExpositionsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-normal mb-8 text-center">EXPOSITIONS</h1>

        <div className="space-y-8">
          <div>
            <h2 className="text-lg font-medium mb-4">Expositions Personnelles</h2>
            <div className="space-y-4">
              <div className="border-b border-gray-200 pb-4">
                <h3 className="font-medium mb-2">"Mémoires Fragmentées"</h3>
                <p className="text-sm text-gray-600">Galerie Thaddaeus Ropac, Paris, 2023</p>
              </div>

              <div className="border-b border-gray-200 pb-4">
                <h3 className="font-medium mb-2">"L'Invisible Territoire"</h3>
                <p className="text-sm text-gray-600">Centre d'Art Contemporain, Strasbourg, 2022</p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-medium mb-4">Expositions Collectives</h2>
            <div className="space-y-4">
              <div className="border-b border-gray-200 pb-4">
                <h3 className="font-medium mb-2">"Nouvelles Visions"</h3>
                <p className="text-sm text-gray-600">Palais de Tokyo, Paris, 2023</p>
              </div>

              <div className="border-b border-gray-200 pb-4">
                <h3 className="font-medium mb-2">"Biennale Européenne d'Images"</h3>
                <p className="text-sm text-gray-600">Strasbourg, 2022</p>
              </div>

              <div className="border-b border-gray-200 pb-4">
                <h3 className="font-medium mb-2">"Jeune Création Contemporaine"</h3>
                <p className="text-sm text-gray-600">La Friche, Marseille, 2021</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ProjectGrid />
    </div>
  )
}
