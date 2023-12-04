const { chromium, test } = require('playwright');

test('Hello-world API', async () => {
  const browser = await chromium.launch();
  const context = await browser.newContext();
  const page = await context.newPage();

  await page.goto('http://localhost:3000');
  const text = await page.textContent('body');

  expect(text).toBe('Hello, World!');

  await browser.close();
});
