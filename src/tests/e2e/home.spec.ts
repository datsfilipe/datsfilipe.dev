import { test, expect } from '@playwright/test'

test('Page should exist', async ({ page }) => {
  await page.goto('http://localhost:3000/')
  expect(page).toBeDefined()
})

test('Page should have a title', async ({ page }) => {
  await page.goto('http://localhost:3000/')
  const title = await page.title()
  expect(title).toBe('Filipe Lima')
})