import { describe, it, expect } from 'vitest'
import { media, normalizeCover } from '@/lib/normalize'

describe('media', () => {
  it('returns empty for falsy', () => {
    expect(media(undefined)).toBe('')
    expect(media(null as any)).toBe('')
  })
  it('keeps absolute URLs', () => {
    expect(media('https://a/b.png')).toBe('https://a/b.png')
  })
})

describe('normalizeCover', () => {
  const ABS = 'https://example.com/x.png'
  it('string URL', () => {
    const c = normalizeCover(ABS)
    expect(c?.url).toBe(ABS)
  })
  it('flat object', () => {
    const c = normalizeCover({ url: '/x.png', width: 100, height: 50, alternativeText: 'alt' })
    expect(c?.url.endsWith('/x.png')).toBe(true)
    expect(c?.width).toBe(100)
    expect(c?.height).toBe(50)
    expect(c?.alt).toBe('alt')
  })
  it('data.attributes', () => {
    const c = normalizeCover({ data: { attributes: { url: '/y.png', width: 10, height: 5, alternativeText: 'da' } } })
    expect(c?.url.endsWith('/y.png')).toBe(true)
    expect(c?.width).toBe(10)
    expect(c?.height).toBe(5)
    expect(c?.alt).toBe('da')
  })
  it('formats.large fallback', () => {
    const c = normalizeCover({ formats: { large: { url: '/l.png' } } })
    expect(c?.url.endsWith('/l.png')).toBe(true)
  })
  it('formats.medium fallback', () => {
    const c = normalizeCover({ formats: { medium: { url: '/m.png' } } })
    expect(c?.url.endsWith('/m.png')).toBe(true)
  })
  it('formats.small fallback', () => {
    const c = normalizeCover({ formats: { small: { url: '/s.png' } } })
    expect(c?.url.endsWith('/s.png')).toBe(true)
  })
  it('formats.thumbnail fallback', () => {
    const c = normalizeCover({ formats: { thumbnail: { url: '/t.png' } } })
    expect(c?.url.endsWith('/t.png')).toBe(true)
  })
  it('null -> null', () => {
    expect(normalizeCover(null)).toBeNull()
    expect(normalizeCover(undefined)).toBeNull()
  })
})

