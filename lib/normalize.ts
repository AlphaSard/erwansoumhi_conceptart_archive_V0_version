export function media(u?: string | null) {
  if (!u) return ''
  if (/^https?:\/\//.test(u)) return u
  const b = (process.env.NEXT_PUBLIC_STRAPI_URL || '').replace(/\/$/, '')
  return `${b}${u}`
}

export type Cover = { url: string; width?: number; height?: number; alt?: string }

export function normalizeCover(raw: unknown): Cover | null {
  if (!raw) return null
  const pick = (o: any) => (o?.url ? { url: o.url, width: o.width, height: o.height, alt: o.alternativeText } : null)
  const obj =
    typeof raw === 'string'
      ? { url: raw }
      : pick(raw) ||
        pick((raw as any)?.data?.attributes) ||
        pick((raw as any)?.formats?.large) ||
        pick((raw as any)?.formats?.medium) ||
        pick((raw as any)?.formats?.small) ||
        pick((raw as any)?.formats?.thumbnail) ||
        null
  return obj
    ? { url: media(obj.url), width: (obj as any).width ?? 1600, height: (obj as any).height ?? 900, alt: (obj as any).alt ?? '' }
    : null
}
