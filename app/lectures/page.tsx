import Navigation from "@/components/navigation"
import ProjectGrid from "@/components/project-grid"

export default function LecturesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-normal mb-8 text-center">LECTURES</h1>

        <div className="space-y-6">
          <div className="border-b border-gray-200 pb-4">
            <h3 className="font-medium mb-2">Conférence - "L'Art Contemporain et la Mémoire"</h3>
            <p className="text-sm text-gray-600">Université Paris 8, 2023</p>
          </div>

          <div className="border-b border-gray-200 pb-4">
            <h3 className="font-medium mb-2">Table Ronde - "Identité et Création Artistique"</h3>
            <p className="text-sm text-gray-600">Centre Pompidou, 2022</p>
          </div>

          <div className="border-b border-gray-200 pb-4">
            <h3 className="font-medium mb-2">Intervention - "Nouvelles Technologies et Art Visuel"</h3>
            <p className="text-sm text-gray-600">HEAR Strasbourg, 2021</p>
          </div>
        </div>
      </div>

      <ProjectGrid />
    </div>
  )
}
