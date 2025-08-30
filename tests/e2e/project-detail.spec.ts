import { test, expect } from '@playwright/test'

const base = process.env.PREVIEW_URL || 'http://localhost:3000'

test('detail page loads', async ({ page }) => {
  await page.goto(`${base}/projects`)
  const link = page.locator('a[href^="/projects/"]').first()
  await link.click()
  await page.waitForURL(/\/projects\/.+/)
  const img = page.locator('img').first()
  await expect(img).toBeVisible()
})

