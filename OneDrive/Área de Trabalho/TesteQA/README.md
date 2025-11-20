# Playwright BugBank - Testes Automatizados

[![Playwright tests](https://github.com/SinvalCustodio/ProjetoTesteDeSoftwere_Playwright_BugBank-4P/actions/workflows/playwright.yml/badge.svg)](https://github.com/SinvalCustodio/ProjetoTesteDeSoftwere_Playwright_BugBank-4P/actions/workflows/playwright.yml)

Este repositório contém uma suíte de testes Playwright criada para o site BugBank (exemplo público). Abaixo está um resumo do que foi feito, como executar os testes localmente, como gerar relatórios e como o CI foi configurado.

## Resumo das alterações

- Corrigidos e adaptados os arquivos de teste em `Tests/hello.world.spec.js` e `Tests/login.spec.js` para usar a API do `@playwright/test` e seletores compatíveis com o site.
- Adicionado `playwright.config.js` com `testDir: 'Tests'` e `baseURL: 'https://bugbank.netlify.app'`.
- Criado/ajustado `package.json` no root com scripts convenientes (`test`, `test:report`, `show-report`, `test:ci`).
- Workflow GitHub Actions adicionado em `.github/workflows/playwright.yml` para executar os testes em push e pull requests e fazer upload do relatório como artifact.
- Instaladas dependências do Playwright e navegadores locais; gerado relatório HTML em `playwright-report/index.html`.

## Arquivos principais criados/alterados

- `Tests/hello.world.spec.js` — teste da página inicial (título, heading e botão de login).
- `Tests/login.spec.js` — testes de título e link de requisitos.
- `playwright.config.js` — configuração do Playwright (baseURL, testDir, timeouts).
- `package.json` — scripts e dependências (`@playwright/test`).
- `.github/workflows/playwright.yml` — workflow para CI no GitHub.
- `playwright-report/` — pasta gerada contendo `index.html` com o relatório HTML.

## Como executar localmente (Windows PowerShell)

### Passos rápidos (Windows PowerShell)

Instalação (apenas na primeira vez):

```powershell
cd "C:\Users\pctat\OneDrive\Área de Trabalho\TesteQA"
npm install
npx playwright install
```

Rodar os testes:

```powershell
npx playwright test
```

Gerar relatório HTML (executa os testes e cria `playwright-report`):

```powershell
npm run test:report
```

Abrir o relatório HTML no navegador padrão:

```powershell
npx playwright show-report
# ou abrir diretamente o arquivo
Start-Process .\playwright-report\index.html
```

Rodar os testes em modo CI (reporter GitHub):

```powershell
npm run test:ci
```

## Detalhes do GitHub Actions (CI)

- Arquivo: `.github/workflows/playwright.yml`

- O workflow executa em `ubuntu-latest`, instala dependências (`npm ci`), instala navegadores (`npx playwright install --with-deps`), executa os testes com `--reporter=github` e faz o upload da pasta `playwright-report` como artifact.

Se quiser adicionar um badge de status no `README.md`, após o primeiro push você pode usar a URL do workflow para gerar o markdown do badge do GitHub Actions.

## Próximos passos recomendados

- Revisar e commitar as mudanças locais (`git add` / `git commit`) e fazer push para o repositório remoto.
- Adicionar variáveis/segredos se precisar executar testes com credenciais.
- Expandir a suíte de testes com cenários de fluxo (login, transferências, etc.).
- Adicionar execução em múltiplas browsers/configurações via `projects` no `playwright.config.js` se precisar de cobertura cross-browser.


## Contato / notas

Se surgir algum erro ao executar os comandos, cole a saída aqui que eu ajudo a depurar.





