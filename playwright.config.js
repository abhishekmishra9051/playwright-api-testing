import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: 'tests',
  // Reporter to use
  reporter: [
    ['html'],
    ['allure-playwright'],
    ['json', { outputFile: './test-results/test-results.json' }]
  ],

  use: {
    baseURL: 'http://127.0.0.1:3000',
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],

});

