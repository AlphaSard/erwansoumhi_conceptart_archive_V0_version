export interface Project {
	id: number
	title: string
	image: string
	type: "installation" | "photographie" | "performance" | "recherche" | "video"
	subtitle?: string
	description?: string
	year?: string
	medium?: string
	dimensions?: string
}

export const projects: Project[] = [
	{
		id: 1,
		title: "La Chambre",
		image: "/placeholder.svg?height=134&width=200",
		type: "installation",
		subtitle: "Installation mixte • 2023 • Galerie Contemporaine • 6 mois",
		description:
			"Une installation immersive explorant les espaces intimes et les mémoires personnelles à travers des jeux de lumière et d'ombre.",
		year: "2023",
		medium: "Installation mixte, vidéo, son",
		dimensions: "Variable",
	},
	{
		id: 2,
		title: "Palais",
		image: "/placeholder.svg?height=134&width=200",
		type: "photographie",
		subtitle: "Photographie • 2022 • Musée d'Art Moderne • 3 mois",
		description:
			"Réflexion sur l'architecture du pouvoir et les espaces de représentation dans la société contemporaine.",
		year: "2022",
		medium: "Photographie, installation",
		dimensions: "200 x 150 cm",
	},
	{
		id: 3,
		title: "Portrait",
		image: "/placeholder.svg?height=134&width=200",
		type: "photographie",
		subtitle: "Photographie numérique • 2023 • Centre d'Art • 4 mois",
		description:
			"Série de portraits explorant l'identité et la représentation de soi dans l'ère numérique.",
		year: "2023",
		medium: "Photographie numérique",
		dimensions: "50 x 70 cm (série de 12)",
	},
	{
		id: 4,
		title: "Balcons Ornementaux",
		image: "/placeholder.svg?height=134&width=200",
		type: "photographie",
	},
	{
		id: 5,
		title: "Installation",
		image: "/placeholder.svg?height=134&width=200",
		type: "installation",
	},
	{
		id: 6,
		title: "Trois Lune",
		image: "/placeholder.svg?height=134&width=200",
		type: "installation",
	},
	{
		id: 7,
		title: "Théâtre",
		image: "/placeholder.svg?height=134&width=200",
		type: "performance",
	},
	{
		id: 8,
		title: "Archétype",
		image: "/placeholder.svg?height=134&width=200",
		type: "recherche",
	},
	{
		id: 9,
		title: "La Plaine",
		image: "/placeholder.svg?height=134&width=200",
		type: "photographie",
	},
	{
		id: 10,
		title: "Miroir Rouge",
		image: "/placeholder.svg?height=134&width=200",
		type: "installation",
	},
	{
		id: 11,
		title: "OPTIQUE",
		image: "/placeholder.svg?height=134&width=200",
		type: "recherche",
	},
	{
		id: 12,
		title: "Intersection",
		image: "/placeholder.svg?height=134&width=200",
		type: "installation",
	},
	{
		id: 13,
		title: "Le Soleil de la Victoire",
		image: "/placeholder.svg?height=134&width=200",
		type: "photographie",
	},
	{
		id: 14,
		title: "L'Enfant de Mercure",
		image: "/placeholder.svg?height=134&width=200",
		type: "photographie",
	},
	{
		id: 15,
		title: "La Forêt de Mercure",
		image: "/placeholder.svg?height=134&width=200",
		type: "photographie",
	},
	{
		id: 16,
		title: "Nuit Solaire",
		image: "/placeholder.svg?height=134&width=200",
		type: "photographie",
	},
	{
		id: 17,
		title: "Intersection Topologique",
		image: "/placeholder.svg?height=134&width=200",
		type: "recherche",
	},
	{
		id: 18,
		title: "Projection",
		image: "/placeholder.svg?height=134&width=200",
		type: "video",
	},
	{
		id: 19,
		title: "Bibliothèque Infernale",
		image: "/placeholder.svg?height=134&width=200",
		type: "installation",
	},
	{
		id: 20,
		title: "Feu",
		image: "/placeholder.svg?height=134&width=200",
		type: "video",
	},
	{
		id: 21,
		title: "Le Soleil Noir",
		image: "/placeholder.svg?height=134&width=200",
		type: "photographie",
	},
	{
		id: 22,
		title: "Étourdissement",
		image: "/placeholder.svg?height=134&width=200",
		type: "performance",
	},
	{
		id: 23,
		title: "Vert",
		image: "/placeholder.svg?height=134&width=200",
		type: "photographie",
	},
	{
		id: 24,
		title: "Le Lait Solaire",
		image: "/placeholder.svg?height=134&width=200",
		type: "photographie",
	},
	{
		id: 25,
		title: "Bienveillance",
		image: "/placeholder.svg?height=134&width=200",
		type: "installation",
	},
	{
		id: 26,
		title: "Poésies",
		image: "/placeholder.svg?height=134&width=200",
		type: "recherche",
	},
	{
		id: 27,
		title: "La Labyrinthe de Thésée",
		image: "/placeholder.svg?height=134&width=200",
		type: "installation",
	},
	{
		id: 28,
		title: "Seeing Forest, La Table des Secrets",
		image: "/placeholder.svg?height=134&width=200",
		type: "installation",
	},
	{
		id: 29,
		title: "À Table !",
		image: "/placeholder.svg?height=134&width=200",
		type: "performance",
	},
	{
		id: 30,
		title: "Sentimental Market",
		image: "/placeholder.svg?height=134&width=200",
		type: "performance",
	},
	{
		id: 31,
		title: "Maison Étoilée",
		image: "/placeholder.svg?height=134&width=200",
		type: "installation",
	},
	{
		id: 32,
		title: "À Verlaine",
		image: "/placeholder.svg?height=134&width=200",
		type: "performance",
	},
	{
		id: 33,
		title: "À Verlaine",
		image: "/placeholder.svg?height=134&width=200",
		type: "performance",
	},
	{
		id: 34,
		title: "M Search",
		image: "/placeholder.svg?height=134&width=200",
		type: "recherche",
	},
	{
		id: 35,
		title: "Old News Bridge",
		image: "/placeholder.svg?height=134&width=200",
		type: "installation",
	},
	{
		id: 36,
		title: "L'Ombre",
		image: "/placeholder.svg?height=134&width=200",
		type: "photographie",
	},
	{
		id: 37,
		title: "Accident",
		image: "/placeholder.svg?height=134&width=200",
		type: "photographie",
	},
	{
		id: 38,
		title: "Mère et Enfant",
		image: "/placeholder.svg?height=134&width=200",
		type: "photographie",
	},
	{
		id: 39,
		title: "Les Petites Histoires",
		image: "/placeholder.svg?height=134&width=200",
		type: "video",
	},
	{
		id: 40,
		title: "La Mémoire de Théâtre",
		image: "/placeholder.svg?height=134&width=200",
		type: "performance",
	},
	{
		id: 41,
		title: "La Femme de Théâtre de Rêve",
		image: "/placeholder.svg?height=134&width=200",
		type: "performance",
	},
	{
		id: 42,
		title: "Frontière",
		image: "/placeholder.svg?height=134&width=200",
		type: "photographie",
	},
	{
		id: 43,
		title: "Voyage",
		image: "/placeholder.svg?height=134&width=200",
		type: "photographie",
	},
	{
		id: 44,
		title: "Convergence",
		image: "/placeholder.svg?height=134&width=200",
		type: "installation",
	},
	{
		id: 45,
		title: "Phénix",
		image: "/placeholder.svg?height=134&width=200",
		type: "installation",
	},
	{
		id: 46,
		title: "Blanc-Jaune",
		image: "/placeholder.svg?height=134&width=200",
		type: "photographie",
	},
	{
		id: 47,
		title: "Forme Blanche",
		image: "/placeholder.svg?height=134&width=200",
		type: "photographie",
	},
	{
		id: 48,
		title: "Espace",
		image: "/placeholder.svg?height=134&width=200",
		type: "installation",
	},
	{
		id: 49,
		title: "Espace",
		image: "/placeholder.svg?height=134&width=200",
		type: "installation",
	},
	{
		id: 50,
		title: "Espace",
		image: "/placeholder.svg?height=134&width=200",
		type: "installation",
	},
	{
		id: 51,
		title: "Bibliographie",
		image: "/placeholder.svg?height=134&width=200",
		type: "recherche",
	},
]

export function getProjectById(id: number): Project | undefined {
	return projects.find((project) => project.id === id)
}

export function getProjectsByType(type: string): Project[] {
	return projects.filter((project) => project.type === type)
}
