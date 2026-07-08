# manidina.me — Next.js

Migration test de manidina.me vers **Next.js** (App Router, static export).

**Créé et géré par** [Christian HERIMANANTSOA](https://manidina.me/portfolio)

## Stack

- **Framework** : Next.js 16 (App Router)
- **Animation** : Framer Motion
- **i18n** : i18next (FR/EN)
- **Déploiement** : GitHub Pages (static export)

## Routes

| Route | Page |
|---|---|
| `/` | Accueil |
| `/projets` | Projets client |
| `/portfolio` | Portfolio & compétences |
| `/contact` | Formulaire de contact |
| `/mentions-legales` | Mentions légales |
| `/confidentialite` | Politique de confidentialité |

## Dev

```bash
npm install
npm run dev     # Dev server
npm run build   # Static export → out/
```

## Déploiement

Push sur `nextjs-migration` → GitHub Actions → export statique vers manidina.me.
