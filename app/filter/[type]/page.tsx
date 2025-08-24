import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import Navigation from "@/components/navigation"
import { getProjectsByType } from "@/lib/projects"

const validTypes = ["video", "installation", "recherche", "performance", "photographie"]

interface FilterPageProps {
  params: {
    type: string
  }
}

export default function FilterPage({ params }: FilterPageProps) {
  if (!validTypes.includes(params.type)) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="pt-2.5">
        <div className="text-center py-8">
          <h1 className="text-2xl font-light text-black capitalize">{params.type}</h1>
        </div>
        <FilteredProjectGrid type={params.type} />
      </main>
    </div>
  )
}

function FilteredProjectGrid({ type }: { type: string }) {
  const filteredProjects = getProjectsByType(type)

  return (
    <div className="max-w-8xl mx-auto px-8 py-8">
      <div className="flex flex-wrap justify-center gap-9">
        {filteredProjects.map((project) => (
          <div key={project.id} className="group cursor-pointer">
            <Link href={`/projet/${project.id}`}>
              <div className="w-[200px] h-[134px] bg-gray-100 overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={200}
                  height={134}
                  className="w-full h-full object-cover group-hover:opacity-80 transition-opacity"
                />
              </div>
            </Link>
            <p className="text-xs mt-2 text-center w-[200px] text-black">{project.title}</p>
            <Link href={`/filter/${project.type}`} className="block text-center">
              <span className="text-xs text-gray-500 hover:text-gray-700 transition-colors">{project.type}</span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}
