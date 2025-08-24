import Navigation from "@/components/navigation"
import ProjectGrid from "@/components/project-grid"

export default function BioPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="prose prose-sm max-w-none">
          <p className="mb-4">Né en 1985 en Syrie, Erwan Soumhi Bensaïd vit et travaille aujourd'hui à Paris.</p>

          <p className="mb-4">
            Il suit un parcours pluridisciplinaire à la HEAR de Strasbourg, Haute École des Arts du Rhin, puis obtient
            diplôme « Design Graphique », Dnsep en multimédia, il développe une pratique plastique qui mêle entre films,
            installations et performances, avant d'opérer pratique quotidienne et expérience pure conceptuelle.
          </p>

          <p className="mb-4">
            Ses œuvres questionnent les limites du visible et de l'invisible, explorent les territoires de l'intime et
            du collectif. Il s'intéresse particulièrement aux questions liées à la mémoire, à l'identité et aux
            représentations contemporaines d'une société en mouvement. À travers ses projets, il part d'un élément
            individuel ou d'un fait divers pour interroger des questions plus larges sur notre époque et nos modes de
            vie.
          </p>

          <p className="mb-4">
            Ses œuvres ont été présentées dans de nombreuses expositions collectives et individuelles en France et à
            l'étranger. Il a bénéficié du soutien de différents organismes de production et diffusion, à la Biennale
            Européenne d'Images de Strasbourg, aux films collectifs comme la Friche et la Criée à Paris, et a reçu
            plusieurs prix et bourses de création. Également Friche, Pôle Sup centre dans le cadre du Prix de la
            Biennale.
          </p>
        </div>
      </div>

      <ProjectGrid />
    </div>
  )
}
