// @ts-check
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://bugbank.netlify.app/');
  await expect(page).toHaveTitle(/BugBank|Bug Bank/);
});

 test('abre requisitos', async ({ page }) => {
   await page.goto('https://bugbank.netlify.app/');
   // Link de requisitos disponível no site
   const requisitosLink = page.getByRole('link', { name: /Conheça nossos requisitos|Conheça nossos requisitos/i });
   await expect(requisitosLink).toBeVisible();
   await requisitosLink.click();
   // Verifica que navegou para a rota /requirements
   await expect(page).toHaveURL(/\/requirements/);
 });