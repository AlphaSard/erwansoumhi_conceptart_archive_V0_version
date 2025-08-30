import { test, expect } from '@playwright/test'

const base = process.env.PREVIEW_URL || 'http://localhost:3000'

test('projects grid has at least one card', async ({ page }) => {
  const res = await page.goto(`${base}/projects`)
  expect(res?.status()).toBe(200)
  const cards = page.locator('a[href^="/projects/"]')
  await expect(cards.first()).toBeVisible()
})

test('projects page=2 loads', async ({ page }) => {
  const res = await page.goto(`${base}/projects?page=2`)
  expect(res?.status()).toBe(200)
})

test('projects tag filter if available', async ({ page }) => {
  await page.goto(`${base}/projects`)
  const chip = page.locator('a[href*="?tag="]').first()
  if (await chip.count()) {
    await chip.click()
    await expect(page).toHaveURL(/\?tag=/)
  }
})

