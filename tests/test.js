const { chromium, test } = require('playwright');
const { test, expect } = require('@playwright/test');
test('Hello World API test', async ({ page }) => {
  await page.goto('http://localhost:3000');
  const text = await page.innerText('body');
  expect(text).toBe('Hello, World!');
});
