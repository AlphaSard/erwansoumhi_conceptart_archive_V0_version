export type Tag = { name: string }
export type Project = {
	id: string | number
	slug: string
	title?: string
	tags?: Tag[]
}
export type RevalidatePayload = { secret?: string }
export type ProjectWithContent = Project & { content: string }
