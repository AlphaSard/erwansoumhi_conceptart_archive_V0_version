import { getProjectBySlug } from '@/lib/project-detail'
import Image from 'next/image'
import { notFound } from 'next/navigation'

export const revalidate = 60;

export async function generateMetadata({ params }: any) {
  const p = await getProjectBySlug(params.slug)
  return { title: p?.title ?? 'Project' }
}

export default async function Page({ params }: any) {
  const p = await getProjectBySlug(params.slug)
  if (!p) return notFound()
  return (
    <main className="container mx-auto p-6 space-y-6">
      <h1 className="text-3xl font-semibold">{p.title}</h1>
      {p.cover && (
        <Image
          src={p.cover.url}
          alt={p.cover.alt || p.title}
          width={p.cover.width ?? 1600}
          height={p.cover.height ?? 900}
          sizes="(min-width:1024px) 66vw, 100vw"
          className="w-full h-auto rounded-2xl object-cover"
        />
      )}
      {p.tags?.length > 0 && (
        <ul className="flex flex-wrap gap-2">
          {p.tags.map((t: string) => (
            <li key={t} className="px-2 py-1 rounded bg-gray-200 text-sm">
              {t}
            </li>
          ))}
        </ul>
      )}
    </main>
  )
}
