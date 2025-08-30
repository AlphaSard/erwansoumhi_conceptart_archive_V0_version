import { test, expect } from '@playwright/test'

const base = process.env.PREVIEW_URL || 'http://localhost:3000'

test('projects image loads', async ({ page }) => {
  await page.goto(`${base}/projects`, { waitUntil: 'domcontentloaded' })
  const img = page.getByRole('img').first()
  await expect(img).toBeVisible()
  await expect(async () => {
    const ok = await img.evaluate((n) => (n as HTMLImageElement).naturalWidth > 0)
    expect(ok).toBeTruthy()
  }).toPass()
})

