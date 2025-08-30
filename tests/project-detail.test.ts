import { vi, expect, it, beforeEach } from 'vitest'
import { getProjectBySlug } from '@/lib/project-detail'

beforeEach(() => {
  ;(globalThis as any).fetch = vi.fn(async () => ({ ok: true, json: async () => ({ data: [] }) }))
})

it('retourne null si vide', async () => {
  const r = await getProjectBySlug('x')
  expect(r).toBeNull()
})

