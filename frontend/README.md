# Manidina.me — Frontend

Site vitrine React 19 + Vite 7 pour **MANIDINA**.

## Stack

| Technologie | Rôle |
|---|---|
| React 19 | UI framework |
| Vite 7 | Bundler & dev server |
| React Router 7 | Routing |
| Framer Motion 12 | Animations |
| i18next | Internationalisation FR/EN |
| GitHub Pages | Hébergement + déploiement |

## Pages

| Route | Contenu |
|---|---|
| `/` | Accueil (Hero, Services, About, Projets) |
| `/projets` | Projets détaillés (Express Sale, Soaharilandy) |
| `/portfolio` | Portfolio / Admin (compétences + tous les projets) |
| `/contact` | Formulaire de contact + coordonnées |
| `/mentions-legales` | Mentions légales |
| `/confidentialite` | Politique de confidentialité |

## Développement

```bash
npm install
npm run dev      # Dev server sur http://localhost:5173
npm run build    # Build production + prerender SEO
npm run preview  # Preview du build
```

## Performance

- Code-splitting via `React.lazy()` sur chaque page
- Chunks vendors séparés : React, Framer Motion, i18next
- Lazy loading des images dans les carrousels
- Pré-rendu SEO statique pour chaque route

## Déploiement

Push sur `main` → GitHub Actions build + déploiement sur manidina.me.
