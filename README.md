# manidina.me — Portfolio & Solutions Digitales

Portfolio personnel et vitrine de services de **Christian HERIMANANTSOA** — développeur full-stack et spécialiste en automatisation (n8n, agents IA).

**[→ manidina.me](https://manidina.me)**

## Stack

| Technologie | Usage |
|---|---|
| **Next.js 16** (App Router, static export) | Framework |
| **Tailwind CSS 4 / design system custom** | Styles (dark/light, lime accent) |
| **Framer Motion** | Animations |
| **i18next** | i18n FR/EN avec détection navigateur |
| **GitHub Pages + Actions** | Déploiement (CNAME manidina.me) |

## Routes

| Route | Page |
|---|---|
| `/` | Accueil — hero, services, projets en vedette |
| `/portfolio` | Portfolio, compétences, réalisations |
| `/projets` | Projets client détaillés (carrousels captures) |
| `/contact` | Formulaire de contact (webhook n8n) |
| `/mentions-legales` | Mentions légales |
| `/confidentialite` | Politique de confidentialité |

## SEO

- Metadata complètes (title, description, Open Graph, Twitter, canonical)
- JSON-LD `schema.org/Person` (nom, localisation, compétences, réseaux)
- Sitemap XML + robots.txt
- HTML statique en français par défaut (i18n forcé côté serveur), détection navigateur côté client

## Dev

```bash
npm install
npm run dev     # Dev server
npm run build   # Static export → out/
```

## Déploiement

`git push origin main` → GitHub Actions (`./.github/workflows/deploy.yml`) → build statique → GitHub Pages sur manidina.me.

---

**Créé et géré par** [Christian HERIMANANTSOA](https://manidina.me/portfolio) — [GitHub](https://github.com/herimanantsoa51)