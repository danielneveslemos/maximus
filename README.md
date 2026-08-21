# Maximus Agronegócio — site institucional

Site de apresentação da Maximus Agronegócio (confinamento e boitel no interior de São Paulo).

**Stack:** React 19 · Vite 8 · TypeScript · Tailwind CSS 4 · deploy na Vercel.

## Requisitos

- Node.js 20+
- npm 10+

## Desenvolvimento local

```bash
npm install
npm run dev
```

Abre em `http://localhost:5184`.

## Scripts

| Comando | O que faz |
|---------|-----------|
| `npm run dev` | Servidor de desenvolvimento |
| `npm run build` | Build de produção (`dist/`) |
| `npm run preview` | Preview do build local |
| `npm run lint` | ESLint |
| `npm run typecheck` | TypeScript |

## Variáveis de ambiente (deploy)

Copie `.env.example` e configure na Vercel (ou no `.env.local` local):

| Variável | Preview / apresentação | Go-live (domínio do cliente) |
|----------|------------------------|------------------------------|
| `VITE_SITE_URL` | vazio | `https://www.exemplo.com.br` (sem barra final) |
| `VITE_ALLOW_INDEXING` | `false` | `true` |

- **Preview:** site não indexa no Google (`robots.txt` + meta `noindex`).
- **Go-live:** defina o domínio canônico e `VITE_ALLOW_INDEXING=true`; o build gera `sitemap.xml` e libera indexação.

## Estrutura

```
src/
  content/     Textos, SEO e galeria (editar conteúdo aqui)
  components/  UI reutilizável
  pages/       Home e Mídia
public/        Imagens, vídeos, favicons
scripts/       Geração de robots/sitemap e ajuste de HTML no build
```

## Deploy (Vercel)

1. Importe o repositório ou faça upload do zip.
2. **Root Directory:** raiz do projeto (onde está este `package.json`).
3. **Build Command:** `npm run build`
4. **Output Directory:** `dist`
5. Configure as variáveis de ambiente conforme a tabela acima.

O arquivo `vercel.json` já inclui rewrite SPA e headers de segurança básicos.

## Pós go-live (manual)

1. Google Search Console — verificar domínio e enviar sitemap (`/sitemap.xml`).
2. Google Business Profile — cadastro das unidades (fora do código).

## Licença

Projeto proprietário — direitos reservados ao cliente após entrega.
