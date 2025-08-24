import Navigation from "@/components/navigation"
import ProjectGrid from "@/components/project-grid"

export default function PortfolioPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Portfolio content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-sm leading-relaxed space-y-4 mb-12">
          <p>1. Étudier la loi qui régit un système.</p>
          <p>2. Poser et reproduire le concept de définition avec images.</p>
          <p>3. Construire des dispositifs qui donnent un corps à ces représentations abstraites.</p>
          <p>4. Créer des objets qui permettent de comprendre les phénomènes qui s'y rattachent.</p>
          <p>5. Légitimation des connaissances dans arts, sciences, humanisme et civilisations.</p>
          <p>6. Définir la logique dans la recherche progressive d'expériences de leurs propres métamorphoses.</p>
          <p>7. Créer des objets qui permettent de comprendre les phénomènes qui s'y rattachent.</p>
          <p>8. Légitimation des connaissances dans arts, sciences, humanisme et civilisations.</p>
          <p>9. Définir la logique dans la recherche progressive d'expériences de leurs propres métamorphoses.</p>
          <p>10. Étudier analyser la figuration, dans une éthique.</p>
          <p>11. Étudier analyser la figuration, dans une éthique.</p>
          <p>12. Poser des liens de droit de l'Amour, se poser certains et s'en dégager de ce qui le limite.</p>
          <p>13. Définir ce rôle dans la mesure de l'invisible Humanité.</p>
          <p>14. Définir ce rôle dans la mesure de l'invisible Humanité.</p>
          <p>15. Réaliser méthodiquement l'observation du réalité de la physique éthérique.</p>
          <p>16. Le temps pour réaliser certaines Choses.</p>
          <p>17. Le temps pour réaliser certaines Choses.</p>
          <p>18. Organiser la réalité.</p>
        </div>
      </div>

      {/* Project grid */}
      <ProjectGrid />
    </div>
  )
}
