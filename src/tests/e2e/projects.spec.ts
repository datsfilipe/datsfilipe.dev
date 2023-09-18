import { test, expect } from '@playwright/test'

test('Page should exist', async ({ page }) => {
  await page.goto('http://localhost:3000/projects')
  expect(page).toBeDefined()
})

test('Page should have a title', async ({ page }) => {
  await page.goto('http://localhost:3000/projects')
  const title = await page.title()
  expect(title).toBe('Filipe Lima')
})

test('Page should have valid links', async ({ page }) => {
  await page.goto('http://localhost:3000/projects')

  const links = await page.$$eval('a', (as) =>
    as.map((a) => a.getAttribute('href'))
  )

  const urlRegex = /^(http:\/\/localhost:3000|https?:\/\/[^\s/$.?#].[^\s]*)$/

  for (const link of links) {
    if (link !== null) {
      expect(
        link.startsWith('http')
          ? link
          : `http://localhost:3000${link}`
      ).toMatch(urlRegex)
    }
  }
})