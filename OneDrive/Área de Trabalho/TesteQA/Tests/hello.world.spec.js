// @ts-check
import { test, expect } from '@playwright/test';

test('deve carregar a página inicial e verificar o título e o logo', async ({ page }) => {
    // Navega para a página principal (usa baseURL se configurado)
    await page.goto('https://bugbank.netlify.app/');

    // Verifica o título da página (aceita variações para ambiente público)
    await expect(page).toHaveTitle(/BugBank|banco com bugs/i);

    // Verifica o heading principal (mais resiliente que título exato)
    const mainHeading = page.getByRole('heading', { level: 1 });
    await expect(mainHeading).toContainText(/banco com bugs|BugBank/i);

    // Verifica se o botão principal de Login está visível
    const loginButton = page.getByRole('button', { name: 'Acessar' });
    await expect(loginButton).toBeVisible();
});