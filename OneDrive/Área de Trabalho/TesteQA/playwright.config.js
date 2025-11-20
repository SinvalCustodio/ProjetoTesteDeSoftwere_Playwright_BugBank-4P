// @ts-check
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: 'Tests',
  use: {
    baseURL: 'https://bugbank.netlify.app',
    headless: true,
    viewport: { width: 1280, height: 720 },
    actionTimeout: 0,
    navigationTimeout: 30000
  },
  reporter: 'list'
});
