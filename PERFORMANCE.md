# 🗺️ Roadmap de Performance — Portfolio

> Criado em: 31/08/2026
> **Baseline medido:** First Load JS = **150 kB** | Route `/` = 49.9 kB | Shared chunks = 101 kB

## 📊 Diagnóstico atual

| Item | Situação |
|---|---|
| Imagens | 6 imagens de projetos com `<img>` puro, **sem lazy load** — todas carregam no primeiro acesso. `igp-logo.png` (269 KB) e `073Labs_Brandmark.png` (257 KB) |
| Otimizador de imagens | **Desligado** (`images.unoptimized: true` no `next.config.mjs`) |
| SSR | `page.tsx` é server component, mas o `LanguageProvider` (client) envolve a página inteira → tudo vira JS client-side |
| Lazy loading | Nenhum. Todas as seções abaixo da dobra vão no bundle inicial |
| Dependências | ~30 deps mortas (recharts, embla, vaul, cmdk, zod, react-hook-form, ~22 pacotes Radix...) |
| Fonte | ✅ Inter via `next/font` — já otimizado |
| Scripts de terceiros | ✅ Nenhum — já otimizado |

---

## 🟢 Fase 1 — Quick wins (~1h, impacto alto)

- [ ] Remover `images.unoptimized: true` do `next.config.mjs`
- [ ] Comprimir `igp-logo.png` e `073Labs_Brandmark.png` (converter para WebP, ~80% menor)
- [ ] Trocar os `<img>` de `components/projects.tsx` por `next/image` com `sizes` e lazy loading automático
- [ ] Remover import morto do `FloatingChat` em `app/page.tsx`
- [ ] Remover `webpack cache = false` de dev no `next.config.mjs`
- [ ] Remover query strings bogus (`?height=200&width=300`) das imagens

## 🟡 Fase 2 — Bundle e hidratação (~2-3h)

- [ ] `next/dynamic` nas seções abaixo da dobra (Projects, Experience, Skills, Education, Contact, Footer)
- [ ] Adicionar `experimental.optimizePackageImports: ["lucide-react"]` no `next.config.mjs`
- [ ] Limpeza de dependências: deletar `components/ui/*` não utilizados
- [ ] Remover ~30 deps não usadas do `package.json` (ver lista abaixo)
- [ ] Deletar assets não usados em `public/` (`neuro21.jpg`, `logoDinx.png`, placeholders)

### Dependências a remover (Fase 2)

```
recharts, embla-carousel-react, react-day-picker, date-fns, vaul, cmdk,
input-otp, sonner, react-resizable-panels, react-hook-form,
@hookform/resolvers, zod, next-themes, @radix-ui/react-toast,
@radix-ui/react-accordion, @radix-ui/react-alert-dialog,
@radix-ui/react-aspect-ratio, @radix-ui/react-checkbox,
@radix-ui/react-collapsible, @radix-ui/react-context-menu,
@radix-ui/react-hover-card, @radix-ui/react-menubar,
@radix-ui/react-navigation-menu, @radix-ui/react-popover,
@radix-ui/react-progress, @radix-ui/react-radio-group,
@radix-ui/react-scroll-area, @radix-ui/react-select,
@radix-ui/react-separator, @radix-ui/react-slider,
@radix-ui/react-switch, @radix-ui/react-tabs,
@radix-ui/react-toggle, @radix-ui/react-toggle-group,
@radix-ui/react-tooltip
```

> ⚠️ Manter apenas: `@radix-ui/react-avatar`, `@radix-ui/react-dialog`, `@radix-ui/react-dropdown-menu`, `@radix-ui/react-label`, `@radix-ui/react-slot`

## 🟠 Fase 3 — Arquitetura i18n (~3-4h, maior ganho estrutural)

- [ ] Extrair traduções inline (~23 KB de JS) do `LanguageProvider` para JSONs por idioma (`/locales/pt.json`, `/locales/en.json`, `/locales/es.json`)
- [ ] Carregar apenas o idioma ativo (dynamic import do JSON)
- [ ] Transformar seções estáticas em **server components** (Footer, Education, Skills)

## 🔵 Fase 4 — Medição contínua

- [ ] Ativar **Speed Insights** na Vercel (grátis no Hobby)
- [ ] Ativar **Web Analytics** na Vercel (grátis no Hobby)
- [ ] Rodar Lighthouse antes/depois de cada fase (LCP, CLS, TBT)

---

## 🎯 Metas

| Métrica | Baseline | Meta |
|---|---|---|
| First Load JS | 150 kB | < 100 kB |
| LCP | ~2.5s | < 1.5s |
| Imagens de projetos | ~720 KB total | < 150 KB total |
| Dependências | 49 | ~20 |
