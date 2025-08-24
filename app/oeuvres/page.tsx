import Navigation from "@/components/navigation"
import ProjectGrid from "@/components/project-grid"

export default function OeuvresPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-2xl font-normal mb-8 text-center">ŒUVRES</h1>
      </div>

      <ProjectGrid />
    </div>
  )
}
